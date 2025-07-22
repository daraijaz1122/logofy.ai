import React from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const page = () => {
  return (
      <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'> 
          <LogoTitle />
          
          <div className='flex justify-between items-center mt-10'>
              <Button variant={'outline'}><ArrowLeft/>Previous</Button>
              <Button className='bg-pink-600'><ArrowRight/> Continue</Button>
          </div>
    </div>
  )
}

export default page