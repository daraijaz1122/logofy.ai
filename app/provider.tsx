"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import axios from "axios";
import { ReactNode } from "react";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "./_context/UserDetailContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);
  useEffect(() => {
    user && CheckUserAuth();
  }, [user]);

  const CheckUserAuth = async () => {
    const result = await axios.post("/api/users", {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress,
    });
    setUserDetail(result?.data);
  };
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Navbar />
        <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">{children}</div>
      </div>
    </UserDetailContext.Provider>
  );
};

export default Provider;
