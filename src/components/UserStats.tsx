"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface User {
    user: {
      name?: string;
      weight?:string;
      instagramLink?:string;
      age?:number;
      intrestedSport:string;
      imageLink?:string;
    };
  }
  interface Stats {
    sportsName?: string;
    totalWins?: number;
    totalCocWins?: number;
  }

export const UserStatistics=({ params }: any)=> {
    const [user,setUser]=useState<User>()
    const [stats,setStat]=useState<Stats>()
    const fetchUserDetails=async()=>{
        const response= await axios.get(`/api/users/getUser/${params.id}`);
        console.log({response})
        setUser(response.data)
    }
    const fetchStats=async()=>{
        const response= await axios.get(`/api/Stats/${params.id}`)
        setStat(response.data.data)
    }
    useEffect(()=>{
        console.log(params.id)
        fetchUserDetails()
        fetchStats()

    },[])

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        {/* <Image
        src={session?.user?.image || img}
        height="120"
        width="128"
        className="object-cover object-center h-32"
        alt="Woman looking front"
      /> */}
      <img src={user?.user.imageLink?user?.user?.imageLink:"data:image/jpeg;base64,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"}/>
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.user?.name}</h2>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <p className="font-semibold">Sport</p>
          <div>{stats?.sportsName || 'Arm-Wrestling'}</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <p className="font-semibold">Wins</p>
          <div>{stats?.totalWins || 0}</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <p className="font-semibold">Coc Wins</p>
          <div>{stats?.totalCocWins || 0} </div>
        </li>
      </ul>
      <div className="col-span-4 sm:col-span-9">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="font-semibold text-center mt-3 -mb-2">Social media</h3>
          <div className="flex justify-center items-center gap-6 my-6">
            <Link
              className="text-red-600"
              aria-label="Visit TrendyMinds YouTube"
              href=""
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-6"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </Link>
            <Link
              className="text-blue-600"
              aria-label="Visit TrendyMinds Facebook"
              href=""
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-6"
              >
                <path
                  fill="currentColor"
                  d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </Link>
            <Link
              className="text-pink-600"
              aria-label="Visit TrendyMinds Instagram"
              // href= {user?.instagramLink ? user?.instagramLink : "Not Mentioned"}
              href={"/"}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </Link>
          </div>

          <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
            <li className="flex flex-col items-center justify-around">
              <p className="font-semibold">Weight</p>
              <div className="w-12">
                {/* {user?.weight ? user?.weight : "Not Mentioned"} */}
                {user?.user?.weight || "Not Mentioned"}
              </div>
            </li>
            <li className="flex flex-col items-center justify-between">
              <p className="font-semibold">Age</p>
              <div className="w-10">{user?.user?.age || "Not Mentioned"}</div>
            </li>
            <li className="flex flex-col items-center justify-around">
              <p className="font-semibold">Intrested Sports</p>
              <div className="w-10">{user?.user?.intrestedSport || "Not Mentioned"}</div>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4">About</h2>
          <p className="text-gray-700">To be uploaded</p>
        </div>
      </div>
    </div>
  );
}

