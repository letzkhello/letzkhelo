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

export const Modal=({ params }: any)=> {
    const [user,setUser]=useState<User>()
    const [stats,setStat]=useState<Stats>()
    const [email, setEmail] = useState<string>("");
    const fetchUserDetails=async()=>{
        const response= await axios.get(`/api/users/getUser/${params.id}`);
        // console.log(response.data.user.email);
        setUser(response.data);
        setEmail(response.data.user.email);
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
    const handleGiveAccess = async (sport: string) => {
      const body={
        email: email,
        sportName: sport,
        superadmin_email: 'mohitmongia2005@gmail.com'
      }
      try{
        const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyODIyODM1Mn0.5nz61Li_a8RBNGR83Gc9LO7pPTYMoU4oaWhltQAfx-M';
        const response= await axios.post('https://letzkhelo-backend.onrender.com/admin/provide_admin_access', body,{headers:{
          Authorization: `Bearer ${token}`
        }});
        console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
    };
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
      <div className="col-span-4 sm:col-span-9">
        <div className="bg-white shadow rounded-lg p-6">
          <ul>
            <li>
            Arm Wrestling 
              <button className="btn m-10" onClick={()=>{handleGiveAccess('Arm Wrestling')}}>Give Access</button>
            </li>
            <li>
            Cricket 
              <button className="btn m-10" onClick={()=>{handleGiveAccess('Cricket')}}>Give Access</button>
            </li>
            <li>
            Kabbadi 
              <button className="btn m-10" onClick={()=>{handleGiveAccess('Kabbadi')}}>Give Access</button>
            </li>
            <li>
            Football 
              <button className="btn m-10" onClick={()=>{handleGiveAccess('Football')}}>Give Access</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
