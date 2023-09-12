"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import axios from "axios";

export default function Card() {
  const [getGame, setGame] = useState([]);

  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    const res = await axios.get("");
    console.log(res.data);
    setGame(res.data.data);
  };

  return (
    // <div className="p-4">
    // <div className=" max-w-[300px] bg-white border border-gray-400 rounded-lg shadow my-5 hover:scale-105 duration-500 ">
    //   {/* {getGame.map((game,id) => {
    //     return (
    //       <> */}
    //   <div className="h-[200px] w-[300px]">
    //     <Image
    //       src={require("./asset/Arm_Wrestler_002-1.jpg")}
    //       alt="img"
    //       width="300"
    //       height="200"
    //       className="rounded-t-lg object-cover h-[100%] w-[100%]"
    //     />
    //   </div>
    //   <div className="flex justify-between">
    //     <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
    //       Arm wrestling
    //     </h1>
    //   </div>
    //   <div className="p-5 flex justify-between">
    //     <div>
    //       <p className="text-gray-900">uttam nagar</p>
    //     </div>

    //     <div className="flex justify-between">
    //       <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
    //         Register Now
    //         <svg
    //           className="w-3.5 h-3.5 ml-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   {/* </>
    //     );
    //   })} */}
    // </div>
    // </div>

    <div className="p-4 md:w-1/4">
      <div className="w-full max-w-md  bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div className="h-[236px]">
            <Image
              src={require("./asset/Arm_Wrestler_002-1.jpg")}
              alt="img"
              width="300"
              height="200"
              className="rounded-t-lg object-cover h-[100%] w-[100%]"
            />
          </div>
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              Arm wrestling
            </p>
            <div className="flex flex-row">
              <p className="text-[17px] font-bold text-[#0FB478]">location :</p>
              <span> uttam nagar</span>
            </div>
            <button className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
              Register Now
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
