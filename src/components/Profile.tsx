"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

interface User {
  age: number;
  email: string;
  intrestedSport: string;
  isAdmin: boolean;
  name: string;
  weight: number;
  _id: number;
}

export default function ProfileComponent() {
  const { data: session, status } = useSession();
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [formData, setFormData] = useState({
    age: "",
    instagramLink: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
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

  const getAllUsers = async () => {
    const res = await axios.get("/api/users/getAllUsers");
    console.log(res.data.data);
    setAllUsers(res.data.data);
  };

  return (
    <>
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Sarah Smith</h2>
          <p className="text-gray-500">Freelance Web Designer</p>
        </div>
        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <p>contest</p>
            <div>2k</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <p>Win</p>
            <div>10</div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <p>Loss</p>
            <div>15</div>
          </li>
        </ul>
        <div className="col-span-4 sm:col-span-9">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold text-center mt-3 -mb-2">
              Social media
            </h3>
            <div className="flex justify-center items-center gap-6 my-6">
              <a
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
              </a>
              <a
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
              </a>
              <a
                className="text-pink-600"
                aria-label="Visit TrendyMinds Instagram"
                href=""
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
              </a>
            </div>

            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
              <li className="flex flex-col items-center justify-around">
                <p>Weight</p>
                <div>
                  {allUsers?.map((user) => {
                    if (user.email == session?.user?.email) {
                      return <p key={user._id}>{user.weight}</p>;
                    }
                  })}
                </div>
              </li>
              <li className="flex flex-col items-center justify-between">
                <p>Age</p>
                <div>
                  {allUsers?.map((user) => {
                    if (user.email == session?.user?.email) {
                      return <p key={user._id}>{user.age}</p>;
                    }
                  })}
                </div>
              </li>
              <li className="flex flex-col items-center justify-around">
                <p>Intrested Sports</p>
                <div>
                  {allUsers?.map((user) => {
                    if (user.email == session?.user?.email) {
                      return <p key={user._id}>{user.intrestedSport}</p>;
                    }
                  })}
                </div>
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Write about yourself</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus est vitae tortor ullamcorper, ut vestibulum velit
              convallis. Aenean posuere risus non velit egestas suscipit. Nunc
              finibus vel ante id euismod. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
              erat volutpat. Nulla vulputate pharetra tellus, in luctus risus
              rhoncus id.
            </p>
          </div>
        </div>
        {
          <div className="py-4 mt-2 text-white flex items-center justify-around">
            <button className="btn" onClick={openModal}>
              Open Modal
            </button>
            <dialog id="my_modal_1" className="modal" ref={modalRef}>
              <div className="modal-box">
                <form onSubmit={handleSubmit}>
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="age"
                    >
                      Age:
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    ></input>
                  </div>

                  <div>
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="instagramLink"
                    >
                      Instagram Link:
                    </label>
                    <input
                      type="text"
                      id="instagramLink"
                      name="instagramLink"
                      value={formData.instagramLink}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="weight"
                    >
                      Weight:
                    </label>
                    <select
                      name="weight"
                      id="weight"
                      onChange={handleInputChange}
                    >
                      <option value="40-45">40-45</option>
                      <option value="45-50">45-50</option>
                      <option value="50-55">50-55</option>
                      <option value="55-60">50-55</option>
                      <option value="60-65">50-55</option>
                      <option value="65-70">50-55</option>
                      <option value="70-75">50-55</option>
                      <option value="75-80">50-55</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="interestedSport"
                    >
                      Interested Sport:
                    </label>
                    <select
                      name="interestedSport"
                      id="interestedSport"
                      onChange={handleInputChange}
                    >
                      <option value="Cricket">Cricket</option>
                      <option value="Khokho">Khokho</option>
                      <option value="Kabadi">Kabadi</option>
                      <option value="Panga">Panga</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    Button
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
    </>
  );
}
