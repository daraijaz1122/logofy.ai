"use client"
import React, { useState } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Hero = () => {
    const [title, setTitle] = useState("")
  return (
      <div className='flex items-center flex-col mt-24 gap-5'>
          <h2 className='font-bold text-5xl text-pink-600 text-center'>{ Lookup.Heading}</h2>
          <h2 className='font-bold text-5xl text-center '> { Lookup.SubHeading}</h2>
          <h2 className=' text-center text-lg text-gray-700'>{Lookup.Description}</h2>
         
          <div className='flex gap-6 w-full max-w-2xl mt-10 items-center'>
              
              <input
                  onChange={(e)=>(setTitle(e.target.value) )}
          className='w-1/2 p-3 rounded-md shadow-md border'
                  type="text" placeholder={Lookup.InputPlaceholder} />
             <Link className='w-full' href={`/create?title=${title}`}>
              <Button
                  
                  className=' w-1/2 p-6 cursor-pointer bg-pink-600 '>Get Started</Button>
         </Link>
          </div>
         
    </div>
  )
}

export default Hero;