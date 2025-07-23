import React from 'react'
import HeadingDesciption from './HeadingDesciption';
import Lookup from '@/app/_data/Lookup';
type LogoDescProps = {
  data: string;
  onHandlerInputChange: (value: string) => void;
};
const LogoDesc: React.FC<LogoDescProps> = ({ data, onHandlerInputChange }) =>  {
 console.log(data,"log description")
  return (
      <div className='my-10'>
          <HeadingDesciption
              title={Lookup.LogoDescTitle}
              description={Lookup.LogoDescDesc}
          />
              <input
                  defaultValue={data}
                  type='text'
                  placeholder={Lookup?.InputTitlePlaceholder}
                  className='w-full p-4 border rounded-lg mt-5 '
                  onChange={(e)=>onHandlerInputChange(e.target.value)}
              />
    </div>
  )
}

export default LogoDesc