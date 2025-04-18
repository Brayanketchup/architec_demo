import React from 'react'

import { StatementComponent } from './';

export const About = () => {
    return (
        <section className='newComponent'>

            <div className='w-full flex md:flex-row flex-col gap-5 lg:gap-x-10 justify-center '>


                <div className='flex flex-row gap-5 justify-center items-center'>
                    <div className='flex flex-col gap-5'>
                        <img src="./about1.jpg" className='object-contain w-[270px]' alt="Image of a building" />
                        <img src="./about3.jpg" className='object-contain w-[270px]' alt="Image of a building" />
                    </div>
                    <img src="./about2.jpg" className='object-contain w-1/2' alt="Image of a building" />

                </div>

                <div className=''>
                    <div className='md:max-w-[450px]'>

                        <h1 className='componentHeader'>About</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
                            iste accusantium, eaque error dolor cupiditate atque consectetur officiis,
                            odit, doloremque ut deleniti nam fugiat nesciunt assumenda? Ea iusto neque
                            beatae fugit quod laborum molestiae recusandae atque alias voluptatum.
                            Molestias itaque voluptatibus magnam rem delectus illum quaerat.</p>
                    </div>

                    <a href="/about" className='flex flex-row gap-2 pt-10'>
                        <span>Read More</span>
                        <img src="./arrow.png" className='w-[20px] object-contain' alt="Arrow image" />
                    </a>

                </div>

            </div>

            <StatementComponent/>

        </section>
    )
}
