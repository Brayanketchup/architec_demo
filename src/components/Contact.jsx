import React from 'react'

export const Contact = () => {
  return (
    <section className='newComponent'>
      

      <div className='flex flex-row gap-5 justify justify-around'>
        <div className='flex flex-col justify-center gap-5 min-w-1/2'>
          <h2 className='componentHeader'>Contact Us</h2>
          <form action="none" className='flex flex-col gap-4 w-full items-center'>
            <input type="text" name="name" placeholder='Name' id="name" className='h-15 w-full p-5 bg-gray-100' />
            <input type="text" name="phone" placeholder='Phone Number' id="phone" className='h-15 w-full p-5 bg-gray-100' />
            <input type="email" name="email" placeholder='Email' id="email" className='h-15 w-full p-5 bg-gray-100' />
            <textarea name="message" id="message" placeholder='Message' cols="30" rows="10" className=' h-35 w-full p-5 bg-gray-100 resize-none' />
            
            <button type="submit" className='text-white bg-black/80 px-6 py-5 text-md w-3/4'>Send Message</button>
          </form>

        </div>

        <div className='md:flex justify-center hidden'>
          <img src="./contact.jpg" className='object-contain' alt="" />
        </div>
      </div>
      

    </section>
  )
}
