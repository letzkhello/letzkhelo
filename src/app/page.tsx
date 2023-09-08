
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       Letz start Working
//     </main>
//   );
// }



import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/options";
import SignoutButton from "@/components/signoutButton";
import HomeHere from "@/components/homeHere";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <main className="h-full">
      <HomeHere />
      <div className="container">
        <div className="px-10 lg:px-80">
          <h1 className="text-4xl">Hi Bro</h1>
          {JSON.stringify(session)}
        </div>
      </div>
      <SignoutButton />
    </main>
  );
}