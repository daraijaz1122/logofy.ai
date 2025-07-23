"use client"
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPelette from './_components/LogoColorPelette'
import LogoDesignDesc from './_components/LogoDesignDesc'
import LogoIdea from './_components/LogoIdea'

const page = () => {
  const [step, setStep] = useState(1);
  interface FormData {
    title?: string;
    desc?: string;
    palette?: string;
    design?: {
      image: string;
      prompt: string;
      title: string;
    };
    idea?: any;
  }

  const [formData, setFormData] = useState<FormData>({});
  const onHandlerInputChange = (field: string, value: any) => {
    setFormData((prev:any) => ({
      ...prev,
      [field]: value
      
    }))
    console.log(formData)
  }
  return (
      <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'> 
      {
        step==1 ? <LogoTitle  onHandlerInputChange={(v) => onHandlerInputChange('title', v)} /> :
          step == 2 ? <LogoDesc data={formData?.desc ?? ''} onHandlerInputChange={(v) => onHandlerInputChange('desc', v)} /> :
            step == 3 ? <LogoColorPelette data={formData?.palette ?? ''} onHandlerInputChange={(v) => onHandlerInputChange('palette', v)} /> :
              step == 4 ? (
                <LogoDesignDesc
                  data={formData?.design ?? { title: '', image: '', prompt: '' }}
                  onHandlerInputChange={(v) => onHandlerInputChange('design', v)}
                />
              ) :
                step == 5 ? <LogoIdea data={formData} onHandlerInputChange={(v) => onHandlerInputChange('idea', v)} /> :
                  null
          }
      
          
          <div className='flex justify-between items-center mt-10'>
        {step != 1 && <Button onClick={() => setStep(step - 1)} variant={'outline'}><ArrowLeft />Previous</Button>} 
        <Button onClick={()=>setStep(step+1)} className='bg-pink-600'><ArrowRight /> Continue</Button>
              
          </div>
    </div>
  )
}

export default page