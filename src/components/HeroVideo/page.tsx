import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex items-center flex-col justify-center relative">
      <video
        autoPlay
        loop
        muted
        className=" w-[80%] lg:w-[40%] object-cover mt-12 absolute z-10 top-7"
        poster="./poster.png" // Bir önizleme görüntüsü ekleyebilirsiniz
      >
        <source src="./optimizatedar.mp4" type="video/mp4" />
      </video>
      <div className='py-28 lg:py-52 w-full bg-[#F9F9F9] absolute top-40 -z-1 flex justify-center'>
      </div>
    </div>
  );
};

export default Page;