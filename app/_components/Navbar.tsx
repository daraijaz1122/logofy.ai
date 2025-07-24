"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="px-10 flex justify-between items-center lg:px-32 xl:px-48 2xl:px-56 p-4 shadow-lg ">
      <Image height={150} width={200} src={"/logo.svg"} alt="logo" />

      <div className="flex gap-3 items-center">
        {user ? (
          <Button variant="outline">Dashboard</Button>
        ) : (
          <Button className="bg-pink-600 p-4 text-white"> Get Started</Button>
        )}

        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
