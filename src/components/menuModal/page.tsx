import React from 'react'
import Image from 'next/image'

interface SearchModalProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const Page: React.FC<SearchModalProps> = ({ setIsMenuOpen }) => {
  return (
    <div className='flex w-[87%] h-full absolute z-40 top-0 left-0'>
        <div className='bg-white pl-[42px] pt-[14px] w-[40%] hidden lg:flex flex-col'>
            <Image src="/logob.png" height={70} width={70} alt="logo" />
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
        <div className='bg-black w-full h-full'>
            <div className='flex flex-col text-white w-[80%] m-auto justify-center h-full gap-10 font-bold text-3xl'>
            <a className='hover:text-red-800' href="#">Hakkımızda</a>
            <a className='hover:text-red-800' href="#">İletişim</a>
            <a className='hover:text-red-800' href="#">Paketler</a>
            <a className='hover:text-red-800' href="#">Sosyal Medya</a>
            <a className='hover:text-red-800' href="#">Start Project</a>
            <a className='hover:text-red-800' href="#">Teklif Alın</a>
            </div>
        </div>
    </div>
  )
}

export default Page