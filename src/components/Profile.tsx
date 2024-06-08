"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import img from "@/../public/avatar.png";
import Loader from "@/components/Loader";
import Link from "next/link";
import BeatLoader from "react-spinners/BeatLoader";
import Modal from "./ReferallInfomodal";
interface User {
  age: number;
  email: string;
  intrestedSport: string;
  instagramLink: string;
  isAdmin: boolean;
  name: string;
  weight: string;
  _id: number;
  wallet_balance: any;
  referral_credits: any;
  wallet_history: any;
  referral_code: any;
}

export default function ProfileComponent() {
  const [loader, setLoader] = useState(true);
  const { data: session, status } = useSession();
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [singleUser, setSingleUser] = useState<User | null>(null);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [imageLoader, setImageLoader] = useState(false);
  const [singleUserState, setSingleUserState] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    age: "",
    instagramLink: "",
    weight: "",
    intrestedSport: "",
    email: "",
  });
  const saveImage = async (userId: any, selectedImage: any) => {
    const data = new FormData();
    console.log(selectedImage, "myImage");
    data.append("file", selectedImage);
    data.append("upload_preset", "amipzzxk");
    data.append("cloud_name", "dine5j77j");

    try {
      if (selectedImage === null) {
        return toast.error("Please Upload image");
      }

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dine5j77j/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const cloudData = await res.json();

      setUrl(cloudData.url);
      if (cloudData) {
        const body = {
          userId: userId,
          imageLink: cloudData.url,
        };
        console.log(body);
        const res = await axios.patch("/api/users/updateUser", body);
        if (res) {
          getAllUsers();
          setIsImageSelected(false);
        }
      }
      console.log(cloudData.url);
      toast.success("Image Upload Successfully");
    } catch (error) {}
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    setLoader(true);
    const res = await axios.get(`/api/users/getAllUsers`);
    setLoader(false);
    setAllUsers(res.data.data);
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
    }));
  }, [session?.user?.email]);
  const [payment, setPayment] = useState<any>({});

  useEffect(() => {
    const getPaymentData = async () => {
      const res = await axios.get(
        `/api/getPayment?email=${session?.user?.email}`
      );
      // console.log(res.data.payments,"payment")
      setPayment(res);
    };
    getPaymentData();
  }, [session]);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }, user: any) => {
    e.preventDefault();

    try {
      const updatedFormData = {
        ...formData,
        email: session?.user?.email,
      };
      await axios.put("/api/users/getUserDetails", updatedFormData);

      toast.success("Profile is Successfully Edited");
      setFormData({
        userName: "",
        age: "",
        instagramLink: "",
        weight: "",
        intrestedSport: "",
        email: "",
      });

      closeModal();
      getAllUsers();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      closeModal();
      console.log(error);
    }
  };

  const openModal = (user: User) => {
    if (modalRef.current) {
      setFormData({
        userName: user?.name,
        age: user?.age?.toString(),
        instagramLink: user?.instagramLink,
        weight: user?.weight || "50-55",
        intrestedSport: user?.intrestedSport || "Cricket",
        email: session?.user?.email || "",
      });

      modalRef.current.showModal();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showrefModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  const hideModal = () => setIsModalOpen(false);
  useEffect(() => {
    fetchData();
  }, [singleUserState, session]);

  const fetchData = async () => {
    try {
      const identifier = session?.user?.email;
      console.log(identifier);
      const response = await axios.get(
        `/api/users/getsingleuser/${identifier}`
      );
      console.log(response.data.data, "profilek");
      setSingleUser(response.data.data);
      setSingleUserState(false);
      // console.log(singleUser,"setted",typeof(singleUser));
    } catch (error) {
      console.log(error);
      setSingleUserState(false);
    }
  };
  function sumAmounts(data: any) {
    const currentDate = new Date();
    let sum = 0;

    data?.forEach((item: any) => {
      const unlockDate = new Date(item.unlock_date);
      if (unlockDate <= currentDate) {
        sum += item.amount;
      }
    });

    return sum;
  }

  const handleImageChange = async (e: any, id: any) => {
    // e.preventDefault();
    setImageLoader(true);
    console.log(e.target.files);
    const selectedImage = e.target.files[0];
    // console.log(selectedImage,"selected Image");
    if (selectedImage) {
      setIsImageSelected(true);
      // setImage(selectedImage);
      await saveImage(id, selectedImage);
      setImageLoader(false);
      setSingleUserState(true);
      // location.reload();
    } else {
      setIsImageSelected(false);
      setImageLoader(false);
    }
    console.log(selectedImage);
    setImage(selectedImage);
    setImageLoader(false);
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  if (loader) {
    return <Loader />;
  } else {
    return (
      <div>
        {allUsers?.map((user: any) => {
          if (user?.email == session?.user?.email) {
            return (
              <div
                key={user._id}
                className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
              >
                <div className="rounded-t-lg h-32 overflow-hidden">
                  <img
                    // className="object-cover object-top w-full"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                  />
                </div>

                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                    src={
                      user?.imageLink ? user?.imageLink : session?.user?.image
                    }
                    // className="object-cover object-center h-32"
                    className="w-full h-full object-cover object-center"
                    alt="your profile pic"
                  />
                </div>
                <div className="w-full flex justify-evenly">
                  {/* <label htmlFor="image" className="btn">
                    Select Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <button onClick={(e) => saveImage(user?._id)} className="btn">
                    upload
                  </button> */}

                  <>
                    <label htmlFor="image" className="btn">
                      {imageLoader ? (
                        <div className="flex justify-evenly items-center">
                          Uploading
                          <BeatLoader
                            className=""
                            color={"#D0021B"}
                            size={10}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </div>
                      ) : (
                        // "uploading..."
                        "Upload/Change Image"
                      )}
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e, user._id)}
                      disabled={imageLoader ? true : false}
                    />
                  </>

                  {/* {isImageSelected && (
                  <p className=" text-2xl text-green-400">Image Selected</p>
                )}
                {isImageSelected && (
                  <button onClick={(e) => saveImage(user?._id)} className="btn">
                    Upload
                  </button>
                )} */}
                </div>
                <div className="m-auto flex justify-center flex-col text-center">
                  <h2 className="font-semibold">
                    {user?.name ? user?.name : session?.user?.name}
                  </h2>
                  <button
                    className="btn w-44 m-auto"
                    onClick={() => openModal(user)}
                  >
                    Add Details
                  </button>
                </div>
                <div className="text-center mt-2">
                  <h2 className="font-semibold">
                    Referral code: {singleUser?.referral_code}
                  </h2>
                </div>
                <div className="py-4 mt-2 text-white flex items-center justify-around">
                  <button
                    className="btn"
                    onClick={() => {
                      setIsModalOpen(true);
                      console.log(isModalOpen);
                    }}
                  >
                    {" "}
                    How to use refferal{" "}
                  </button>
                </div>

                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                  <li className="flex flex-col items-center justify-around">
                    <p className="font-semibold">Contest</p>
                    <div>0</div>
                  </li>
                  <li className="flex flex-col items-center justify-between">
                    <p className="font-semibold">Win</p>
                    <div>0</div>
                  </li>
                  <li className="flex flex-col items-center justify-around">
                    <p className="font-semibold">Loss</p>
                    <div>0</div>
                  </li>
                </ul>
                <div className="col-span-4 sm:col-span-9">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="font-semibold text-center mt-3 -mb-2">
                      Social media
                    </h3>
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
                        href={
                          user?.instagramLink
                            ? user?.instagramLink
                            : "Not Mentioned"
                        }
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
                          {user?.weight ? user?.weight : "Not Mentioned"}
                        </div>
                      </li>
                      <li className="flex flex-col items-center justify-between">
                        <p className="font-semibold">Age</p>
                        <div className="w-10">
                          {user?.age ? user?.age : "Not Mentioned"}
                        </div>
                      </li>
                      <li className="flex flex-col items-center justify-around">
                        <p className="font-semibold">Intrested Sports</p>
                        <div className="w-10">
                          {user?.intrestedSport
                            ? user?.intrestedSport
                            : "Not Mentioned"}
                        </div>
                      </li>
                    </ul>

                    {/* <h2 className="text-xl font-bold mb-4">
                      Write about yourself
                    </h2>
                    <p className="text-gray-700">To be uploaded</p> */}
                    <h2 className="text-xl font-bold mb-1">Wallet Info</h2>
                    <div>
                      <div>
                        <b>Total Coins</b>:{singleUser?.wallet_balance}
                      </div>
                      <div>
                        <b>Redemable Coins</b>:
                        {sumAmounts(singleUser?.referral_credits)}
                      </div>
                    </div>

                    <div className="mb-7">
                      NOTE:Coins will be redemed after a certain period of time
                      after referal
                    </div>

                    <h2 className="text-xl font-bold mb-1">
                      Redemable Points History
                    </h2>
                    <ul className="space-y-2">
                      {singleUser?.referral_credits.map((history: any) => (
                        <li
                          key={history._id}
                          className="bg-gray-200 p-4 rounded"
                        >
                          <div className="flex flex-col justify-between items-center">
                            <span>Redemable coins: {history.amount}</span>
                            <span className="w-full m-auto">
                              Redemable date: {history.unlock_date}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <h2 className="text-xl font-bold mb-4">Wallet History</h2>
                    {/* {JSON.stringify(singleUser?.wallet_history)} */}
                    <ul className="space-y-2">
                      {singleUser?.wallet_history?.map((history: any) => (
                        <li
                          key={history._id}
                          className="bg-gray-200 p-4 rounded"
                        >
                          <div className="flex flex-col justify-between items-center">
                            <span>Credit: {history.change}</span>
                            <span className="m-auto w-full">
                              Credited from: {history.description}
                            </span>
                            <span className="m-auto w-full">
                              Date: {history.timestamp}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-xl font-bold mb-4">Payment History</h2>
                    <ul className="space-y-2">
                      {payment.data?.payments.map((payment: any) => (
                        <li
                          key={payment._id}
                          className="bg-gray-200 p-4 rounded"
                        >
                          <div className="flex flex-col justify-between items-center">
                            <span>Sport Name: {payment.sportname}</span>
                            <span>Order ID: {payment.razorpay_order_id}</span>
                            <span>
                              Payment ID: {payment.razorpay_payment_id}
                            </span>
                            <span className="bg-green-400 py-1 px-2 rounded text-white">
                              PAID
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Modal show={isModalOpen} onClose={hideModal}>
                  <h2 className="text-xl text-bold mb-2">
                    How to use referral
                  </h2>
                  <p>
                    Join our referral program and earn rewards. Share your
                    unique referral code with friends. When they use your code
                    and complete an online payment for an event, both of you
                    benefit. The new user gets a 5% discount on their total
                    event fees, and you receive 5% of the event fees credited to
                    your account. It&apos;s a win-win To get started, log in to your
                    account, find your referral code, and start sharing.
                    There&apos;s no limit to how many people you can refer.
                    Enjoy the rewards and help grow our community. For any
                    questions, contact our support team.
                  </p>
                </Modal>

                {
                  <div className="py-4 mt-2 text-white flex items-center justify-around">
                    <dialog id="my_modal_1" className="modal" ref={modalRef}>
                      <div className="modal-box">
                        <form
                          className="w-full max-w-sm"
                          onSubmit={(e) => handleSubmit(e, user)}
                        >
                          <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                              <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="userName"
                              >
                                Name:
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="string"
                                name="userName"
                                id="userName"
                                value={formData?.userName}
                                onChange={handleInputChange}
                              ></input>
                            </div>
                          </div>
                          <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                              <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="age"
                              >
                                Age:
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="number"
                                name="age"
                                id="age"
                                value={formData?.age}
                                onChange={handleInputChange}
                              ></input>
                            </div>
                          </div>
                          <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                              <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="instagramLink"
                              >
                                Instagram Link:
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                id="instagramLink"
                                name="instagramLink"
                                value={formData?.instagramLink}
                                onChange={handleInputChange}
                              ></input>
                            </div>
                          </div>
                          <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                              <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="weight"
                              >
                                Weight:
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <select
                                id="weight"
                                name="weight"
                                onChange={handleInputChange}
                                value={formData?.weight}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                              >
                                <option value="50-55">50-55</option>
                                <option value="55-60">55-60</option>
                                <option value="60-65">60-65</option>
                                <option value="65-70">65-70</option>
                                <option value="70-75">70-75</option>
                              </select>
                            </div>
                          </div>
                          <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                              <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="intrestedSport"
                              >
                                Interested Sport:
                              </label>
                            </div>
                            <div className="md:w-2/3">
                              <select
                                name="intrestedSport"
                                id="intrestedSport"
                                onChange={handleInputChange}
                                value={formData?.intrestedSport}
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                              >
                                <option value="Cricket">Cricket</option>
                                <option value="Khokho">Kho kho</option>
                                <option value="Kabadi">Kabaddi</option>
                                <option value="Arm Wresting">
                                  Arm Wresting
                                </option>
                              </select>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
                          >
                            Add
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
                }
              </div>
            );
          }
        })}
      </div>
    );
  }
}
