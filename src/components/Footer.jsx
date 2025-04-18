import React from 'react'

export const Footer = () => {
  return (
    <footer className='flex flex-row gap-5 justify-around bg-black/80 p-10 text-white'>
      <div>
        <h1>LOGO</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className='flex flex-col gap-1'>
        <h6 className='font-extrabold'>Information</h6>
        <a href="/">Main</a>
        <a href="/">Gallery</a>
        <a href="/">Projects</a>
        <a href="/">Certifications</a>
        <a href="/">Contacts</a>
      </div>

      <div className='flex flex-col gap-4'>
        <h6 className='font-extrabold'>Contact</h6>
        <div className='flex flex-row gap-1'>
          <img src="./location-icon.png" alt="location icon" className='object-contain h-5'/>
          <p>loaction</p>
        </div>

        <div className='flex flex-row gap-1'>
          <img src="./phone-icon.png" alt="phone icon" className='object-contain h-5'/>
          <p>number</p>
        </div>

        <div className='flex flex-row gap-1'>
          <img src="./mail-icon.png" alt="mail icon" className='object-contain h-5'/>
          <p>email</p>
        </div>

      </div>


    </footer>
  )
}
