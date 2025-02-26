import { db } from "./dbConfig";
import { Users, Subscriptions, GeneratedContent } from "./schema";
import { eq, sql, and, desc } from "drizzle-orm";
import { sendWelcomeEmail, initMailtrap } from "../mailtrap";

export async function updateUserPoints(userId: string, points: number) {
  try {
    const [updatedUser] = await db
      .update(Users)
      .set({ points: sql`${Users.points} + ${points}` })
      .where(eq(Users.stripeCustomerId, userId))
      .returning();
    return updatedUser;
  } catch (error) {
    console.error("Error updating user points:", error);
    return null;
  }
}

export async function getUserPoints(userId: string) {
  try {
    console.log("Fetching points for user:", userId);
    const users = await db
      .select({ points: Users.points, id: Users.id, email: Users.email })
      .from(Users)
      .where(eq(Users.stripeCustomerId, userId))
      .execute();
    console.log("Fetched users:", users);
    if (users.length === 0) {
      console.log("No user found with stripeCustomerId:", userId);
      return 0;
    }
    return users[0].points || 0;
  } catch (error) {
    console.error("Error fetching user points:", error);
    return 0;
  }
}

export async function createOrUpdateSubscription(
  userId: string,
  stripeSubscriptionId: string,
  plan: string,
  status: string,
  currentPeriodStart: Date,
  currentPeriodEnd: Date
) {
  try {
    const [user] = await db
      .select({ id: Users.id })
      .from(Users)
      .where(eq(Users.stripeCustomerId, userId))
      .limit(1);

    if (!user) {
      console.error(`No user found with stripeCustomerId: ${userId}`);
      return null;
    }

    const existingSubscription = await db
      .select()
      .from(Subscriptions)
      .where(eq(Subscriptions.stripeSubscriptionId, stripeSubscriptionId))
      .limit(1);

    let subscription;
    if (existingSubscription.length > 0) {
      // Update existing subscription
      [subscription] = await db
        .update(Subscriptions)
        .set({
          plan,
          status,
          currentPeriodStart,
          currentPeriodEnd,
        })
        .where(eq(Subscriptions.stripeSubscriptionId, stripeSubscriptionId))
        .returning()
        .execute();
    } else {
      [subscription] = await db
        .insert(Subscriptions)
        .values({
          userId: user.id,
          stripeSubscriptionId,
          plan,
          status,
          currentPeriodStart,
          currentPeriodEnd,
        })
        .returning()
        .execute();
    }

    console.log("Subscription created or updated:", subscription);
    return subscription;
  } catch (error) {
    console.error("Error creating or updating subscription:", error);
    return null;
  }
}

export async function saveGeneratedContent(
  userId: string,
  content: string,
  prompt: string,
  contentType: string
) {
  try {
    const [savedContent] = await db
      .insert(GeneratedContent)
      .values({
        userId: sql`(SELECT id FROM ${Users} WHERE stripe_customer_id = ${userId})`,
        content,
        prompt,
        contentType,
      })
      .returning()
      .execute();
    return savedContent;
  } catch (error) {
    console.error("Error saving generated content:", error);
    return null;
  }
}

export async function getGeneratedContentHistory(
  userId: string,
  limit: number = 10
) {
  try {
    const history = await db
      .select({
        id: GeneratedContent.id,
        content: GeneratedContent.content,
        prompt: GeneratedContent.prompt,
        contentType: GeneratedContent.contentType,
        createdAt: GeneratedContent.createdAt,
      })
      .from(GeneratedContent)
      .where(
        eq(
          GeneratedContent.userId,
          sql`(SELECT id FROM ${Users} WHERE stripe_customer_id = ${userId})`
        )
      )
      .orderBy(desc(GeneratedContent.createdAt))
      .limit(limit)
      .execute();
    return history;
  } catch (error) {
    console.error("Error fetching generated content history:", error);
    return [];
  }
}

export async function createOrUpdateUser(
  clerkUserId: string,
  email: string,
  name: string
) {
  try {
    console.log("Creating or updating user:", clerkUserId, email, name);

    const [existingUser] = await db
      .select()
      .from(Users)
      .where(eq(Users.stripeCustomerId, clerkUserId))
      .limit(1)
      .execute();

    if (existingUser) {
      const [updatedUser] = await db
        .update(Users)
        .set({ name, email })
        .where(eq(Users.stripeCustomerId, clerkUserId))
        .returning()
        .execute();
      console.log("Updated user:", updatedUser);
      return updatedUser;
    }

    const [userWithEmail] = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email))
      .limit(1)
      .execute();

    if (userWithEmail) {
      const [updatedUser] = await db
        .update(Users)
        .set({ name, stripeCustomerId: clerkUserId })
        .where(eq(Users.email, email))
        .returning()
        .execute();
      console.log("Updated user:", updatedUser);
      sendWelcomeEmail(email, name);
      return updatedUser;
    }

    const [newUser] = await db
      .insert(Users)
      .values({ email, name, stripeCustomerId: clerkUserId, points: 50 })
      .returning()
      .execute();
    console.log("New user created:", newUser);
    sendWelcomeEmail(email, name);
    return newUser;
  } catch (error) {
    console.error("Error creating or updating user:", error);
    return null;
  }
}

export const getPromptTemplate = (type: string, prompt: string) => {
  switch (type) {
    case "twitter":
      return `Create an engaging Twitter thread (5-7 tweets) about: ${prompt}. 
      Format as a numbered list of tweets. Each tweet should be under 280 characters.
      Include hashtags where appropriate. Make it conversational and shareable.`;
    
    case "instagram":
      return `Create an engaging Instagram caption about: ${prompt}.
      Include relevant hashtags at the end. Maximum 2200 characters.
      Make it visually descriptive and emotionally appealing.`;
    
    case "linkedin":
      return `Create a professional LinkedIn post about: ${prompt}.
      Focus on industry insights, professional development, or thought leadership.
      Format with paragraphs and bullet points if appropriate. 1200-1600 characters ideal.`;
    
    case "tiktok":
      return `Create a TikTok script about: ${prompt}.
      Include [HOOK] at the beginning to grab attention in the first 3 seconds.
      Then provide [SCRIPT] with clear instructions for a 15-30 second video.
      Make it trendy, engaging, and include any sound/music suggestions.
      End with call-to-action. Total length 60-90 seconds when read aloud.`;
    
    case "youtube_shorts":
      return `Create a YouTube Shorts script about: ${prompt}.
      Structure it with [HOOK], [MAIN CONTENT], and [CALL TO ACTION].
      Script should be concise for a 30-60 second vertical video.
      Include visual directions in [brackets] for what to show on screen.
      Make it engaging and fast-paced.`;
    
    case "facebook":
      return `Create an engaging Facebook post about: ${prompt}.
      Include an attention-grabbing first line.
      Add emojis where appropriate for engagement.
      End with a question or call-to-action to encourage comments.
      Optimal length 100-250 words.`;
    
    default:
      return `Create content about: ${prompt}`;
  }
};
