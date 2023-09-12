"use client"
import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";



const ApiTest = () => {

  const [allSports, setAllSports] = useState([]);

  useEffect(() => {
    async function fetchAllSports() {
        const response = await axios.get("/api/getAllSports");
        setAllSports(response.data);
    }
    fetchAllSports()
  },[])

  return (
    <div>
        GetAllSports
        {
            allSports.map((sport)=> (
              <h1 key={1}>{sport?.sportName}</h1>
            ))
        }
    </div>
  )
}

export default ApiTest