"use client";

import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';


interface IOrders extends Array<IOrders>{
    products:Array<string>;
    phoneNo?: Number;
    delieveryLocation?: string;
    date?: Date;
    paid: boolean;
    totalPrice: Number;
    orderCompleted:boolean;
    name: string;
    email: string;
  }


const YourOrders = () => {
  const { data: session, status } = useSession();
  const [yourOrders, setYourOrders] = useState<IOrders | null>(null);
  


  useEffect(() => {
    const fetchYourOrders = async () => {
        try {
          const identifier = session?.user?.email;
          console.log(identifier,"my email");
          const response = await axios.get(`/api/getYourOrders/${identifier}`);
          console.log(response.data.data,"your Orders");
          setYourOrders(response.data.data);
          // console.log(singleUser,"setted",typeof(singleUser));
        } catch (error) {
          console.log(error);
        }
      };
    fetchYourOrders();
  },[session]);

  return (
        <div>
      <h3 className="text-2xl font-bold text-white mb-4 flex justify-center mt-4">
        Your Orders
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {yourOrders?.map((order: any) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
            {/* <img
              src={item.imageLink}
              alt="img"
              className="w-full h-32 object-cover mb-2"
            /> */}
            <h5 className="text-lg font-semibold mb-2">{order.products}</h5>
            <h5 className="text-gray-700 mb-2">{order.delieveryLocation}</h5>
         
          </div>
        ))}
      </div>

    </div>
  )
}

export default YourOrders;