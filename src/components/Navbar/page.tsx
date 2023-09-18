import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from "react-icons/ai"
import {HiMenuAlt2} from "react-icons/hi"

const page = () => {
  return (
    <div className='bg-black w-full'>
        <div className='flex items-center w-[90%] m-auto justify-between'>
            <div>
                <Image className='cursor-pointer' src="/logow.png" height={70} width={70} alt='logo'/>
            </div>
            <div className='w-[28%] flex items-center gap-4 font-semibold'>
                <a href='#' className='text-white hover:text-red-600 transition-all duration-400 hidden xl:flex'>Work</a>
                <a href='#' className='text-white hover:text-red-600 transition-all duration-400 hidden xl:flex'>Philosophy</a>
                <div>
                    <a href="#" className='text-white border-2 px-2 py-3 hover:bg-white hover:text-black transition-all duration-400 hidden xl:flex'>Start A Project</a>
                </div>
                <div className='text-white flex gap-6'>
                    <div className='bg-white w-[0.5px] h-16 mb-2 mt-2 hidden xl:flex'></div>
                    <button><AiOutlineSearch size="23"/></button>
                    <button><HiMenuAlt2 size="23"/></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default page