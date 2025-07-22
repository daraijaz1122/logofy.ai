import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
      <div className='px-10 flex justify-between items-center lg:px-32 xl:px-48 2xl:px-56 p-4 shadow-lg '>
          <Image height={150} width={200} src={"/logo.svg"} alt='logo' />
          <Button className='bg-pink-600 p-4 text-white'> Get Started</Button>
    </div>
  )
}

export default Navbar