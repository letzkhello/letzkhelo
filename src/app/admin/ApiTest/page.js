"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ApiTest = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchAllSports() {
      const response = await axios.get("/api/users/getAllUsers");
      setAllUsers(response.data.data);
    }
    fetchAllSports();
  }, []);

  return (
    <div>
      GetAllSports
      {allUsers?.map((user) => (
        <h1 key={1}>{user.name}</h1>
      ))}
    </div>
  );
};

export default ApiTest;
