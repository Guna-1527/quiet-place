import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.jpg"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='px-14 flex justify-between items-center h-[50px]'>
      <div className="left flex gap-6 items-center"> 
        <div className="logo w-[40px] h-[40px]">
          <Image src={Logo} alt='logo'/>
        </div>
        <div className="links flex gap-8">
          <Link href={""} className='hover:bg-[#7C4DFF] hover:text-white px-2 transition-all rounded-md py-1'>Home</Link>
          <Link href={""} className='hover:bg-[#7C4DFF] hover:text-white px-2 transition-all rounded-md py-1'>Categories</Link>
          <Link href={""} className='hover:bg-[#7C4DFF] hover:text-white px-2 transition-all rounded-md py-1'>Leaderboard</Link>
          <Link href={""} className='hover:bg-[#7C4DFF] hover:text-white px-2 transition-all rounded-md py-1'>About us</Link>
        </div>
      </div>
      <div className="right">
        <button className='px-3 py-2 bg-[#7C4DFF] text-white rounded-sm text-sm'>sign up</button>
      </div>

    </div>
  )
}

export default Navbar