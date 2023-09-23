import React from 'react'
import Image from 'next/image'
import './style.css'


const Page: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        animation: 'slideIn 0.5s ease',
        animationFillMode: 'forwards', 
    };
  return (
    <div style={containerStyle} className='flex w-[60%] md:w-[70%] lg:w-[91%] h-full absolute z-10 lg:z-50 top-0 left-0'>
        <div className='bg-white pl-[42px] z-50 pt-[14px] w-[40%] hidden lg:flex flex-col'>
            <Image className='hidden lg:flex ' src="/logob.png" height={70} width={70} alt="logo" />
            <div className='flex-col gap-20 justify-center h-[80%] hidden lg:flex'>
                <div>
                    <h5 className='opacity-70'>Telefon</h5>
                    <p className='font-semibold text-lg'>+90 555 555 55 55</p>
                </div>
                <div>
                    <h5 className='opacity-70'>E-posta</h5>
                    <p className='font-semibold text-lg'>arlanmedya@gmail.com</p>
                </div>
                <div>
                    <h5 className='opacity-70'>Adres</h5>
                    <p className='font-semibold text-lg'>İstanbul Kadıköy Boğa Heykeli Karşısı/ Türkiye</p>
                </div>
            </div>
        </div>
        <div className='bg-black w-full h-full relative z-10 font-bebas tracking-widest'>
            <div className='flex flex-col text-white w-[80%] m-auto justify-center h-full gap-10 font-bold text-xl lg:text-3xl'>
            <a className='hover:text-red-800 ' href="#">Hakkımızda</a>
            <a className='hover:text-red-800' href="#">İletişim</a>
            <a className='hover:text-red-800' href="#">Paketler</a>
            <a className='hover:text-red-800' href="#">Sosyal Medya</a>
            <a className='hover:text-red-800' href="#">Start Project</a>
            <a className='hover:text-red-800' href="#">Teklif Alın</a>
            </div>
        <div className='absolute bottom-2 w-full text-center text-white text-sm font-bold'>
            <span>arlanmedya</span>
        </div>
        </div>
    </div>
  )
}

export default Page