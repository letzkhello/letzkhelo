"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { add } from "@/Redux/CartSlice";
import toast from "react-hot-toast";

interface Product {
  category: string;
  expectedDelievery: string;
  productName: string;
  imageLink: string;
  discountedPrice: number;
  price: number;
  inStock: boolean;
  isFeatured: boolean;
  description: string;
}
export default function Productdetails({ params }: any) {
  const [loader, setLoader] = useState(true);
  const [showProduct, setShowProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log(params.id);
    showProductDetails();
  }, []);
  const cartItem = useSelector((state: any) => state.cart);
  const isItemInCart = () => {
    return cartItem.items.some((item: any) => item._id === params.id);
  };
  const showProductDetails = async () => {
    setLoader(true);
    const response = await axios.get(`/api/getSingleProduct/${params.id}`);
    setShowProduct(response.data.data);
    setLoader(false);
    console.log(showProduct);
  };
  const dispatch = useDispatch();

  const handleadd = (item: any) => {
    dispatch(add(item));
    toast.success(`${item?.productName} added successfully`);
  };
  if (loader) {
    return <Loader />;
  } else if (!showProduct) {
    return <p>No product found</p>;
  } else {
    return (
      <>
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4 ">
                  <div className="flex">
                    <div
                      onClick={() => router.push("/allProducts")}
                      className="h-24 w-24 cursor-pointer"
                    >
                      &lt;-- back{" "}
                    </div>
                    <Link
                      className="font-bold mb-4 text-white flex align-text-left"
                      href="/cart"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-black"
                      >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 1.92 1.61h9.8a2 2 0 0 0 1.92-1.61L20 6H6" />
                      </svg>
                      {cartItem.items.length > 0 && (
                        <div className="relative bottom-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                          {cartItem.items.length}
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={showProduct.imageLink}
                      alt="Product Image"
                    />
                  </div>
                  <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                      <button
                        onClick={() => handleadd(showProduct)}
                        className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        {!isItemInCart()
                          ? showProduct.inStock
                            ? "Add to cart"
                            : "Out Of Stock"
                          : "Added to cart"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {showProduct.productName}
                  </h2>

                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {showProduct.price}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Availability:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {showProduct.inStock ? "In Stock" : "Out Of Stock"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {showProduct.description}
                    </p>
                  </div>
                 
                </div>
              </div>
              <div className="max-w-2xl my-4 mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">
                      Delivery Timeline
                    </h1>

                    <h2 className="text-lg font-semibold mb-2">
                      Order Processing:
                    </h2>
                    <p className="mb-4">
                      Orders are typically processed within 1-2 business days
                      after payment confirmation.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">
                      Shipping Times:
                    </h2>
                    <p className="mb-4">
                      Standard shipping within India generally takes
                      5-7 business days for delivery.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">
                      International Shipping:
                    </h2>
                    <p className="mb-4">
                      International shipping times may vary depending on the
                      destination country and customs clearance procedures.
                      Please allow additional time for delivery.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">
                      Delivery Tracking:
                    </h2>
                    <p className="mb-4">
                      Once your order is shipped, you will receive a
                      confirmation email with tracking information. You can
                      track the status of your order through our website or by
                      using the provided tracking number on the carrier’s
                      website.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">
                      Delivery Issues:
                    </h2>
                    <p className="mb-4">
                      In the rare event of a delivery issue or delay, please
                      contact our customer service team for assistance. We are
                      here to help resolve any concerns and ensure your
                      satisfaction.
                    </p>

                    <h2 className="text-lg font-semibold mb-2">Contact Us:</h2>
                    <p className="mb-4">
                      If you have any questions or need further assistance
                      regarding delivery timelines, please do not hesitate to
                      contact our customer service team at letzkhello@gmail.com
                    </p>
                  </div>
            </div>
          </>
        </div>
      </>
    );
  }
}
