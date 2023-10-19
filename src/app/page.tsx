
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


export function generateMetadata(){
  return{
    title:"Home",
    description:"Welcome to Letzkhelo, your sports destination. Connect, compete, and grow in a vibrant community of athletes.Join us today!",
    keywords:"Discover Letzkhelo, your sports hub. Connect, compete, and grow in our vibrant athlete community. Join us now! Sports, Community, Athletes, Competition, Growth, Connection.",
    robots:"index, follow",
    language:"EN"
  }
}
