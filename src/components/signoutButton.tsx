"use client";
import React from "react";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
  return (
    <div>
      <button
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Sign Out
      </button>
    </div>
  );
}