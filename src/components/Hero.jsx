import React from 'react'
import { useState } from 'react';

export const Hero = () => {

  const [transitioning, setTransitioning] = useState(false);
  const changeImage = () => {
    const image = document.getElementById('HeroImage');

    if (image.src.match("hero1")) {
      setTransitioning(true);
      setTimeout(() => {
        image.src = "./hero2.jpeg";
        setTransitioning(false);
      }, 600);
    } else {

      setTransitioning(true);
      setTimeout(() => {
        image.src = "./hero1.jpeg";
        setTransitioning(false);
      }, 600);
    }

  }


  return (
    <section id='Hero' className='newComponent'>

      <div className='flex md:flex-row flex-col gap-y-4 items-center w-full justify-around'>

        <div className='flex flex-col px-3'>
          <>
            <span className='text-6xl text-gray-400 font-light'>Welcome to</span>
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
          <div className='md:w-[700px] w-[80vw] relative'>
            <img id='HeroImage' src="./hero1.jpeg" alt="First Building Image" className={`object-fill rounded-md transition-opacity duration-400 ${transitioning ? ' opacity-0' : ' opacity-full'}`} />
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
