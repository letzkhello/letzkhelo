"use client"
import React from "react";
import Image from 'next/image'
import { useSession } from "next-auth/react";
import img from "@/../public/avatar.png";
import SignoutButton from "@/components/signoutButton";
import Link from "next/link";




interface Session {
  user: {
    name: string,
    email: string,
    image: string,
  }
}




export default function Navbar({ fixed }: any) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { data: session, status } = useSession()
  
  // return (
  //   <>
  //     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
  //       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
  //         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
  //           <a
  //             className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
  //             href="#pablo"
  //           >
  //             Letzkhelo
  //           </a>
  //           <button
  //             className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
  //             type="button"
  //             onClick={() => setNavbarOpen(!navbarOpen)}
  //           >
  //             <i className="fas fa-bars"></i>
  //           </button>
  //         </div>
  //         <div
  //           className={
  //             "lg:flex flex-grow items-center" +
  //             (navbarOpen ? " flex" : " hidden")
  //           }
  //           id="example-navbar-danger"
  //         >
  //           <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
  //             <li className="nav-item">
  //               <a
  //                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Home</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">About</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  //                 href="#pablo"
  //               >
  //                 <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
  //                 <span className="ml-2">Contact</span>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );

  return(
    <div className="navbar bg-blue-500">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">LetzKhelo</a>
    </div>
    <div className="flex-none">
      {/* <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </label>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div> */}
      
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
      src= {session?.user?.image ?? img}
      alt="Picture of the user"
      width={500}
      height={500}
    />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link
            href="/"
            className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            {
              session?.user == null ?
               (
                <Link
                href="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
          </Link>
              )  : 
              (
                <SignoutButton/>
              )
            }
        
            </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}



