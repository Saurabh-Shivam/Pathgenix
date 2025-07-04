"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

// for updating user
export async function updateUser(data) {
  // if user logged in or not
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // if user exists on our db or not
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  // establishing connection with the database
  try {
    // Start a transaction(comes from prisma) to handle both operations
    // transaction make sure that all of the api calls are complete and if any one fails
    // the transaction will also fail giving us an error
    const result = await db.$transaction(
      async (tx) => {
        // First check if industry exists
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        // If industry doesn't exist, create it with default values
        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);

          industryInsight = await db.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
          // industryInsight = await tx.industryInsight.create({
          //   data: {
          //     industry: data.industry,
          //     salaryRanges: [], // default empty array
          //     growthRate: 0, // default value
          //     demandLevel: "MEDIUM", // dafault value
          //     topSkills: [], // default empty array
          //     marketOutlook: "NEUTRAL", // dafault value
          //     keyTrends: [], // default empty array
          //     recommendedSkills: [], // default empty array
          //     nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
          //   },
          // });
        }

        // Now update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updatedUser, industryInsight };
      },
      {
        timeout: 10000, // default: 5000
      }
    );

    revalidatePath("/");
    // return result.user;
    return { success: true, ...result };
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile");
  }
}

// for fetching the onboarding status
export async function getUserOnboardingStatus() {
  // if user is logged in or not
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // if user exists on our db or not
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    // return {
    //   isOnboarded: !!user?.industry,
    // };
    return {
      isOnboarded: user && user.industry ? true : false,
    };
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    throw new Error("Failed to check onboarding status");
  }
}
