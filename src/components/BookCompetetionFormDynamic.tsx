"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export function BookCompetetionFormDynamic({ params }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [allSports, setAllSports] = useState([]);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  useEffect(() => {
    getAllSports();
  }, []);

  const getAllSports = async () => {
    setLoader(true);
    const res = await axios.get("/api/getAllSports");
    setLoader(false);
    setAllSports(res?.data);
  };

  const [formData, setFormData] = useState({
    userName: "",
    sportName: "",
    registrationPrice: 0,
    age: "",
    weight: "",
    phoneNumber: "",
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
    }));
  }, [session?.user?.email]);

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

  const handleSubmit = async (
    e: { preventDefault: () => void },
    sport: any
  ) => {
    e.preventDefault();
    try {
      const confirmed = window.confirm(`Do you want to register for ${sport.sportName} with entry fees ${sport.entryFees || 100} ? Fees will be Collected on the ground. `);
    
      if (!confirmed) {
        // User clicked Cancel in the confirmation dialog
        return;
      }
      setLoader(true);

      const updatedFormData = {
        ...formData,
        userName: session?.user?.name,
        userEmail: session?.user?.email,
        sportName: sport?.sportName,
        registrationPrice: sport.entryFees ? sport.entryFees : formData.registrationPrice,
        date: sport?.date,
      };

      await axios.post("/api/users/registerForCompetetion", updatedFormData);
      setLoader(false);

      toast.success("Competetion is Successfully Booked");
      setFormData({
        userName: "",
        sportName: "",
        registrationPrice: 0,
        weight: "",
        age: "",
        phoneNumber: "",
      });

      router.push(`/SuccessPage/${params.id}`);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setLoader(false);
    }
  };

  const isFormNotValid =
    formData.age.trim() === "" ||
    formData.weight.trim() === "" ||
    phoneNumberError;

  if (loader) {
    return <Loader />;
  } else {
    return (
      <div>
        {allSports?.map((sport: any) => {
          if (params?.id == sport?._id) {
            return (
              <div key={sport?._id}>
                <div className="w-full lg:bg-[#090c31] flex justify-center items-center lg:h-[140vh]">
                  <main className="bg-white w-full h-full lg:h-[80%] lg:w-[70%] p-12 lg:rounded-tl-none lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-bl-none">
                    <h2 className="flex uppercase justify-center font-bold text-xl pt-10 pb-3 border-b-2 border-b-orange-700 lg:text-2xl lg:justify-start">
                      Book For Competetion
                    </h2>

                    <form
                      onSubmit={(e) => handleSubmit(e, sport)}
                      className="m-2 flex flex-col items-center justify-center lg:m-20"
                    >
                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="name"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Name:
                        </label>
                        <input
                          id="name"
                          type="text"
                          disabled
                          name="userName"
                          value={session?.user?.name || ""}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="game-type"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Sport Name:
                        </label>
                        <input
                          id="game-type"
                          type="text"
                          disabled
                          name="sportName"
                          value={sport?.sportName}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="registration-price"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Registration Price:
                        </label>
                        <input
                          id="registration-price"
                          type="number"
                          disabled
                          name="registrationPrice"
                          value={sport.entryFees ? sport.entryFees : formData.registrationPrice}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="age"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Age:
                        </label>
                        <input
                          id="age"
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Enter Age"
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>
                      {formData.age.trim() === "" && (
                        <p className="text-sm text-red-500">Enter Age</p>
                      )}
                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="weight"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          weight:
                        </label>
                        <select
                          id="weight"
                          name="weight"
                          onChange={handleChange}
                          className="self-stretch p-1 rounded-md border border-solid lg:w-4/5 border-[rgba(123,123,123,0.6)] outline-none"
      
                        >
                          <option value="">SELECT</option>
                          <option value="Below 50">Below 50</option>
                          <option value="50-60">50-60</option>
                          <option value="60-70">60-70</option>
                          <option value="Above 70">above 70</option>
                        </select>
                      </div>
                      {formData.weight.trim() === "" && (
                        <p className="text-sm text-red-500">Select weight</p>
                      )}
                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="number"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Phone Number:
                        </label>
                        <input
                          id="number"
                          type="number"
                          name="phoneNumber"
                          placeholder="Enter phone number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>
                      {formData?.phoneNumber.length !== 10 && (
                        <p className="text-sm text-red-500">
                          {phoneNumberError}
                        </p>
                      )}
                      {formData?.phoneNumber.length === 0 && (
                        <p className="text-sm text-red-500">
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
                          "Register"
                        )}
                      </button>
                    </form>
                  </main>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

function typrOf(params: any): any {
  throw new Error("Function not implemented.");
}
