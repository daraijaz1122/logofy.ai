import React from 'react'
import Navbar from './_components/Navbar'

import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
      <div>
          <Navbar />
          <div className='px-10 lg:px-32 xl:px-48 2xl:px-56'>
             {children} 
          </div>
          
    </div>
  )
}

export default Provider