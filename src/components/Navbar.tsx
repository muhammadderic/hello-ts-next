import { auth } from "@/auth";
import SignIn from "./sign-in";
import SignOut from "./sign-out";

const Navbar = async () => {
  /* 
  session from auth() value:
  {
    user: {
      id: 'id',
      name: 'name',
      email: 'email',
      emailVerified: null,
      image: 'image link',
      createdAt: '2024-09-19T18:08:39.264Z',
      updatedAt: '2024-09-19T18:08:39.264Z'
    },
    sessionToken: 'token',
    userId: 'id',
    expires: '2024-10-19T18:08:39.295Z',
    createdAt: '2024-09-19T18:08:39.299Z',
    updatedAt: '2024-09-19T18:08:39.299Z'
  }
  */
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex justify-between px-8">
      {
        user?.name ? (
          <div className="flex gap-4">
            <h2>Hello</h2> {user?.name}
          </div>
        ) : <SignIn />
      }
      {
        user?.name ? (
          <SignOut />
        ) : (
          <div>
            <h2>You are not signed in</h2>
          </div >
        )
      }
    </div>
  )
}

export default Navbar
