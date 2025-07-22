import React from 'react'
import HeadingDesciption from './HeadingDesciption'
import Lookup from '@/app/_data/Lookup'

const LogoTitle = () => {
    
  return (
      <div className='mt-10'>
          <HeadingDesciption
              title={Lookup?.LogoTitle}
              description={Lookup?.LogoTitleDesc}
          />
          <input type='text' placeholder={Lookup?.InputPlaceholder}
              className='w-full p-4 border rounded-lg mt-5 '
              
          />
          
    </div>
  )
}

export default LogoTitle;