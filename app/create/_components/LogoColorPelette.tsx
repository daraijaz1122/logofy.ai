import React, { useState } from 'react'
import HeadingDesciption from './HeadingDesciption';
import Lookup from '@/app/_data/Lookup';
import Colors from '@/app/_data/Colors';
interface LogoColorProps {
  data: string;
  onHandlerInputChange: (value: string) => void;
}
const LogoColorPelette = ({onHandlerInputChange,data}:LogoColorProps) => {
  const [selectedPalette, setSelectedPalette] = useState(data)
  console.log(data,"color palette")
  return (
    <div>
      <HeadingDesciption
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        {Colors.map((palette: any, index: number) => (
          <div key={index}
            className={`flex p-1 cursor-pointer ${selectedPalette ===palette.name&&'border-2 rounded-lg border-pink-600'}`}>
            {palette?.colors.map((color:string, index:number) => (
              <div
                onClick={() => {
                  setSelectedPalette(palette.name);
                  onHandlerInputChange(palette.name)
                }}
                className='h-24 w-full'
                key={index}
                style={{
                backgroundColor:color
              }}
              >
               
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoColorPelette