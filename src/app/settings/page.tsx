import { redirect } from "next/navigation";
import { auth } from "@/auth";
import SettingPage from "./SettingPage";

const Settings = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingPage role={user?.role} />
}

export default Settings