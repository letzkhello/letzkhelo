"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import defaultavatar from "@/../public/avatar.png";
import SignoutButton from "@/components/signoutButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiMenuAltLeft } from "react-icons/bi";
import axios from "axios";


interface Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
}

interface User {
  email: string;
  name: string;
  intrestedSport: any;
  instagramLink: any;
  age: any;
  weight: any;
  _id: any;
  imageLink: any;
}

export default function Navbar({ fixed }: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { data: session, status } = useSession();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [singleUser, setSingleUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const identifier = session?.user?.email;
        console.log(identifier);
        const response = await axios.get(`/api/users/getsingleuser/${identifier}`);
        // console.log(response.data.data);
        setSingleUser(response.data.data);
        // console.log(singleUser,"setted",typeof(singleUser));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [session]);
  

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="navbar lg:py-2 lg:h-[20vh] md:px-24 flex justify-between items-center z-10">
      <div className="flex items-center justify-between px-4 py-4 lg:hidden ">
        <div className="z-50">
          <button
            onClick={openMenu}
            className={` p-0 w-10 h-10 rounded-full text-black ${
              isOpen ? "z-0 hidden" : "z-10"
            } flex items-center justify-center`}
          >
            <BiMenuAltLeft size={"30"} />
          </button>
        </div>

        <div
          className={`fixed bottom-0 left-0 h-full w-64 bg-black border border-solid ${
            isOpen ? "translate-x-0 z-10" : "-translate-x-full z-10"
          } transition-transform duration-300 ease-in-out bg-gray-100`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-lg bg-black text-white"
          >
            Close
          </button>

          <div className="p-4" >
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
              <li className="mb-2">
                <Link
                  href="/winners"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Our COCs
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/allProducts"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Store<div className="badge badge-accent">new</div>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/yourOrders"
                  onClick={closeMenu}
                  className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
                >
                  Order History
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>

      <div className="relative top-[-15px] lg:top-[-32px]  xl:top-[-40px] ">
        <Link href="/" className="btn btn-ghost normal-case text-xl ">
          <Image
            src="/letzkhelo-logo.png"
            alt="Letzkhelo"
            height={125}
            width={125}
            className="rounded-full align-top w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" // Adjust the classes as needed
          />
        </Link>
      </div>

      <div>
      <div id="navLinks">
        <ul className="DESKTOP-MENU hidden space-x-6 lg:flex text-black">
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/"
                className="text-xl font-bold  font-sans pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
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
                className="text-xl font-bold   font-sans pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
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
                className="text-xl font-bold  font-sans pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
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
                className="text-xl font-bold  pb-3  font-sans border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                All Players
              </Link>
            </motion.div>
          </li>
          {/* <li>
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
          </li> */}
          <li>
            <motion.div
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              <Link
                href="/winners"
                className="text-xl font-bold   font-sans pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"
              >
                Our COCs
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
                href="/allProducts"
                className="text-xl font-bold   font-sans pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"

              >
                Store
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
                href="/yourOrders"
                className="text-xl font-bold   font-sans pb-3 border-b-4 border-transparent hover:border-orange-500 transition duration-300"

              >
                Order History
              </Link>
            </motion.div>
          </li>
         
        </ul>
      </div>

      <div className="dropdown dropdown-end md:ml-10 ml-2" >
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar bg-white"
        >
          <div className="w-15 rounded-full bg-white">
          {
            session?.user ? singleUser?.imageLink ? (<Image
              src={ singleUser?.imageLink }
              alt="Picture of the user"
              width={500}
              height={500}
              className="h-40 w-40"
            />) : session?.user?.image ? (<Image
              src={session?.user?.image }
              alt="Picture of the user"
              width={500}
              height={500}
              className="h-40 w-40"
            />) :  (
              <Image
            src={ defaultavatar}
            alt="Picture of the user"
            width={500}
            height={500}
            className="h-40 w-40"
          /> 
            ) : ( <Image
              src={ defaultavatar}
              alt="Picture of the user"
              width={500}
              height={500}
              className="h-40 w-40"
            />)
          }
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

     
    </div>
  );
}