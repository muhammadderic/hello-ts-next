import { redirect } from "next/navigation";
import SettingPage from "./SettingPage";
import getSession from "@/lib/getSession";

const Settings = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return <SettingPage role={user?.role} />
}

export default Settings