"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import img from "@/../public/avatar.png";
import SignoutButton from "@/components/signoutButton";
import Link from "next/link";


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


  <div className="navbar bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 lg:py-4 flex justify-between items-center">


  {/* for hamburger  */}
       {/* <div className="flex items-center justify-between px-4 py-4 lg:hidden">
         <nav>
           <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"} >
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-black">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/about">About</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/allUsers">All Members</Link>
                </li>

                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/profile">Profile</Link>
                </li>

                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/createTeam">Create Team</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/allTeam">All Teams</Link>
                </li>

                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </section>

        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div> */}

{/* bg-purple-600 hover:bg-purple-500 */}
   <div className="flex items-center justify-between px-4 py-4 lg:hidden">
   <div className="z-50">
        <button
          onClick={openMenu}
          className={` p-0 w-10 h-10 rounded-full  ${
            isOpen ? "z-0 hidden" : "z-10"
          } flex items-center justify-center`}
        >
          <BiMenuAltLeft  size={"30"} />
        </button>
      </div>

      <div
        className={`fixed bottom-0 left-0 h-full w-64 bg-white border border-solid ${
          isOpen ? "translate-x-0 z-10" : "-translate-x-full z-10"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 p-2 rounded-lg bg-purple-500 text-white"
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
                All Members
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/profile"
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
                Create Team
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/allTeam"
                onClick={closeMenu}
                className="block p-2 rounded-lg hover:bg-purple-100 capitalize"
              >
                All Teams
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




  {/* Start: "LetzKhelo" */}
  <div>
    <Link href="/" className="btn btn-ghost normal-case text-xl">
      LetzKhelo
    </Link>
  </div>


  {/* Middle: Navigation Links */}
  <div id="navLinks">
    <ul className="DESKTOP-MENU hidden space-x-4 lg:flex">
      <li>
        <Link href="/about" className="text-lg font-medium">About</Link>
      </li>
      <li>
        <Link href="/contact" className="text-lg font-medium">Contact</Link>
      </li>
      <li>
        <Link href="/allUsers" className="text-lg font-medium">All Members</Link>
      </li>
      <li>
        <Link href="/createTeam" className="text-lg font-medium">Create Team</Link>
      </li>
      <li>
        <Link href="/allTeam" className="text-lg font-medium">All Teams</Link>
      </li>
    </ul>
  </div>

  {/* End: Profile Image */}
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
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
      <li>
        <Link href="/profile" className="justify-between">
          Profile
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        {session?.user == null ? (
          <Link
            href="/login"
            title=""
            className="font-medium text-black transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        ) : (
          <SignoutButton />
        )}
      </li>
      <li></li>
    </ul>
  </div>
</div>

  );
}
