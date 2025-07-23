import React, { useState } from 'react'
import HeadingDesciption from './HeadingDesciption';
import Lookup from '@/app/_data/Lookup';
import LogoDesigns from '@/app/_data/LogoDesigns';
import Image from 'next/image';


type logoDesignDescProps={
  data: {
    title: string;
    image: string;
    prompt: string;
  }
  onHandlerInputChange: (value: {
    title: string;
    image: string;
    prompt: string;
  }) => void;
}
const LogoDesignDesc:React.FC<logoDesignDescProps>=({data,onHandlerInputChange}:logoDesignDescProps) => {
  const [selectedDesign, setSelectedDesign] = useState(data.title);
  return (
    <div className='my-10'>
      <HeadingDesciption
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
        {
          LogoDesigns.map((design,index) => (
            <div key={index}
              className={`p-1 hover:border-2 border-pink-600 rounded-xl cursor-pointer ${selectedDesign==design.title&&'border-2 rounded-xl border-pink-600'} `}
              onClick={() => {
                setSelectedDesign(design.title);
                onHandlerInputChange(design)
            }}
            >
              <Image src={design.image} alt={design.title} width={200} height={300}
              className='w-full rounded-xl h-[150px] object-cover'
              />
              <h2 className='text-center mt-3 font-semibold text-lg'>{design.title }</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LogoDesignDesc;