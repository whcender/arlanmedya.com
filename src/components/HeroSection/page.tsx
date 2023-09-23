"use client"
import React from 'react'
import { TypeAnimation } from "react-type-animation";


const page = () => {
  return (
    <div className='flex items-center flex-col h-[100vh] bg-slate-950 text-3xl font-semibold gap-3 text-white justify-center'>
        <h3>Merhbaa biz ekip olarak,</h3>
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
            <h3>hizmetlerini bir arada yapıyoruz.</h3>
    </div>
  )
}

export default page