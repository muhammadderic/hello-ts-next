"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export const createPost = async (formData: FormData) => {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      published: formData.get("published") === "true"
    }
  })

  revalidatePath("/");
}