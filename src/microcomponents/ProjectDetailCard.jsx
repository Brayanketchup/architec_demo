import React from 'react'

export const ProjectDetailCard = ({imageLink, title, description, ProjectID}) => {
    return (
        <div className='min-h-[450px] bg-white shadow-md rounded-md flex flex-col lg:flex-row gap-5 p-5'>
            <div className='lg:h-full max-h-[600px] overflow-hidden'>
                <img src={imageLink} alt="" className='lg:h-[inherit]' />
            </div>

            <div className='flex flex-col gap-5 w-fit '>
                <h3 className='font-light text-3xl text-gray-400'>{title}</h3>
                <p className='text-wrap '>{description}</p>
                <a href={`/project/${ProjectID}`} className='flex flex-row items-center bg-gray-100 w-fit px-6 py-1 '>VIEW MORE
                    <img src="/arrow.png" className=' border-gray-200 px-3 py-4 rounded-md w-[50px]' alt="arrow image" />
                </a>
            </div>
        </div>
    )
}
