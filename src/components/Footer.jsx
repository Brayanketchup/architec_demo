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
          <img src="/location-icon.png" alt="location icon" className='object-contain h-5'/>
          <p>123 park street, New York</p>
        </div>

        <div className='flex flex-row gap-1'>
          <img src="/phone-icon.png" alt="phone icon" className='object-contain h-5'/>
          <p>(555) 555-5555</p>
        </div>

        <a href="mailto:example@mycorp.com" className='flex flex-row gap-1'>
          <img src="/mail-icon.png" alt="mail icon" className='object-contain h-5'/>
          <p>example@mycorp.com</p>
        </a>

      </div>
      <div className='flex flex-col gap-4'>
      <h6 className='font-extrabold'>Solcials</h6>
        <img src="/facebook-icon.png" alt="facebook icon" className='object-contain h-5'/>
        <img src="/x-icon.png" alt="x icon" className='object-contain h-5'/>
        <img src="/linkedin-icon.png" alt="linkedin icon" className='object-contain h-5'/>
        <img src="/pinteres-icon.png" alt="pinteres icon" className='object-contain h-5'/>
      </div>


    </footer>
  )
}
