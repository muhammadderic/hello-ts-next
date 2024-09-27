import prisma from "@/lib/db";

// Fetch all users
export const fetchUsers = async () => {
  const users = await prisma.post.findMany();

  return users;
}