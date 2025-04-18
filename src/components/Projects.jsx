import React from 'react'
import { ProjectCard } from '../microcomponents'
import { ProjectsData } from '../constants'

export const Projects = () => {
    return (
        <section className='newComponent'>
            <h1 className='componentHeader'>Our Projects</h1>
            <ul className='flex flex-col w-full gap-5'>
                <li className='flex md:flex-row flex-col gap-5 w-'>

                    <ProjectCard projectLink={'/project/2'} projectImage={'/project2.jpg'} />
                    <ProjectCard projectLink={'/project/3'} projectImage={'/project3.jpg'} />
                </li>
                <li className='flex md:flex-row flex-col gap-5'>

                    <ProjectCard projectLink={'/project/1'} projectImage={'/project1.jpg'} />

                    <ProjectCard projectLink={'/project/4'} projectImage={'/project4.jpg'} />
                    <ProjectCard projectLink={'/project/5'} projectImage={'/project5.jpg'} />
                </li>

            </ul>
            <div className='flex justify-end py-2'>
                <a href="/projects" className='text-white bg-black/80 px-6 py-5 text-md ' >ALL PROJECTS →</a>
            </div>
        </section>
    )
}
