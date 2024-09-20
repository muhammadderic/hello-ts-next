"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type SettingPageProps = {
  role: string;
};

export const updateRole = async ({ role }: SettingPageProps) => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("User not found");
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      role
    }
  })

  revalidatePath("/");
}