"use client"
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function AddBlog() {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    image: "",
    description: "",
    author:"",
  });

  const blogDetailsEdit = (e: { target: { name: any; value: any } }) => {
   setBlogDetails({
    ...blogDetails,
    [e.target.name]:e.target.value,
   });
  };
  const handleSubmit = async (e: { preventDefault: () => void }, user: any) => {
    e.preventDefault();
    try {
      const currentDate = new Date();
      const updatedBlogDetails = {
        ...blogDetails,
        date: currentDate,
      };
      console.log(updatedBlogDetails,"pardsda");
      await axios.post("/api/addBlog", updatedBlogDetails);
      toast.success("blog add Successfully");
      setBlogDetails({
        title: "",
        image: "",
        description: "",
        author:"",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };


  const currentDate = new Date();
  return (
    <div className="bg-white border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Add Blog</h3>
      </div>

      <div className="p-6 space-y-6">
        <form action="#"  onSubmit={(e) => handleSubmit(e,{})}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                value={blogDetails.title}
                onChange={blogDetailsEdit}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Title”"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Image
              </label>
              <input
                type="text"
                name="image"
                value={blogDetails.image}
                onChange={blogDetailsEdit}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Image"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="author"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
               Author
              </label>
              <input
                type="text"
                name="author"
                value={blogDetails.author}
                onChange={blogDetailsEdit}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="Author Name"
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                value={blogDetails.description}
                onChange={blogDetailsEdit}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full h-48 p-4"
                placeholder="Details"
              ></input>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded-b">
        <button
          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          Save blog
        </button>
      </div>
        </form>
      </div>
    </div>
  );
}
