import { useState,useEffect} from 'react';
import React from 'react'
import HeadingDesciption from './HeadingDesciption';
import Lookup from '@/app/_data/Lookup';
import Prompt from '@/app/_data/Prompt';
import { Loader2Icon } from 'lucide-react';
import axios from 'axios';
interface logoIdeaProps{
  formData: {
    title: string;
    desc: string;
    palette: string;
    design: {
      title: string;
      prompt: string;
      image:"string"
    }
    idea: string;
  };
    onHandlerInputChange: (value: string) => void;
}
const LogoIdea = ({onHandlerInputChange,formData}:logoIdeaProps) => {
  const [ideas,setIdeas]=useState([]);
  const [loading,setLoading]=useState(false);
  const [selectedOption,setSelectedOption]=useState(formData?.idea);
  useEffect(()=>{
    generateLogoDesignIdea();
  },[])

  const generateLogoDesignIdea=async()=>{
   
    setLoading(true)
    const PROMPT=Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}',formData?.design.title)
    .replace('{logoTitle}',formData.title)
    .replace('{logoDesc}',formData.desc)
    .replace('{logoPrompt}',formData.design.prompt)

    // console.log(PROMPT);
    const result=await axios.post('/api/ai-design-ideas',{
      prompt:PROMPT
    })

    console.log(result.data)
   !ideas&&setIdeas(result.data.ideas);
    setLoading(false);
  }
  
  return (
    <div>
      <HeadingDesciption
        title={Lookup.LogoIdeaTitle}
        description={Lookup.LogoIdeaDesc}
      />
      <div className='flex items-center justify-center'>
    {loading&&<Loader2Icon className='animate-spin my-10' />}
    </div>
    <div className='flex flex-wrap gap-3 mt-6'>
      {ideas&&ideas.map((item:any,index:number)=>(
        <h2 key={index}
        onClick={()=>{setSelectedOption(item);
          onHandlerInputChange(item)
        }}
        className={`p-2 rounded-full border px-3 cursor-pointer
          hover:border-primary ${selectedOption==item&&'border-primary'}`}
        >{item}</h2>
      ))}
      <h2 
       onClick={()=>{setSelectedOption('Let AI Select the best idea');
        onHandlerInputChange('Let AI Select the best idea')
      }}
      className={`p-2 rounded-full border px-3 cursor-pointer
          hover:border-primary ${selectedOption=='Let AI Select the best idea'&&'border-primary'}`}>Let AI Select the best idea</h2>
    </div>
    </div>
  )
}

export default LogoIdea