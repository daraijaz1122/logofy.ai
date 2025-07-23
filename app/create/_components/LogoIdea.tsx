import { useState,useEffect} from 'react';
import React from 'react'
import HeadingDesciption from './HeadingDesciption';
import Lookup from '@/app/_data/Lookup';
import Prompt from '@/app/_data/Prompt';
import { Loader2Icon } from 'lucide-react';
import axios from 'axios';
interface logoIdeaProps{
  data: {
    title: string;
    desc: string;
    palette: string;
    design: {
      title: string;
      prompt: string;
      image: string;
    }
    idea: string;
  };
    onHandlerInputChange: (value: string) => void;
}
const LogoIdea = ({onHandlerInputChange,data}:logoIdeaProps) => {
  const [ideas,setIdeas]=useState([]);
  const [loading,setLoading]=useState(false);
  const [selectedOption, setSelectedOption] = useState(data?.idea);
  
  useEffect(() => {
    generateLogoDesignIdea();
  },[])

 

  const generateLogoDesignIdea=async()=>{
   
    setLoading(true)
    const PROMPT=Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}',data?.design.title)
    .replace('{logoTitle}',data?.title)
    .replace('{logoDesc}',data?.desc)
    .replace('{logoPrompt}',data?.design?.prompt)

    console.log(PROMPT, "prompt");
    try {
      const result=await axios.post('/api/ai_design_ideas',{
      prompt:PROMPT
    })

   setIdeas(result.data.logo_ideas);
    setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("some thing is up with you server",e)
    }
   
    
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
        {ideas.map((item:string, index: number) => (
        
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