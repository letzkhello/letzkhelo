"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IOrders extends Array<IOrders> {
  // products:Array<string>;
  products: Array<object>;
  phoneNo?: Number;
  delieveryLocation?: string;
  date?: Date;
  paid: boolean;
  totalPrice: Number;
  orderCompleted: boolean;
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
        console.log(identifier, "my email");
        const response = await axios.get(`/api/getYourOrders/${identifier}`);
        console.log(response.data.data, "your Orders");
        setYourOrders(response.data.data);
        // console.log(singleUser,"setted",typeof(singleUser));
      } catch (error) {
        console.log(error);
      }
    };
    fetchYourOrders();
  }, [session]);

  const convertDate = (dateString: any) => {
    const date = new Date(dateString);

    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;

      const showDate = `${day}-${month}-${year} at ${displayHours}:${minutes} ${ampm}`;
      return showDate;
    } else {
      return "Coming Soon";
    }
  };

  return (
    <>
      <div className="flex justify-center items-center my-6 ">
        <h1 className="text-xl  text-white  border-b-4 border-black font-serif font-bold md:text-2xl lg:text-4xl">
          Your Orders
        </h1>
      </div>
      <div className="w-full flex flex-wrap items-center justify-evenly py-3 px-8">
        {yourOrders?.map((order: any) => {
          return (
            <div key={order.id}>
              {order.products.map((product: any) => (
                <div
                  key={product.productId}
                  className="card w-80 p-2 my-6 glass transition-transform transform hover:scale-105 duration-300 sm:my-12 bg-white"
                >
                  <figure>
                    <Image
                      src={product?.imageLink}
                      alt="img"
                      width="300"
                      height="200"
                      className="rounded-t-lg object-cover h-48 w-72"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product?.productName}</h2>
                    <div className="flex font-semibold">
                      <h3>Price :</h3>
                      <span>{product?.price}</span>
                    </div>

                    <div className="flex font-semibold">
                      <h3>Phone No. :</h3>
                      <span>{order?.phoneNo}</span>
                    </div>

                    <div className="flex font-semibold">
                      <h3>Ordered on :</h3>
                      <span> {convertDate(order?.date)}</span>
                    </div>
                    <div className="flex font-semibold">
                      <h3>Status :</h3>
                      <span> {!order.orderCompleted?'On the way':'Delievered'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default YourOrders;
