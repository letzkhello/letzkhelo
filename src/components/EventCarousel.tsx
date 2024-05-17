import axios from "axios";
import React, { useEffect, useState } from "react";
interface Event {
  image: string;
  eventName: string;
  entryFees: number;
  location: string;
  date: string;
  // Add other properties if available
}
function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allEvents, setAllEvents] = useState<Event[]>([]);


  useEffect(() => {
    const getAllEvents = async () => {
      const res = await axios.get("/api/getAllEvents");
      console.log(res, "asd");
      setAllEvents(res.data);
    };
    getAllEvents();
  }, []);

  const carouselItems = [
    {
      src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
      alt: "Burger",
      text: "Image 1",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
      alt: "Burger",
      text: "Image 2",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
      alt: "Burger",
      text: "Image 3",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
      alt: "Burger",
      text: "Image 4",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
      alt: "Burger",
      text: "Image 5",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
      alt: "Burger",
      text: "Image 6",
    },
    {
      src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
      alt: "Burger",
      text: "Image 7",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carousel rounded-box">
        {allEvents.map((item, index) => (
          <div
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            key={index}
          >
            <div className="flex flex-col">
              <img
                className="max-h-[200px] "
                src={item?.image}
                alt={"event"}
                height={400}
                width={400}
              />
              <div className="p-4">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Event Name: {item?.eventName}
                </p>
                <p className="text-gray-600 mb-1">
                  Entry Fees: {item?.entryFees}
                </p>
                <p className="text-gray-600 mb-1">Location: {item?.location}</p>
                <p className="text-gray-600 mb-1">Date: {item?.date}</p>
                {/* <p className="text-gray-600 mb-1">
                  Description: {item?.description}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="badge badge-secondary flex justify-center">&lt;-- scroll to view more --&gt;</div>

    </div>
  );
}

export default EventsCarousel;
