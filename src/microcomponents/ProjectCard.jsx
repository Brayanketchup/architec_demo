import React from 'react'

export const ProjectCard = ({ projectLink, projectImage }) => {
  return (
    <div className='inline-block relative'>
      <img src={projectImage} className='object-contain' alt="project 1 image" />

      <div className='bg-gray-950/50 h-full w-full absolute hover:opacity-100 opacity-0 transition-opacity duration-300 top-0 left-0 text-white p-5'>
        <h1 className='text-4xl font-extrabold'>Sample<br />Project</h1>
        <div>
          <a href={projectLink} className='flex flex-row items-center'>VIEW MORE →
          </a>
        </div>
      </div>
    </div>
  )
}
