"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import img from "@/../public/avatar.png";
import SignoutButton from "@/components/signoutButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiMenuAltLeft } from "react-icons/bi";

interface Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

export default function Navbar({ fixed }: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { data: session, status } = useSession();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="navbar bg-black  lg:py-2 lg:h-[20vh] flex justify-between items-center z-10">
      <div className="flex items-center justify-between px-4 py-4 lg:hidden ">
        <div className="z-50">
          <button
            onClick={openMenu}
            className={` p-0 w-10 h-10 rounded-full text-white ${
              isOpen ? "z-0 hidden" : "z-10"
            } flex items-center justify-center`}
          >
            <BiMenuAltLeft size={"30"} />
          </button>
        </div>

        <div
          className={`fixed bottom-0 left-0 h-full w-64 bg-white border border-solid ${
            isOpen ? "translate-x-0 z-10" : "-translate-x-full z-10"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black text-white"
          >
            Close
          </button>

          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Menu</h1>
            <ul>
              <li className="mb-2">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/allUsers"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  All Players
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href={session ? `/profile` : `/login`}
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/createTeam"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Register Your Team
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/allTeam"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Registered Teams
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative top-[-15px] lg:top-[-32px]  xl:top-[-40px] ">
        <Link href="/" className="btn btn-ghost normal-case text-xl ">
          <Image
            src="/LetzKhelo.png"
            alt="logo"
            height={125}
            width={125}
            className="rounded-full align-top w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" // Adjust the classes as needed
          />
        </Link>
      </div>

      <div id="navLinks">
        <ul className="DESKTOP-MENU hidden space-x-4 lg:flex text-white">
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/"
                className="text-xl font-semibold pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/about"
                className="text-xl font-semibold pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                About
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/contact"
                className="text-xl font-semibold pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/allUsers"
                className="text-xl font-semibold pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                All Players
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/createTeam"
                className="text-xl font-semibold pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                Register Your Team
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/allTeam"
                className="text-xl font-semibold pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                Registered Teams
              </Link>
            </motion.div>
          </li>
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar bg-white"
        >
          <div className="w-10 rounded-full bg-white">
            <Image
              src={session?.user?.image ?? img}
              alt="Picture of the user"
              width={500}
              height={500}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Link
            href={session ? `/profile` : `/login`}
            className="ml-4 font-medium text-black transition-all duration-200 hover:underline"

            
          >
            <li>Profile</li>
          </Link>

          {session?.user == null ? (
            <Link
              href="/login"
              title=""
              className="ml-4 font-medium text-black transition-all duration-200 hover:underline"
            >
              <li>Sign In</li>
            </Link>
          ) : (
            <li>
              <SignoutButton />
            </li>
          )}
          <li></li>
        </ul>
      </div>
    </div>
  );
}
