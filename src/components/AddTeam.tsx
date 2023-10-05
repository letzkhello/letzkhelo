"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

export default function AddTeam() {
  const [loader, setLoader] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    sportName:"",
    noOfPlayers: "",
    location: "",
    instagramId: "",
    phoneNumber: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    if (e.target.name === "phoneNumber") {
      const phoneNumber = e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: phoneNumber,
      });

      if (phoneNumber.length !== 10) {
        setPhoneNumberError("Please enter a 10-digit phone number");
      } else {
        setPhoneNumberError("");
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoader(true);
      await axios.post("/api/addTeam", formData);
      setLoader(false);
      toast.success("Team register is Successfully");
      setFormData({
        teamName: "",
        captainName: "",
        sportName:"",
        location: "",
        noOfPlayers: "",
        instagramId: "",
        phoneNumber: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setLoader(false);
    }
  };
  const isFormNotValid =
    formData.teamName.trim() === "" ||
    formData.captainName.trim() === "" ||
    formData.sportName.trim() === "" ||
    formData.location.trim() === "" ||
    formData.noOfPlayers.trim() === "" ||
    formData.instagramId.trim() === "" ||
    phoneNumberError;

  return (
    <>
      <div className="w-full lg:bg-[#090c31] flex justify-center items-center lg:h-[140vh]">
        <main className="bg-white w-full h-full lg:h-[80%] lg:w-[70%] p-12 lg:rounded-tl-none lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-bl-none">
          <h2 className="flex uppercase justify-center font-bold text-xl pt-10 pb-3 border-b-2 border-b-orange-700 lg:text-2xl lg:justify-start">
            Add your Team
          </h2>

          <form
            onSubmit={handleSubmit}
            className="m-5 flex flex-col items-center justify-center lg:m-20"
          >
            <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="name"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                Team name:
              </label>
              <input
                id="name"
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                placeholder="Team name"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData.teamName.trim() === "" && (
              <p className="mt-2 text-sm text-red-500">
               Enter Team name
              </p>
            )}
            <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="captainName"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                Captain name:
              </label>
              <input
                id="captainName"
                type="text"
                name="captainName"
                value={formData.captainName}
                onChange={handleChange}
                placeholder="captain name"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData.captainName.trim() === "" && (
              <p className="mt-2 text-sm text-red-500">
              Enter captain name
              </p>
            )}
             <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="sportName"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                Sport name:
              </label>
              <input
                id="sportName"
                type="text"
                name="sportName"
                value={formData.sportName}
                onChange={handleChange}
                placeholder="captain name"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData.sportName.trim() === "" && (
              <p className="mt-2 text-sm text-red-500">
              Enter Sport name
              </p>
            )}
            <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="game-type"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                Location:
              </label>
              <input
                id="game-type"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="current location"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData.location.trim() === "" && (
              <p className="mt-2 text-sm text-red-500">
               Enter location name
              </p>
            )}
            <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="registration-price"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                Number of Player:
              </label>
              <input
                id="registration-price"
                type="number"
                name="noOfPlayers"
                value={formData.noOfPlayers}
                onChange={handleChange}
                placeholder="number of player"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData.noOfPlayers.trim() === "" && (
              <p className="mt-2 text-sm text-red-500">
                Enter number of player 
              </p>
            )}
            <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="instagramId"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                captain Instagram:
              </label>
              <input
                id="instagramId"
                type="text"
                name="instagramId"
                value={formData.instagramId}
                onChange={handleChange}
                placeholder="instagramId ID"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData.instagramId.trim() === "" && (
              <p className="mt-2 text-sm text-red-500">
                Enter patient name
              </p>
            )}
            <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
              <label
                htmlFor="number"
                className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
              >
                Phone Number:
              </label>
              <input
                id="number"
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="phone number"
                className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
              />
            </div>
            {formData?.phoneNumber.length !== 10 && (
              <p className="mt-2 text-sm text-red-500">{phoneNumberError}</p>
            )}
            {formData?.phoneNumber.length === 0 && (
              <p className="mt-2 text-sm text-red-500">
              Enter phone number
              </p>
            )}
            <button
              type="submit"
              className="mx-0 my-12 p-3 border-none rounded-md bg-[#5853ff] text-white w-52 font-medium text-base cursor-pointer hover:opacity-90 hover:scale-110 duration-500"
              disabled={isFormNotValid || loader ? true : false}
            >
              {loader ? (
                <div className="flex justify-evenly items-center">
                  Booking
                  <BeatLoader
                    className=""
                    color={"#D0021B"}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                "Register Team"
              )}
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
