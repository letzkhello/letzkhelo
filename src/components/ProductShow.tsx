"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";

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
export default function Productdetails({ params }: any) {
  const [loader, setLoader] = useState(true);
  const [showProduct, setShowProduct] = useState<Product | null>(null);

  useEffect(() => {
    showProductDetails();
  }, []);

  const showProductDetails = async () => {
    setLoader(true);
    const response = await axios.get(`/api/getSingleProduct/${params.id}`);
    console.log(response.data.data, "prakash");
    setShowProduct(response.data.data);
    setLoader(false);
    console.log(showProduct);
  };
  if (loader) {
    return <Loader />;
  } 
  else if (!showProduct) {
    return <p>No product found</p>; 
   } else {
    return (
      <>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          {showProduct.map((product: any) => {
            return (
              <>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                      <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img
                          className="w-full h-full object-cover"
                          src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                          alt="Product Image"
                        />
                      </div>
                      <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                          <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                            Add to Cart
                          </button>
                        </div>
                        <div className="w-1/2 px-2">
                          <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                            Other Product
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="md:flex-1 px-4">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Product Name {product.productName}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed ante justo. Integer euismod libero id mauris
                        malesuada tincidunt.
                      </p>
                      <div className="flex mb-4">
                        <div className="mr-4">
                          <span className="font-bold text-gray-700 dark:text-gray-300">
                            Price:
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">
                            $29.99
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-gray-700 dark:text-gray-300">
                            Availability:
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">
                            In Stock
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Product Description:
                        </span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed sed ante justo. Integer euismod libero id
                          mauris malesuada tincidunt. Vivamus commodo nulla ut
                          lorem rhoncus aliquet. Duis dapibus augue vel ipsum
                          pretium, et venenatis sem blandit. Quisque ut erat
                          vitae nisi ultrices placerat non eget velit. Integer
                          ornare mi sed ipsum lacinia, non sagittis mauris
                          blandit. Morbi fermentum libero vel nisl suscipit, nec
                          tincidunt mi consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
           
      </>
    );
  }
}
