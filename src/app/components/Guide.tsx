import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.jpg"

const Guide = () => {
  return (
    
    <div className='w-full h-[400px] bg-[#7C4DFF] opacity-65 flex flex-col p-12 items-center'>
      <h1>How to get started?</h1>
      <div className="flex flex-wrap justify-around gap-10 mt-10">
        <div className='flex w-[330px] justify-center text-center items-center flex-col border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[80px] h-[80px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2 className='font-bold mb-2'>Choose Category</h2>
            <p>Browse through various subjects and select your preferred topic</p>
          </div>
        </div>

        <div className='flex w-[330px] justify-center text-center items-center flex-col border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[80px] h-[80px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2 className='font-bold mb-2'>Choose Category</h2>
            <p>Browse through various subjects and select your preferred topic</p>
          </div>
        </div>

        <div className='flex w-[330px] justify-center text-center items-center flex-col border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[80px] h-[80px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2 className='font-bold mb-2'>Choose Category</h2>
            <p>Browse through various subjects and select your preferred topic</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide