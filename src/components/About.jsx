import React from 'react'

export const About = () => {
    return (
        <section className='w-full h[100vh] px-10 py-14'>

            <div className='w-full flex flex-row gap-5 justify-center '>


                <div className='flex flex-row gap-5 justify-center items-center'>
                    <div className='flex flex-col gap-5'>
                        <img src="./about1.jpg" className='object-contain w-[270px]' alt="" />
                        <img src="./about3.jpg" className='object-contain w-[270px]' alt="" />
                    </div>
                    <img src="./about2.jpg" className='object-contain w-[270px]' alt="" />

                </div>

                <div className=' max-w-[20vw]'>
                    <div>

                        <h1 className='text-5xl text-gray-400 font-extralight mb-4'>About</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos
                            iste accusantium, eaque error dolor cupiditate atque consectetur officiis,
                            odit, doloremque ut deleniti nam fugiat nesciunt assumenda? Ea iusto neque
                            beatae fugit quod laborum molestiae recusandae atque alias voluptatum.
                            Molestias itaque voluptatibus magnam rem delectus illum quaerat.</p>
                    </div>
                    
                        <a href="/about" className='flex flex-row gap-2 pt-10'><span>Read More</span>
                        <img src="./arrow.png" className='w-[20px] object-contain' alt="" />
                        </a>
                    
                </div>

            </div>


        </section>
    )
}
