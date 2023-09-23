"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import './style.css'


const page = () => {
    return (
        <div className='bg-[#000000fb] w-[80%] m-auto flex flex-col gap-5 lg:flex-row  items-center justify-around'>
            <div >
                <div className='flex flex-col pt-28 text-sm font-popin lg:text-3xl font-semibold gap-1 lg:gap-3 text-white justify-center'>
                <h2 className='tracking-wide font-bold text-4xl font-popin mb-6 text-center lg:text-left'>ARLAN MEDYA</h2>
                    <div className='flex gap-2 flex-col text-center lg:text-left lg:flex-row '>
                        <h3 className='gradient-text'>Merhaba Arlan Medya Olarak,</h3>
                        <TypeAnimation
                            sequence={[
                                "Reklam Yönetimi",
                                1000,
                                "Yazılım Gelştirme",
                                1000,
                                "Medya Yönetimi",
                                1000,
                                "Reklam Cekimi",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <h3 className='text-center lg:text-left'>Hizmetlerini Bir Arada Sunuyoruz.</h3>
                    <p className='font-light text-xs lg:text-base w-[100%] lg:w-[70%] text-center lg:text-left text-[#7F7F7F]'>Markalaştırma, Web & Uygulama Tasarımı ve Geliştirme alanlarında uzmanlaşmış yaratıcı bir ajansız. Ayrıca reklam yönetimi, reklam çekimi ve medya yönetimi de sunuyoruz.</p>
                </div>
            </div>
            <div className='text-white font-bold w-[100%] text-center lg:text-left lg:w-[50%]'>
                <a className='bg-white text-black drop-shadow-xl px-6 rounded-2xl py-3 text-base lg:text-2xl font-semibold tracking-[.25em]' href="#">PROJEYE BAŞLA</a>
            </div>
        </div>

    )
}

export default page