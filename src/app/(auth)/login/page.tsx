"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router, { useRouter } from "next/navigation";
export default function SignInOne() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(()=>{
    checkLogin();
  },[session]);

  const checkLogin =()=>{
    (session?.user===undefined)?"":`${router.push('/')}`;
  }

  const googleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <section>
      <div className="space-y-3 mt-3 p-12">
        <button
          type="button"
          className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
          onClick={googleLogin}
        >
          <span className="mr-2 inline-block"></span>
          <Image
            src="/google_icon.png"
            height={30}
            width={30}
            alt="Google Icon"
            className="mr-3"
          />
          Sign in with Google
        </button>
      </div>
    </section>
  );
}
