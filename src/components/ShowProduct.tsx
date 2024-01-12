"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Loader from "@/components/Loader";
import Link from "next/link";
interface Product {
  category: string;
  expectedDelievery: string;
  productName: string;
  imageLink: string;
  discountedPrice: number;
  price: number;
  inStock: boolean;
  isFeatured: boolean;
}
export default function ShowProduct() {
  const [loader, setLoader] = useState(true);
  const [products, setproducts] = useState<Product[]>([]);
  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    setLoader(true);
    const res = await axios.get("/api/getAllProducts");
    setproducts(res.data);
    console.log(res.data);
    setLoader(false);
  };
  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4 text-white">All Products</h1>
        </div>
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {products?.map((item: any) => {
            return (
              <div
                className="w-72 bg-white rounded-xl duration-500 hover:scale-105 hover:shadow-xl shadow-2xl"
                key={item._id}
              >
                <figure className="p-2">
                  <Image
                    src={item?.imageLink}
                    alt="Product"
                    width="300"
                    height="200"
                    className="rounded-t-lg object-cover h-48"
                  />
                </figure>

                <div className="px-2 py-3 mt-4 w-72">
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {item?.productName}
                  </p>

                  <div className="flex items-center">


                  </div>
                  <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-black cursor-auto my-3">
                      Rs {item?.price}<del>
                      <span className="text-xs text-gray-600 cursor-auto ml-2">
                        Rs {item.discountedPrice}
                      </span>
                    </del>
                    </p>

                    <div className="ml-auto">
                      {item.inStock === true ? (
                        <Link
                          href={`/allProducts/${item._id}`}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Add to cart
                        </Link>
                      ) : (
                        <button className="py-2.5 px-6 text-sm font-medium btn-neutral isabled pointer-events-none cursor-not-allowed">
                          out stock
                        </button>
                        
                      )}
                    </div>

                  </div>

                  <div><b>Expected Delievery</b>-{item.expectedDelievery}</div>

                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  }
}