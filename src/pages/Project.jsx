import React from 'react'
import { useParams } from 'react-router-dom'
import { PageTittle } from '../microcomponents/'
import { ProjectsData } from '../constants/'

export const Project = () => {
    const { id } = useParams()
    

    const project = ProjectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return (
          <main className='min-h-[100vh] flex flex-col gap-2 items-center justify-center'>
            <h1 className='text-3xl font-bold'>Project not found :c</h1>
            <a href='/' className='text-white bg-black/80 px-6 py-5 text-md'>Go Back To Home</a>
          </main>
        )
      }
    
    return (
        <main className='newComponent min-h-[100vh]'>
            <PageTittle
                name={project.title}
            />
            <div className='flex flex-col gap-5 p-10'>
                <img src={project.imageInside} alt="" />
                <div className='flex flex-col lg:flex-row gap-5'>
                    <img src={project.image} alt="" className='object-contain lg:w-2/5'/>
                    <p>{project.fullDescription}</p>
                </div>
                <img src={project.imagePlans} alt="" />
            </div>
        </main>
    )
}
