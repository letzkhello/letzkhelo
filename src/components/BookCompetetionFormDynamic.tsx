"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export function BookCompetetionFormDynamic({ params }: any) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // console.log(params.id,typeof(params.id));

  const [loader, setLoader] = useState(false);
  const [allSports, setAllSports] = useState([]);
  console.log(session);
  console.log(session?.user);

  useEffect(() => {
    getAllSports();
  }, []);

  const getAllSports = async () => {
    setLoader(true);

    const res = await axios.get("/api/getAllSports");
    setLoader(false);
    console.log(res?.data, "my Output");
    setAllSports(res?.data);
  };

  const [formData, setFormData] = useState({
    userName: "",
    // userId: "",
    sportName: "",
    registrationPrice: 0,
    age: "",
    weight: "",
    phoneNumber: "",
  });
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      // userId: getUserID(user) || "123456", // Set it to user._id if available, or a default value "123456"
    }));
  }, [session?.user?.email]);
  // getUserID(user)

  const handleChange = (e: { target: { name: any; value: any } }) => {
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
      setLoader(true);

      const updatedFormData = {
        ...formData,
        userName: session?.user?.name,
        sportName: sport?.sportName,
        registrationPrice: 0,
      };

        console.log(updatedFormData,"data");
      
      await axios.post("/api/users/registerForCompetetion", updatedFormData);
      setLoader(false);

      toast.success("Competetion is Successfully Booked");

      // alert("Appointment added successfully!");
      setFormData({
        userName: "",
        // userId: "",
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
      // alert("Something went wrong. Please try again.");
    }
  };

  if (loader) {
    return <Loader />;
  } else {
    return (
      <div>
        {allSports?.map((sport: any) => {
          console.log(params.id);
          console.log(sport._id);
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
                      className="m-5 flex flex-col items-center justify-center lg:m-20"
                    >
                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
                        <label
                          htmlFor="name"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
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

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
                        <label
                          htmlFor="game-type"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
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

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
                        <label
                          htmlFor="registration-price"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
                        >
                          Registration Price:
                        </label>
                        <input
                          id="registration-price"
                          type="number"
                          disabled
                          name="registrationPrice"
                          value={formData.registrationPrice}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
                        <label
                          htmlFor="age"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
                        >
                          Age:
                        </label>
                        <input
                          id="age"
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
                        <label
                          htmlFor="weight"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
                        >
                          weight:
                        </label>
                        <select
                          id="weight"
                          name="weight"
                          onChange={handleChange}
                          className="self-stretch p-1 rounded-md border border-solid lg:w-4/5 border-[rgba(123,123,123,0.6)] outline-none"
                        >
                          <option value="50-55">50-55</option>
                          <option value="55-60">55-60</option>
                          <option value="60-65">60-65</option>
                          <option value="65-70">65-70</option>
                          <option value="70-75">70-75</option>
                        </select>
                      </div>

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
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mx-0 my-12 p-3 border-none rounded-md bg-[#5853ff] text-white w-52 font-medium text-base cursor-pointer hover:opacity-90 hover:scale-110 duration-500"
                        disabled={loader ? true : false}
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
                          "Book Appointment"
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
