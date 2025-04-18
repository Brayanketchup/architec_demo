import React from 'react'
import { useState } from 'react';

export const Hero = () => {

  const [currentImage, setCurrentImage] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const changeImage = () => {
    if (transitioning) 
      return; 

    setTransitioning(true);
    setTimeout(() => {
      setCurrentImage(prev => (prev === 1 ? 2 : 1));
      setTransitioning(false);
    }, 500); 
  };



  return (
    <section id='Hero' className='newComponent'>

      <div className='flex md:flex-row flex-col gap-y-4 items-center w-full justify-around'>

        <div className='flex flex-col px-3'>
          <>
            <h1 className='text-6xl text-gray-400 font-light'>Welcome to</h1>
            <h1 className='text-7xl font-bold'>My website</h1>
          </>

          <>
            <div className='flex-row gap-5 mt-5 self-center hidden md:flex'>
              <a onClick={changeImage}><img src="./arrow.png" className=' border-[1px] border-gray-200 hover:bg-gray-50 px-3 py-4 rounded-md w-[50px] rotate-180' alt="" /></a>
              <a onClick={changeImage}><img src="./arrow.png" className=' border-[1px] border-gray-200 hover:bg-gray-50 px-3 py-4 rounded-md w-[50px]' alt="" /></a>
            </div>
          </>
        </div>

        <>
          <div className='md:w-[700px] w-[80vw] h-[50vh] relative'>
            {/* <img id='HeroImage1' src="./hero1.jpeg" alt="First Building Image" className={` absolute rounded-md max-h-[448px] transition-opacity duration-300 ${transitioning ? ' opacity-0' : ' opacity-full'}`} /> */}
            {/* <img id='HeroImage2' src="./hero2.jpeg" alt="First Building Image" className={` absolute rounded-md max-h-[448px] transition-opacity duration-300 ${transitioning ? ' opacity-0' : ' opacity-full'}`} /> */}
            <img src="./hero1.jpeg" alt="Hero 1" className={`absolute rounded-md max-h-[448px] transition-opacity duration-500 w-full h-full object-cover ${currentImage === 1 ? 'opacity-100' : 'opacity-0'}`}  />
            <img src="./hero2.jpeg"  alt="Hero 2" className={`absolute rounded-md max-h-[448px] transition-opacity duration-500 w-full h-full object-cover ${currentImage === 2 ? 'opacity-100' : 'opacity-0'}`}/>
          </div>
          <div className='flex md:hidden flex-row gap-5 mt-5 self-center'>
            <a onClick={changeImage}><img src="./arrow.png" className=' border-[1px] border-gray-200 hover:bg-gray-50 px-3 py-4 rounded-md w-[50px] rotate-180' alt="" /></a>
            <a onClick={changeImage}><img src="./arrow.png" className=' border-[1px] border-gray-200 hover:bg-gray-50 px-3 py-4 rounded-md w-[50px]' alt="" /></a>
          </div>
        </>
      </div>
    </section>
  )
}
