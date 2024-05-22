"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import Image from "next/image";

import useDebounce from "./hooks/useDebounce";
interface Event {
  image: string;
  eventName: string;
  entryFees: number;
  location: string;
  date: string;
  // Add other properties if available
}

function AllEvents() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [dateFilter, setDateFilter] = useState({
    olderThan: "",
    newerThan: "",
  });
  const [priceFilter, setPriceFilter] = useState({
    minPrice: "",
    maxPrice: "",
  });
  const debouncedOlderThan = useDebounce(dateFilter.olderThan, 500);
  const debouncedNewerThan = useDebounce(dateFilter.newerThan, 500);
  const debouncedMinPrice = useDebounce(priceFilter.minPrice, 500);
  const debouncedMaxPrice = useDebounce(priceFilter.maxPrice, 500);
  const convertDate = (dateString: any) => {
    const date = new Date(dateString);

    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;

      const showDate = `${day}-${month}-${year}`;
      return showDate;
    } else {
      return "Coming Soon";
    }
  };
  useEffect(() => {
    const getAllEvents = async () => {
      setLoading(true);
      const res = await axios.get("/api/getAllEvents");
      setLoading(false);
      setAllEvents(res.data);
    };
    getAllEvents();
  }, []);
  const [showFilters, setShowFilters] = useState(false);
  // useEffect(() => {
  //   const getFilteredEvents = async () => {
  //     let query = "/api/getAllEvents?";
  //      const filters = [];
  //     if (dateFilter.olderThan) {
  //       query += `date=${dateFilter.olderThan.toString}&dateFilter=$lt`;
  //     }
  //     if (dateFilter.newerThan) {
  //       query += `date=${dateFilter.newerThan.toString}&dateFilter=$gt`;
  //     }
  //     if (priceFilter.minPrice) {
  //       console.log(priceFilter, typeof priceFilter.minPrice);
  //       query += `entryFees=${priceFilter.minPrice}&entryFeesFilter=$gt`;
  //     }
  //     if (priceFilter.maxPrice) {
  //       query += `entryFees=${priceFilter.maxPrice}&entryFeesFilter=$lt`;
  //     }

  //     const res = await axios.get(query);
  //     setFilteredEvents(res.data);
  //     //   setAllEvents(res.data);
  //   };

  //   getFilteredEvents();
  // }, [dateFilter, priceFilter]);
  const clearFilters = () => {
    setDateFilter({
      olderThan: "",
      newerThan: "",
    });
    setPriceFilter({
      minPrice: "",
      maxPrice: "",
    });
  };
  useEffect(() => {
    const getFilteredEvents = async () => {
      let query = "/api/getAllEvents?";
      const filters = [];

      if (dateFilter.olderThan) {
        filters.push(`date=${debouncedOlderThan}&dateFilter=$lt`);
      }
      if (dateFilter.newerThan) {
        filters.push(`date=${debouncedNewerThan}&dateFilter=$gt`);
      }
      if (priceFilter.minPrice) {
        filters.push(`minPrice=${debouncedMinPrice}`);
      }
      if (priceFilter.maxPrice) {
        filters.push(`maxPrice=${debouncedMaxPrice}`);
      }

      if (filters.length > 0) {
        query += filters.join("&");
      }
      setLoading(true);
      const res = await axios.get(query);
      setLoading(false);

      setFilteredEvents(res.data);
    };

    getFilteredEvents();
  }, [
    debouncedOlderThan,
    debouncedNewerThan,
    debouncedMinPrice,
    debouncedMaxPrice,
  ]);
  if (loading == true) {
    return <Shimmer />;
  } else {
    return (
      <div className="w-full p-4 flex flex-wrap justify-center">
        <p className="text-xl font-sans w-full text-center text-black font-bold md:text-2xl lg:text-4xl mb-2">
          ALL EVENTS
        </p>

        <div className="flex flex-col sm:flex-row items-center my-4 space-y-4 sm:space-y-0 sm:space-x-4 w-full px-16">
          <div className="w-full sm:w-auto">
            <label className="mr-2">Newer Than:</label>
            <input
              type="date"
              value={dateFilter.olderThan}
              onChange={(e) =>
                setDateFilter({ ...dateFilter, olderThan: e.target.value })
              }
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="mr-2">Older Than:</label>
            <input
              type="date"
              value={dateFilter.newerThan}
              onChange={(e) =>
                setDateFilter({ ...dateFilter, newerThan: e.target.value })
              }
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="mr-2">Min Entry Price:</label>
            <input
              type="number"
              value={priceFilter.minPrice}
              onChange={(e) =>
                setPriceFilter({ ...priceFilter, minPrice: e.target.value })
              }
              className="p-2 border rounded w-full"
            />
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="mr-2">Max Entry Price:</label>
            <input
              type="number"
              value={priceFilter.maxPrice}
              onChange={(e) =>
                setPriceFilter({ ...priceFilter, maxPrice: e.target.value })
              }
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="w-full sm:w-auto pt-5">
            <button
              onClick={clearFilters}
              className="p-2 bg-red-500 text-white rounded w-full sm:w-auto "
            >
              Clear Filters
            </button>
          </div>
        </div>

        {filteredEvents.map((event, id) => {
          return (
            <div className="flex p-6" key={id}>
              <div className="card w-80 p-2 my-6 glass transition-transform transform hover:scale-105 duration-300 sm:my-12 bg-white">
                <figure>
                  <Image
                    src={event?.image}
                    alt="img"
                    width="300"
                    height="200"
                    className="rounded-t-lg object-cover h-48 w-72"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{event?.eventName}</h2>
                  <p className="h-16 overflow-hidden whitespace-normal">
                    Location:
                    {/* <Link href={`${event?.locationLink}`} target="_blank"> */}
                    <span className="">{event?.location}</span>
                    {/* </Link> */}
                  </p>
                  <p>Date: {convertDate(event?.date)}</p>
                  {/* {event?.isOnlinePaymentAvailable && (
              <p>
                Entry Fee-Online:{" "}
                <span className="text-blue-600 font-bold">{300}</span>
              </p>
            )} */}
                  {/* <p>
              Entry Fee
              <span className="text-blue-600 font-bold">
                {event?.entryFees ? event?.entryFees : "Free"}
              </span>
            </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllEvents;
