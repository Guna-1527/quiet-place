import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.jpg"

const Categories = () => {
  return (
    <div className='w-full h-[400px] flex flex-col p-12 items-center'>
      <h1>Popular Quiz Categories</h1>
      <div className="flex flex-wrap justify-around max-w-4xl gap-10 mt-10">
        <div className='flex items-center border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2>General knowledge</h2>
            <p>150 Quiz</p>
          </div>
        </div>

        <div className='flex items-center border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2>General knowledge</h2>
            <p>150 Quiz</p>
          </div>
        </div>

        <div className='flex items-center border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2>General knowledge</h2>
            <p>150 Quiz</p>
          </div>
        </div>

        <div className='flex items-center border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2>General knowledge</h2>
            <p>150 Quiz</p>
          </div>
        </div>

        <div className='flex items-center border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2>General knowledge</h2>
            <p>150 Quiz</p>
          </div>
        </div>

        <div className='flex items-center border-1 border-gray-600 px-8 py-4'>
          <div className="image w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
          </div>
          <div className="text">
            <h2>General knowledge</h2>
            <p>150 Quiz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories