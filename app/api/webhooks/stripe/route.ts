import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { createOrUpdateSubscription, updateUserPoints } from "@/utils/db/actions";
import { db } from "@/utils/db/dbConfig";
import { Users } from "@/utils/db/schema";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const endpointSecret = "whsec_AhFY8hrwwOnaMnL6hq4gRoaQJ4eGUZKC";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature")!;

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret
    );

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
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
          const subscription = await stripe.subscriptions.retrieve(subscriptionId) as Stripe.Subscription;

          // Determine the number of points based on the plan
          let pointsToAdd = 0;
          if (subscription.items.data[0].price.nickname === "Basic") {
            pointsToAdd = 100;
          } else if (subscription.items.data[0].price.nickname === "Pro") {
            pointsToAdd = 500;
          }

          // Update subscription in database
          await createOrUpdateSubscription(
            userId,
            subscriptionId,
            subscription.items.data[0].price.nickname || "Unknown",
            subscription.status,
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
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }
}
