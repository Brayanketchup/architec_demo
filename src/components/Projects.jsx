import React from 'react'
import { ProjectCard } from '../microcomponents'

export const Projects = () => {
    return (
        <section className='newComponent'>
            <h1 className='componentHeader'>Our Projects</h1>
            <ul className='flex flex-col w-full gap-5'>
                <li className='flex md:flex-row flex-col gap-5 w-'>

                    <ProjectCard projectLink={'/'} projectImage={'./project2.jpg'} />
                    <ProjectCard projectLink={'/'} projectImage={'./project3.jpg'} />
                </li>
                <li className='flex md:flex-row flex-col gap-5'>

                    <ProjectCard projectLink={'/'} projectImage={'./project1.jpg'} />

                    <ProjectCard projectLink={'/'} projectImage={'./project4.jpg'} />
                    <ProjectCard projectLink={'/'} projectImage={'./project5.jpg'} />
                </li>

            </ul>
            <div className='flex justify-end py-2'>
                <a href="/projects" className='text-white bg-black/80 px-6 py-5 text-md ' >ALL PROJECTS →</a>
            </div>
        </section>
    )
}
