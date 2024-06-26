"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import Razorpay from "razorpay";
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
export function BookCompetetionFormDynamic({ params }: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [allSports, setAllSports] = useState([]);
  const [phoneNumberError, setPhoneNumberError] = useState("");

  useEffect(() => {
    getAllSports();
  }, []);
  const [dynamicAmount, setDynamicAmount] = useState(0);
  const [formData, setFormData] = useState({
    userName: "",
    sportName: "",
    registrationPrice: 0,
    age: "",
    weight: "",
    phoneNumber: "",
    referralId: "",
    redeemPoints: "",
  });
  const [referralCode, setReferralCode] = useState();

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
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
    }));
  }, [session?.user?.email]);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const makePayment = async (sport: any) => {
    // "use server"
    setPaymentLoading(true);
    const key = process.env.RAZORPAY_API_KEY;
    console.log(key);
    const calculatedAmount = referralIdRight
      ? 0.95 * sport.onlineEntryFees
      : sport.onlineEntryFees || formData.registrationPrice || 5400;

    // setDynamicAmount(calculatedAmount);
    console.log(dynamicAmount);
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", {
      method: "POST",
      // headers: {
      //   // Authorization: 'YOUR_AUTH_HERE'
      // },
      body: JSON.stringify({
        email: session?.user?.email,
        amount: calculatedAmount * 100,
        sport: sport.sportName,
      }),
    });
    const { order } = await data.json();
    console.log(order.id);
    const options = {
      key: key,
      name: "Letzkhelo",
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      description: "",
      // image: logoBase64,
      handler: async function (response: any) {
        // if (response.length==0) return <Loading/>;
        console.log(response);

        const data = await fetch("/api/paymentverify", {
          method: "POST",
          // headers: {
          //   // Authorization: 'YOUR_AUTH_HERE'
          // },
          body: JSON.stringify({
            email: session?.user?.email,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            sportname: sport.sportName,
          }),
        });

        const res = await data.json();

        console.log("response verify==", res);

        if (res?.message == "success") {
          
       
          console.log("redirected.......");
          // Add route after payment success
          handleSubmit(
            {
              preventDefault: () => {},
            },
            sport,
            'online'
          );
          if(referralCode){
            try{
              await applyReferral({
                user_email: session?.user?.email || "",
                referral_code: referralCode || "",
                competition_fees: sport.onlineEntryFees,
                sport_referred_to: sport.sportName,
              });
            }
            catch(e:any){
              console.log(e)
            }
          }
          // router.push(`/SuccessPage/${params.id}`);
        }
      },
      prefill: {
        name: session?.user?.name,
        email: session?.user?.email,
        contact: "0000000000",
      },
    };

    const paymentObject = (window as any).Razorpay(options);
    paymentObject.open();
    setPaymentLoading(false);

    paymentObject.on("payment.failed", function (response: any) {
      alert("Payment failed. Please try again. Contact support for help");
    });
  };
  console.log(session, "ll");

  interface ReferralData {
    user_email: string;
    referral_code: string;
    competition_fees: number;
    sport_referred_to: string;
  }

  const applyReferral = async (data: ReferralData) => {
    try {
      const response = await axios.post(
        "https://letzkhelo-backend.onrender.com/apply_referral",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error applying referral:", error);
    }
  };

  // useEffect(()=>{
  //   if(session){
  //     console.log('asdsa')
  //      applyReferral({
  //       "user_email": session.user?.email || '',
  //       "referral_code":referralCode || '' ,
  //       "competition_fees": 500,
  //       "sport_referred_to": formData.sportName
  //   })
  //   }

  // },[session,referralCode])

  const getAllSports = async () => {
    setLoader(true);
    const res = await axios.get("/api/getAllSports");
    setLoader(false);
    setAllSports(res?.data);
  };

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
  function checkSubstringLengthAfterHyphen(str: any) {
    // Find the position of the hyphen in the string
    let hyphenIndex = str.indexOf("-");

    // Check if there is a hyphen
    if (hyphenIndex !== -1) {
      // Get the substring after the hyphen
      let substringAfterHyphen = str.substring(hyphenIndex + 1);

      // Check if the length of the substring is exactly 5
      if (substringAfterHyphen.length === 5) {
        return true;
      }
    }
    return false;
  }
  const [referalLoader, setReferralLoader] = useState(false);
  const [singleUser, setSingleUser] = useState<User | null>(null);

  const [referralIdRight, setReferralIdRight] = useState(false);
  const handleReferralIdChange = async (event: {
    target: { name: any; value: any };
  }) => {
    const id = event.target.value;
    setReferralCode(id);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    // if (checkSubstringLengthAfterHyphen(id)) {  // Assuming referral ID length is 10
    try {
      setReferralLoader(true);
      const result = await axios.post(
        "https://letzkhelo-backend.onrender.com/check_referral_code",
        { referral_code: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setReferralLoader(false);
      console.log({ result });
      if (
        result.data.message === "Referral code is valid" &&
        singleUser?.referral_code !== id
      ) {
        setReferralIdRight(true);
      }
    } catch (error) {
      setReferralLoader(false);
      setReferralIdRight(false);
      console.error("Error checking referral ID:", error);
    }
    // }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const identifier = session?.user?.email;
        console.log(identifier);
        const response = await axios.get(
          `/api/users/getsingleuser/${identifier}`
        );
        // console.log(response.data.data);
        setSingleUser(response.data.data);
        // console.log(singleUser,"setted",typeof(singleUser));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [session]);

  const handleRedeemPoints = async (event: {
    target: { name: any; value: string };
  }) => {
    const redeem = event.target.value === "yes";
    if (redeem) {
      try {
        const response = await axios.get(
          "https://api.example.com/get-reward-points"
        );
      } catch (error) {
        console.error("Error fetching reward points:", error);
      }
    }
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (
    e: { preventDefault: () => void },
    sport: any,
    paymentMode:string
  ) => {
    e.preventDefault();
    try {
      // const confirmed = window.confirm(
      //   `Do you want to register for ${sport.sportName} with entry fees ${
      //     sport.entryFees || 100
      //   } ? Fees will be Collected on the ground. `
      // );

      // if (!confirmed) {
      //   // User clicked Cancel in the confirmation dialog
      //   return;
      // }
      setLoader(true);

      const updatedFormData = {
        ...formData,
        userName: session?.user?.name,
        userEmail: session?.user?.email,
        sportName: sport?.sportName,
        registrationPrice: sport.entryFees
          ? sport.entryFees
          : formData.registrationPrice,
        date: sport?.date,
        paymentMode:paymentMode,
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
        referralId: "",
        redeemPoints: "",
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
                  <main className="bg-white w-full h-full lg:h-[95%] lg:w-[70%] p-12 lg:rounded-tl-none lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-bl-none">
                    <h2 className="flex uppercase justify-center font-bold text-xl pt-10 pb-3 border-b-2 border-b-orange-700 lg:text-2xl lg:justify-start">
                      Book For Competetion
                    </h2>

                    <form
                      onSubmit={(e) => handleSubmit(e, sport,'offline')}
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

                      {/* <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="registration-price"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Registration Pricee:
                        </label>
                        <input
                          id="registration-price"
                          type="number"
                          disabled
                          name="registrationPrice"
                          value={
                            sport.entryFees
                              ? sport.entryFees
                              : formData.registrationPrice
                          }
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div> */}

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
                          <option value="Below 55">Below 55</option>
                          <option value="55-65">55-65</option>
                          <option value="65-75">65-75</option>
                          <option value="Above 75">above 75</option>
                        </select>
                      </div>
                      <p className="font-normal   lg:w-3/5 mx-0 my-1">
                        NOTE: If you want to participate in multiple category
                        you can enroll yourself at the venue
                      </p>
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

                      <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-1">
                        <label
                          htmlFor="referral"
                          className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-1"
                        >
                          Referral Id:
                        </label>
                        <input
                          id="referral"
                          type="text"
                          name="referralId"
                          placeholder="Enter Referral Id"
                          value={formData.referralId}
                          onChange={handleReferralIdChange}
                          className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                        />
                      </div>
                      {referalLoader ? (
                        <>
                          Checking
                          <BeatLoader />
                        </>
                      ) : referralIdRight ? (
                        <p className="text-green-700 tex-bold">
                          Referral Applied
                        </p>
                      ) : formData.referralId ? (
                        <p className="text-red-700 tex-bold">
                          Enter Valid referral id
                        </p>
                      ) : (
                        ""
                      )}

                    {sumAmounts(singleUser?.referral_credits)?  <div className="flex flex-col w-full items-center lg:flex-row lg:justify-start lg:h-12 lg:w-3/5 m-1 mt-3">
                        <p className="font-normal text-lg lg:text-xl mx-0 my-1 mr-3">
                          Do you want to redeem reward points
                        </p>
                        <div>
                          <input
                            id="yes"
                            type="radio"
                            name="redeemPoints"
                            value="yes"
                            onChange={handleRedeemPoints}
                            className="p-2 h-4 w-4 mr-1 rounded-md border border-solid lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                          />
                          <label
                            htmlFor="yes"
                            className="font-normal text-lg lg:text-xl mx-0 my-1 mr-2"
                          >
                            Yes
                          </label>
                          <input
                            id="no"
                            type="radio"
                            name="redeemPoints"
                            value="no"
                            checked
                            onChange={handleRedeemPoints}
                            className="p-2 h-4 w-4 mr-1 rounded-md border border-solid lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
                          />
                          <label
                            htmlFor="no"
                            className="font-normal text-lg lg:text-xl mx-0 my-1"
                          >
                            No
                          </label>
                        </div>
                      </div>:null}
                     {sumAmounts(singleUser?.referral_credits)>0? <p className="font-normal lg:w-3/5 mx-0 my-1">
                        NOTE: Minimum 100 reward points redeem at a time
                      </p>:null}

                      <div className="md:flex m-auto">
                        <button
                          type="button"
                          onClick={() => makePayment(sport)}
                          className={`md:mx-2 md:px-8 md:my-12 my-4 p-3 border-none rounded-md bg-[#5853ff] text-white w-full font-medium text-base cursor-pointer hover:opacity-90 hover:scale-110 duration-500 ${
                            isFormNotValid || loader
                              ? "bg-gray-400 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={isFormNotValid || loader ? true : false}
                          style={{
                            cursor:
                              isFormNotValid || loader
                                ? "not-allowed"
                                : "pointer",
                          }}
                        >
                          {paymentLoading ? (
                            <div className="flex justify-evenly items-center w-full">
                              Registering
                              <BeatLoader
                                className=""
                                color={"#D0021B"}
                                size={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                            </div>
                          ) : (
                            "Register-online( Rs. " +
                            (referralIdRight
                              ? 0.95 * sport.onlineEntryFees
                              : sport.onlineEntryFees) +
                            ")"
                          )}
                        </button>
                        <button
                          type="submit"
                          className={`md:mx-2  md:px-8 md:my-12 my-4 p-3 border-none rounded-md bg-[#5853ff] text-white w-full font-medium text-base cursor-pointer hover:opacity-90 hover:scale-110 duration-500 ${
                            isFormNotValid || loader
                              ? "bg-gray-400 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={isFormNotValid || loader ? true : false}
                          style={{
                            cursor:
                              isFormNotValid || loader
                                ? "not-allowed"
                                : "pointer",
                          }}
                        >
                          {loader ? (
                            <div className="flex justify-evenly items-center">
                              Registering
                              <BeatLoader
                                className=""
                                color={"#D0021B"}
                                size={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                            </div>
                          ) : (
                            "Register-offline( Rs. " +
                            sport.offlineEntryFees +
                            ")"
                          )}
                        </button>
                      </div>
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
