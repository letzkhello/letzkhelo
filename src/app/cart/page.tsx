"use client";
import React from "react";
import { remove } from "@/Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";

const Cartpage = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state: any) => state.cart);
  const total = useSelector((state: any) => state.cart.total);
  const handleremove = (id: any) => {
    dispatch(remove(id));
  };
 

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-4 flex justify-center mt-4">
        Your Cart 
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartitems.items.map((item: any) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={item.imageLink}
              alt="img"
              className="w-full h-32 object-cover mb-2"
            />
            <h5 className="text-lg font-semibold mb-2">{item.productName}</h5>
            <h5 className="text-gray-700 mb-2">{item.price}</h5>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-600"
              onClick={() => handleremove(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {total > 0 ? (
        <div className="mt-4  flex justify-center items-center">
          <div className="text-xl font-semibold mx-4 text-white">
            Total: Rs.{total}
          </div>
          {total > 0 ? (
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-full focus:outline-none hover:bg-green-600"
              onClick={() => console.log("Place Order clicked")}
              disabled
            >
              Place Order
            </button>
          ) : null}
        </div>
      ) : (
        <>
          <div className="text-2xl font-semibold mx-4 text-red-400 flex justify-center">
            cart is empty
          </div>{" "}
          <Link
            className="font-serif mx-4 text-blue-700 underline flex justify-center"
            href={"/allProducts"}
          >
            Go back to store
          </Link>
        </>
      )}
    </div>
  );
};

export default Cartpage;
