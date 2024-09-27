import AddPost from "@/components/AddPost";
import { fetchUsers } from "@/services/userService";

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Hello Deric</h1>
      {
        users.map((user) => <p key={user.id}>{user.title}</p>)
      }
      <AddPost />
    </div>
  );
}
