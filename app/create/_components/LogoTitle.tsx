"use client"
import React, { useState } from 'react'
import HeadingDesciption from './HeadingDesciption'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'
interface LogoTitleProps {
  onHandlerInputChange: (value: string) => void;
}

const LogoTitle = ({ onHandlerInputChange }: LogoTitleProps) => {
  const searchParam = useSearchParams();
  const [title, setTitle] = useState(searchParam?.get('title') ?? "");
  return (
      <div className='mt-10'>
          <HeadingDesciption
              title={Lookup?.LogoTitle}
              description={Lookup?.LogoTitleDesc}
          />
      <input
        
        type='text'
        placeholder={Lookup?.InputTitlePlaceholder}
        className='w-full p-4 border rounded-lg mt-5 '
        defaultValue={title}
        onChange={(e)=>onHandlerInputChange(e.target.value)}
        />
          
    </div>
  )
}

export default LogoTitle;