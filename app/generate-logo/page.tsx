"use client";
import React, { useContext } from "react";
import { UserDetailContext } from "../_context/UserDetailContext";

const page = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  console.log(userDetail);
  return <div>page generate logo</div>;
};

export default page;
