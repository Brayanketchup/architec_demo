import React from 'react'
import { ProjectDetailCard, PageTittle } from '../microcomponents/'
import { ProjectsData } from '../constants/'

export const Projects = () => {
  return (
    <main className='newComponent min-h-[100vh]'>
      <PageTittle
      name={'Our Projects'}
      />

      <div className='flex flex-col gap-5'>

        {ProjectsData.length > 0 ? (ProjectsData.map((project, index) => (
          <ProjectDetailCard
            key={index}
            imageLink={project.image}
            title={project.title}
            description={project.description}
            ProjectID={project.id}
          />
        ))) : (
          <>
            <h1 className=' text-4xl w-full h-full flex flex-col justify-center items-center py-10'>Theres no projects at the momment please visit us later</h1>
          </>
        )}

      </div>

    </main>
  )
}
