"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

export const AddEventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    image: "",
    location: "",
    date: "",
    entryFees: "",
    locationLink: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoader(true);
      await axios.post("/api/addEvent", formData);
      setLoader(false);
      toast.success("Event added successfully!");
      setFormData({
        eventName: "",
        description: "",
        image: "",
        location: "",
        date: "",
        entryFees: "",
        locationLink: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setLoader(false);
    }
  };

  return (
    <div className="w-full lg:bg-[#090c31] flex justify-center items-center lg:h-[140vh]">
      <main className="bg-white w-full h-full lg:h-[80%] lg:w-[70%] p-12 lg:rounded-tl-none lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-bl-none">
        <h2 className="flex uppercase justify-center font-bold text-xl pt-10 pb-3 border-b-2 border-b-orange-700 lg:text-2xl lg:justify-start">
          Add Event
        </h2>
        <form
          onSubmit={handleSubmit}
          className="m-5 flex flex-col items-center justify-center lg:m-20"
        >
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="event-name"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Event Name:
            </label>
            <input
              id="event-name"
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="description"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Event Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>

          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="img-url"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Image URL:
            </label>
            <input
              id="img-url"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="date"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Date of Competetion:
            </label>
            <input
              id="date"
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>

          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="entryFees"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Entry Fees:
            </label>
            <input
              id="entryFees"
              type="number"
              name="entryFees"
              value={formData.entryFees}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>

          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="loaction"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Event location:
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>

          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="location-url"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Location URL:
            </label>
            <input
              id="location-url"
              type="text"
              name="locationLink"
              value={formData.locationLink}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mx-0 my-12 p-3 border-none rounded-md bg-[#5853ff] text-white w-52 font-medium text-base cursor-pointer hover:opacity-90"
            disabled={loader ? true : false}
          >
            {loader ? (
              <div className="flex justify-evenly items-center">
                Adding Event
                <BeatLoader
                  className=""
                  color={"#D0021B"}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              "Add Event"
            )}
          </button>
        </form>
      </main>
    </div>
  );
};
