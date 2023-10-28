"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <button
    onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
  >
    <div>
     
        Sign Out
    </div>
    </button>

  );
}