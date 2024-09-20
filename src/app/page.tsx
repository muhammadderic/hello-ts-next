import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  /*
  prisma.user.findMany() value:
  [
    {
      id: 'your id',
      name: 'mucodev de',
      email: 'mucodevde@gmail.com',
      emailVerified: null,
      image: 'image url',
      createdAt: 2024-09-19T18:08:39.264Z,
      updatedAt: 2024-09-19T18:08:39.264Z
    }
  ]
  */
  const users = await prisma.user.findMany();

  return (
    <div className="flex flex-row px-8 gap-8">
      <h1>Users Page</h1>
      <ul>
        {
          users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p> {" "}
              {
                user.emailVerified ? (
                  <span>You are verified</span>
                ) : (
                  <span>email not verified</span>
                )
              }
              <br />
              <Link
                href={"/settings"}
                className="border-2 border-black py-2 px-4 rounded-lg"
              >
                Setting
              </Link>
            </div>
          ))
        }
      </ul>
    </div>
  );
}
