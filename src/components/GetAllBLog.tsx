"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
function GetAllBlog() {
  const [loader, setLoader] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    blogDetails();
  }, []);

  const blogDetails = async () => {
    try {
      setLoader(true);
      const response = await axios.get("/api/getAllBlogs");
      setLoader(false);
      setBlogData(response.data);
      console.log(response.data, "praksh");
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };
  if (loader) {
    return <Loader />;
  } else {
    return (
      <div>
        {blogData.map((blog: any, id) => {
          return (
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8" key={id}>
              <div className="max-w-3xl mx-auto">
                <div className="py-8">
                  <h1 className="text-3xl font-bold mb-2 capitalize text-white">{blog?.title}</h1>
                  <p className="text-sm capitalize text-white">
                  <b>Author Name :</b>   {blog?.author}
                  </p>
                  <p className="capitalize text-white text-sm">
                    <time dateTime="2022-04-05"><b>Date :</b>{blog?.date}</time>
                  </p>
                </div>
                <img
                  src={blog?.image}
                  alt="Featured image"
                  className="w-full h-auto mb-8"
                />
                <h2 className="text-3xl mb-2 text-white">{blog?.subHeading}</h2>
                <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto text-white">
                  {blog?.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetAllBlog;
