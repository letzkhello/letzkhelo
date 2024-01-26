"use client";
import React, { useEffect, useRef, useState } from "react";
import { remove } from "@/Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import { useRouter } from "next/navigation";

interface User {
  age: number;
  email: string;
  intrestedSport: string;
  instagramLink: string;
  isAdmin: boolean;
  name: string;
  weight: string;
  _id: number;
}

const Cartpage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const cartitems = useSelector((state: any) => state.cart);
  const total = useSelector((state: any) => state.cart.total);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [singleUser, setSingleUser] = useState<User | null>(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  console.log(cartitems);
  const handleremove = (item: any) => {
    dispatch(remove(item._id));
    toast.success(`${item?.productName} removed successfully`);
  };

  const [errors, setErrors] = useState({
    name: "",
    delieveryLocation: "",
    phoneNo: "",
  });

  const fetchData = async () => {
    try {
      const identifier = session?.user?.email;
      console.log(identifier);
      const response = await axios.get(
        `/api/users/getsingleuser/${identifier}`
      );
      console.log(response.data.data, "profile from");
      setSingleUser(response.data.data);
      // console.log(singleUser,"setted",typeof(singleUser));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    products: [],
    delieveryLocation: "",
    paid: "",
    totalPrice: "",
    date: "",
    phoneNo: "",
    orderCompleted: "",
    name: "",
    email: "",
  });

  // const handleInputChange = (e: { target: { name: any; value: any } }) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the error for the current field
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonLoader(true);

    let formValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Name is required";
      formValid = false;
    }

    if (!formData.delieveryLocation) {
      newErrors.delieveryLocation = "Address is required";
      formValid = false;
    }

    if (formData.phoneNo.length !== 10) {
      newErrors.phoneNo = "Phone Number is atleast of 10 digit";
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      setButtonLoader(false);
      return;
    }

    try {
      const updatedFormData = {
        ...formData,
        // products:  cartitems.items.map((item: any) => item.productName),
        // products:  cartitems.items,
        products: cartitems.items.map((item: any) => ({
          productName: item.productName,
          imageLink: item.imageLink,
          price: item.price,
          quantity: 1,
        })),
        paid: false,
        totalPrice: total,
        date: new Date(),
        orderCompleted: false,
        email: session?.user?.email,
      };
      if(session){
        await axios.post("/api/placeOrder", updatedFormData);
        toast.success("Order placed Successfully ");
        router.push(`/yourOrders`);

      }else{
      toast.error("Please login first ");
      router.push(`/login`);

      }

      setFormData({
        products: [],
        delieveryLocation: "",
        paid: "",
        totalPrice: "",
        date: "",
        phoneNo: "",
        orderCompleted: "",
        name: "",
        email: "",
      });
      setButtonLoader(false);

      closeModal();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setButtonLoader(false);
      closeModal();
      console.log(error);
    }
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <div
        onClick={() => router.push("/allProducts")}
        className="flex"
      >

        <p  className="h-24 w-24 cursor-pointer text-white px-2 mt-4 ">&lt;-- back{" "}</p>
        <h3 className="text-2xl font-bold text-white mb-4 flex justify-center mt-4">
        Your Cart
      </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartitems.items.map((item: any) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={item.imageLink}
              alt="img"
              className="w-full h-60 object-cover mb-2"
            />
            <h5 className="text-lg font-semibold mb-2">{item.productName}</h5>
            <h5 className="text-gray-700 mb-2">Price:{item.price}</h5>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none hover:bg-red-600"
              onClick={() => handleremove(item)}
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
            // <button
            //   className="bg-green-500 text-white px-6 py-2 rounded-full focus:outline-none hover:bg-green-600"
            //   onClick={() => console.log("Place Order clicked")}
            //   // disabled
            // >
            //   Place Order
            // </button>

            <div className="py-4 mt-2 text-white flex items-center justify-around">
              <button className="btn" onClick={() => openModal()}>
                Place Order
              </button>

              <dialog id="my_modal_1" className="modal" ref={modalRef}>
                <div className="modal-box">
                  <form
                    className="w-full max-w-sm"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          htmlFor="name"
                        >
                          Name :
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your Name"
                          value={formData?.name}
                          onChange={handleInputChange}
                        ></input>
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          htmlFor="delieveryLocation"
                        >
                          Address :
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="text"
                          name="delieveryLocation"
                          id="delieveryLocation"
                          placeholder="Enter your Address"
                          value={formData?.delieveryLocation}
                          onChange={handleInputChange}
                        ></input>
                        {errors.delieveryLocation && (
                          <p className="text-red-500 text-sm">
                            {errors.delieveryLocation}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          htmlFor="phoneNo"
                        >
                          Phone Number:
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          type="number"
                          id="phoneNo"
                          name="phoneNo"
                          placeholder="Enter your Phone Number"
                          value={formData?.phoneNo}
                          onChange={handleInputChange}
                        ></input>
                        {formData.phoneNo.length !== 10 && (
                          <p className="text-red-500 text-sm">
                            {errors.phoneNo}
                          </p>
                        )}
                        {/* {(errors.phoneNo || formData.phoneNo.length !== 10) && (
      <p className="text-red-500 text-sm">{errors.phoneNo}</p>
    )} */}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
                      disabled={buttonLoader}
                    >
                      {buttonLoader ? (
                        <div className="flex justify-evenly items-center">
                          <BeatLoader
                            className=""
                            color={"#D0021B"}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </div>
                      ) : (
                        "Confirm"
                      )}
                    </button>
                  </form>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn" onClick={closeModal}>
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
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
