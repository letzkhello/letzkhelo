
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
import {HomeComponent} from "@/components/HomeComponent";


export default async function Home() {
  const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <main className="h-full">
    <HomeComponent/>
    </main>
  );
}
