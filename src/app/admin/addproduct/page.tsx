"use client";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import BeatLoader from "react-spinners/BeatLoader";

export default function Addproduct() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    price: "",
    discountedPrice: "",
    inStock:"",
    expectedDelievery: "",
    imageLink: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData,"prakash")
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoader(true);
      await axios.post("/api/addProduct", formData);
      setLoader(false);
      toast.success("product added successfully!");
      setFormData({
        productName: "",
        category: "",
        description: "",
        price: "",
        discountedPrice: "",
        inStock:"",
        expectedDelievery: "",
        imageLink: "",
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
          Add Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="m-5 flex flex-col items-center justify-center lg:m-20 "
        >
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="productName"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Product Name:
            </label>
            <input
              id="productName"
              type="text"
              name="productName"
              value={formData.productName}
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
              Description
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
              htmlFor="category"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Category:
            </label>
            <input
              id="category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="price"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Price:
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="discountPrice"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Discounted Price :
            </label>
            <input
              id="discountedPrice"
              type="number"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>

          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="loaction"
              className="font-normal text-lg lg:text-xl lg:w-4/5 mx-0 my-4"
            >
              Instock
            </label>
            <select
              id="inStock"
              name="inStock"
              onChange={handleChange}
              value={formData?.inStock}
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-3 border-[rgba(123,123,123,0.6)] outline-none"
            >
               <option
                value=""
                
              >
                SELECT
              </option>
              <option
                value="true"
              >
                TRUE
              </option>
              <option
                value="false"              >
                FALSE
              </option>
            </select>
          </div>

          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="expectedDelievery"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Expected delievery
            </label>
            <input
              id="expectedDelievery"
              type="text"
              name="expectedDelievery"
              value={formData.expectedDelievery}
              onChange={handleChange}
              required
              className="self-stretch p-1  rounded-md border border-solid lg:w-4/5 lg:p-4 border-[rgba(123,123,123,0.6)] outline-none"
            />
          </div>
          <div className="flex flex-col w-full items-center lg:flex-row lg:justify-end lg:h-12 lg:w-3/5 m-2">
            <label
              htmlFor="imageLink"
              className="font-normal text-lg lg:text-xl lg:w-2/5 mx-0 my-4"
            >
              Product Image
            </label>
            <input
              id="imageLink"
              type="text"
              name="imageLink"
              value={formData.imageLink}
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
                Adding Product
                <BeatLoader
                  className=""
                  color={"#D0021B"}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              "Add Product"
            )}
          </button>
        </form>
      </main>
    </div>
  );
}
