import React from 'react'

export const Statement = () => {
    return (
        <article className=' pt-15'>
            <h1 className='componentHeader'>Main Focus/Mission Statement</h1>
            <ul className='flex md:flex-row flex-col gap-5'>
                <li className='flex flex-row gap-5 content-center items-center'>
                    <span className='text-9xl text-gray-200 font-extrabold'>1</span>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Repudiandae explicabo doloremque molestiae quas accusamus</p>
                </li>
                <li className='flex flex-row gap-5 content-center items-center'>
                    <span className='text-9xl text-gray-200 font-extrabold'>2</span>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Repudiandae explicabo doloremque molestiae quas accusamus</p>
                </li>
            </ul>
        </article>
    )
}
