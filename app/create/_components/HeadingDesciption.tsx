import React from 'react'

interface inputProps{
    title: string;
    description: string;
}
const HeadingDesciption: React.FC<inputProps> = ({ title, description }) => {
  return (
      <div>
          <h2 className='font-bold text-3xl text-pink-600'>{ title}</h2>
          <h2 className='text-lg text-gray-600 mt-2'>{description}</h2>
    </div>
  )
}

export default HeadingDesciption