import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import {AiOutlineSearch} from "react-icons/ai"
import './style.css'

interface SearchModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const Page: React.FC<SearchModalProps> = ({ setIsOpen }) => {
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'slideIn 0.5s ease',
    };

    return (
        <div style={containerStyle} className='opacity-[97%] z-50 overflow-hidden bg-black w-full h-full'>
            <div className='flex items-center justify-center gap-1 h-full'>
                <input className='text-center outline-none border-none bg-black text-white text-2xl' type="text" placeholder='Yazmaya başlayın..' />
                <button><AiOutlineSearch color="white" size="30"/></button>
            </div>
            <button onClick={()=>{setIsOpen(false)}} className='absolute top-10 right-10 text-white'><AiOutlineClose size="30"/></button>
        </div>
    );
};

export default Page;
