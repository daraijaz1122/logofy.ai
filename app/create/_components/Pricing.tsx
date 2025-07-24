"use client";
import React, { useEffect } from "react";
import HeadingDesciption from "./HeadingDesciption";
import Lookup from "@/app/_data/Lookup";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface PricingProps {
  data: {
    title?: string;
    desc?: string;
    palette?: string;
    design?: {
      image: string;
      prompt: string;
      title: string;
    };
    idea?: any;
  };
}
const Pricing = ({ data }: PricingProps) => {
  const { user } = useUser();
  const { push } = useRouter();
  useEffect(() => {
    if (data.title && typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(data));
    }
  }, [data]);
  return (
    <div className="mt-4">
      <HeadingDesciption
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-10">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            className="p-4 border shadow-md  flex  flex-col items-center rounded-lg"
            key={index}
          >
            <Image src={pricing.icon} alt="image" height={50} width={50} />
            <h2 className="font-semibold text-xl">{pricing.title}</h2>
            <div>
              {pricing.features.map((item, index) => (
                <h2 key={index} className=" text-lg mt-3">
                  {item}
                </h2>
              ))}
            </div>
            {user ? (
              <Button
                onClick={() => push("/generate-logo?title=" + pricing.title)}
                className="bg-pink-600 p-4 mt-4 cursor-pointer"
              >
                {pricing.button}
              </Button>
            ) : (
              <SignInButton
                mode="modal"
                forceRedirectUrl={"/generate-logo?type=" + pricing.title}
              >
                <Button className="bg-pink-600 cursor-pointer p-4 mt-4">
                  {pricing.button}
                </Button>
              </SignInButton>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
