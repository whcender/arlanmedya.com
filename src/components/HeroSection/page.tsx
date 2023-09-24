"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './style.css';
import { Button } from '@nextui-org/button';
import { AiOutlineRight } from 'react-icons/ai';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='w-[80%] m-auto flex flex-col gap-5 lg:flex-row items-center justify-around'>
      <div>
        <div className='flex flex-col pt-28 text-sm font-popin lg:text-3xl font-semibold gap-3 lg:gap-3 text-white justify-center'>
          <h2 className='tracking-wider text-4xl lg:text-7xl mb-6 text-center font-black font-bebas lg:text-left'>ARLAN MEDYA</h2>
          <div className='flex gap-2 flex-col text-center lg:text-left lg:flex-row '>
            <h3 className='gradient-text'>Merhaba Arlan Medya Olarak,</h3>
            <TypeAnimation
              sequence={[
                'Reklam Yönetimi',
                1000,
                'Yazılım Gelştirme',
                1000,
                'Medya Yönetimi',
                1000,
                'Reklam Çekimi',
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </div>
          <h3 className='text-center lg:text-left'>Hizmetlerini Bir Arada Sunuyoruz.</h3>
          <p className='font-light text-xs lg:text-base w-[100%] lg:w-[70%] text-center lg:text-left text-[#7F7F7F]'>Markalaştırma, Web & Uygulama Tasarımı ve Geliştirme alanlarında uzmanlaşmış yaratıcı bir ajansız. Ayrıca reklam yönetimi, reklam çekimi ve medya yönetimi de sunuyoruz.</p>
        </div>
      </div>
      <div className='text-white font-bold w-[0%] text-center lg:text-left lg:w-[30%] lg:mt-10'>
        <Link href='#'
          className='font-popin bg-[#FF15F0] border  w-[100%] shadow-[#FF15F0] shadow-md py-2 lg:py-5 justify-center rounded-3xl font-medium lg:font-semibold text-sm lg:text-[20px] tracking-[5px] px-1 uppercase button-icon flex items-center' // Add button-icon class
        >
          Projeye Başla <AiOutlineRight size='20' className='icon' />
        </Link>
      </div>
    </div>
  );
};

export default Page;
