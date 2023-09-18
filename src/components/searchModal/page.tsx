import React from 'react';

interface SearchModalProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const Page: React.FC<SearchModalProps> = ({ setIsOpen }) => {
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <div style={containerStyle} className='bg-black w-full h-full'>
            <div className='flex items-center justify-center h-full'>
                <input className='text-center outline-none border-none bg-black text-white text-2xl' type="text" placeholder='Yazmaya başlayın..' />
            </div>
            <button onClick={()=>{setIsOpen(false)}} className='absolute top-5 right-5 text-white'>X</button>
        </div>
    );
};

export default Page;
