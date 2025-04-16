import React from 'react'
import { useState, useEffect } from 'react'


export const Navbar = () => {


  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const toggleMenu = () => { setHamburgerIsOpen(!hamburgerIsOpen); }


  //function to close the menu in case of screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 1024) {
        setHamburgerIsOpen(false); // Set isOpen to false if desktop
        window.removeEventListener('resize', checkScreenSize); // Remove event listener
      }
    };
    // if isOpen add the event listener
    if (hamburgerIsOpen) {
      window.addEventListener('resize', checkScreenSize);
    }

    // Initially check if desktop
    checkScreenSize();

    // remove the event listener when isOpen is false
    return () => {
      if (hamburgerIsOpen) {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, [hamburgerIsOpen]); // use effect will run when isOpen change



  return (
    <header className='w-full fixed z-50 bg-white'>
      {/* deskotp version */}


      <nav className='md:flex hidden w-full justify-around items-center text-sm px-10 py-5 '>
        <div >
          <h1>LOGO</h1>
        </div>

        <ul className='flex flex-row gap-5 font-lightn'>
          <li><a href="/">MAIN</a></li>
          <li><a href="/">GALLERY</a></li>
          <li><a href="/">PROJECTS</a></li>
          <li><a href="/">CERTIFICATIONS</a></li>
          <li><a href="/">CONTACTS</a></li>
        </ul>
      </nav>

      {/* mobile version */}
      <nav className=' md:hidden flex w-full items-center text-sm py-2'>
        <div className='flex flex-row justify-between w-full pr-10 ' >
          <h1>LOGO</h1>

          {/* HAMBURGER */}
          <button onClick={toggleMenu} className='flex flex-col gap-y-1 z-50 '>
            <div className={`content-none rounded-b-full bg-black h-[2px] w-[7px]  duration-800 transition-transform ${hamburgerIsOpen ? 'rotate-45 translate-y-[2.5px] translate-x-[1.5px]' : ''} `} />
            <div className={`content-none rounded-b-full bg-black h-[2px] w-[16px] duration-800 transition-transform  ${hamburgerIsOpen ? '-rotate-45' : ''} `} />
            <div className={`content-none rounded-b-full bg-black h-[2px] w-[7px]  duration-800 transition-transform self-end ${hamburgerIsOpen ? 'rotate-45 -translate-y-[3px] -translate-x-[1px] ' : ''} `} />
          </button>
        </div>

        <div className={`absolute top-0 transition-transform flex-col justify-items-end font-light bg-gray-500/80 h-[100vh] w-[100vw] ease-in-out duration-500 ${hamburgerIsOpen ? 'translate-x-0' : 'translate-x-full'} `}>
          
          <ul className={`flex flex-col gap-y-5 justify-center text-end h-full w-fit bg-white pr-10 pl-5 text-black text-2xl font-light`}> 
            <li><a href="/">MAIN</a></li>
            <li><a href="/">GALLERY</a></li>
            <li><a href="/">PROJECTS</a></li>
            <li><a href="/">CERTIFICATIONS</a></li>
            <li><a href="/">CONTACTS</a></li>
          </ul>
        </div>

      </nav>

    </header>
  )
}
