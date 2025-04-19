import React from 'react'
import { PageTittle } from '../microcomponents'

export const NotFound = () => {
  return (
    <main className='newComponent min-h-[100vh]'>
        <PageTittle
            name="404 Page Not Found"
        />
        <div className='flex flex-col justify-center gap-2 items-center w-full h-screen'>
            <h1 className='text-4xl'>404</h1>
            <p className='text-2xl'>Page Not Found</p>
            <a href="/" className='text-white bg-black/80 px-6 py-5 text-md'>Go Back Home</a>
        </div>



    </main>
  )
}
