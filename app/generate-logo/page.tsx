"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/UserDetailContext";
import Prompt from "../_data/Prompt";
import axios from "axios";

const page = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    palette: "",
    design: {
      title: "",
      image: "",
      prompt: "",
    },
    idea: "",
  });
  useEffect(() => {
    if (typeof window != undefined && userDetail?.email) {
      const data = localStorage.getItem("formData");
      if (data) {
        setFormData(JSON.parse(data));
      }
    }
  }, [userDetail]);
  useEffect(() => {
    if (formData?.title) {
      generateAILogo();
    }
  }, [formData]);
  const generateAILogo = async () => {
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoIdea}", formData?.idea)
      .replace("{logoPrompt}", formData?.design?.prompt);
    console.log(PROMPT);

    const result = await axios.post("/api/ai_logos/", {
      prompt: PROMPT,
    });
    console.log(result, result.data);
  };
  return <div>page generate logo</div>;
};

export default page;
