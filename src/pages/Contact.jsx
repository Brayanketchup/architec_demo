import React from 'react'
import { PageTittle } from '../microcomponents'
import { ContactComponent } from '../components/'

export const Contact = () => {
  return (
    <main className='newComponent min-h-[100vh]'>
      <PageTittle
        name="Contact Information"
      />
      <div className='flex flex-col md:flex-row justify-center items-center  gap-5 p-10'>

        <div className='flex flex-col justify-center items-center gap-5 min-w-1/2 text-xl'>

          <div className='flex flex-col justify-center items-center gap-5 min-w-1/2 text-xl'>


            <h2 className='text-2xl font-bold'>BAM Inc.</h2>
            <p>123 park street, New York</p>
            <p>(555) 555-5555</p>
            <a href="mailto:example@mycorp.com" className='flex flex-row gap-1'>

              <p>example@mycorp.com</p>
            </a>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 w-full h-full text-xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10365.780573357686!2d-74.2383050613059!3d40.679753354815716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ad5b6a0b3391%3A0x76c486324be28e94!2sKean%20University!5e1!3m2!1sen!2sus!4v1745092855145!5m2!1sen!2sus"
              width="600"
              height="450"
              className='w-full h-full'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div className='flex flex-row gap-5 justify-around'>
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
        </div>

      </div>


    </main>
  )
}
