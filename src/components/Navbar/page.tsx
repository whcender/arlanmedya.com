"use client"
import React from 'react'
import Image from 'next/image'
import {AiOutlineSearch} from "react-icons/ai"
import {HiMenuAlt2} from "react-icons/hi"
import {AiOutlineClose} from 'react-icons/ai'

import SearchModal from '../searchModal/page'
import MenuModal from '../menuModal/page'



const page = () => {
  
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
    <div className='bg-black w-full'>
        <div className='flex items-center w-[95%] m-auto justify-between'>
            <div>
                <Image className='cursor-pointer' src="/logow.png" height={70} width={70} alt='logo'/>
            </div>
            <div className='w-[32%] flex items-center gap-4 font-semibold'>
                <a href='#' className='text-white hover:text-red-600 transition-all duration-400 hidden xl:flex'>Work</a>
                <a href='#' className='text-white hover:text-red-600 transition-all duration-400 hidden xl:flex'>Philosophy</a>
                <div>
                    <a href="#" className='text-white border-2 px-2 py-3 hover:bg-white hover:text-black transition-all duration-400 hidden xl:flex'>Start A Project</a>
                </div>
                <div className='text-white flex gap-6'>
                    <div className='bg-white w-[0.5px] h-20 mb-2 mt-2 hidden xl:flex'></div>
                    <button onClick={ toggle } ><AiOutlineSearch size="23"/></button>
                    <button onClick={toggleMenu}>{isMenuOpen ? <AiOutlineClose /> : <HiMenuAlt2 size="23"/> }</button>
                </div>
            </div>
            {
                isOpen && <SearchModal setIsOpen={setIsOpen}/>
            }
            {
                isMenuOpen && <MenuModal setIsMenuOpen={setIsMenuOpen}/>
            }

        </div>
    </div>
  )
}

export default page