
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
<<<<<<< HEAD
import {HomeComponent} from "@/components/HomeComponent";


=======
import SignoutButton from "@/components/signoutButton";
import HomeHere from "@/components/homeHere";
import Carousel from "@/components/Carousel";
import SearchBar from "@/components/Search";
>>>>>>> 3978eba13bbd9d03c2be10dcd76326a360b952bd
export default async function Home() {
  const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <main className="h-full">
<<<<<<< HEAD
    <HomeComponent/>
=======
      {/* <HomeHere /> */}
      <Carousel />
        <SearchBar/>

      <div className="container">
        {/* <Carousel /> */}

        <div className="px-10 lg:px-80">
          <h1 className="text-4xl">Hi Bro</h1>
          {JSON.stringify(session)}
        </div>
      </div>
      {/* <SignoutButton /> */}
>>>>>>> 3978eba13bbd9d03c2be10dcd76326a360b952bd
    </main>
  );
}
