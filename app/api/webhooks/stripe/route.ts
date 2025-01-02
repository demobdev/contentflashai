import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { createOrUpdateSubscription, updateUserPoints } from "@/utils/db/actions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  if (!signature) {
    console.error("No Stripe signature found");
    return NextResponse.json({ error: "No Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.client_reference_id;
    const subscriptionId = session.subscription as string;

    if (!userId || !subscriptionId) {
      console.error("Missing userId or subscriptionId in session", { session });
      return NextResponse.json(
        { error: "Invalid session data" },
        { status: 400 }
      );
    }

    try {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      // Determine the number of points based on the plan
      let pointsToAdd = 0;
      if (subscription.plan.nickname === "Basic") {
        pointsToAdd = 100;
      } else if (subscription.plan.nickname === "Pro") {
        pointsToAdd = 500;
      }

      // Update subscription in database
      await createOrUpdateSubscription(
        userId,
        subscriptionId,
        subscription.plan.nickname || "Unknown",
        "active",
        new Date(subscription.current_period_start * 1000),
        new Date(subscription.current_period_end * 1000)
      );

      // Add points to user's account
      await updateUserPoints(userId, pointsToAdd);

      console.log(`Successfully processed subscription and added ${pointsToAdd} points for user ${userId}`);
    } catch (error: any) {
      console.error("Error processing subscription:", error);
      return NextResponse.json(
        { error: "Error processing subscription", details: error.message },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
