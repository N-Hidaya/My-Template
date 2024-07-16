import React from 'react'
import ProjectItem from './ProjectItem'
import portfolio from '../public/assets/projects/portfolio3.png'
import h4u from '../public/assets/projects/h4u.jpg'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-white drop-shadow-lg'>Projects</p>
        <h2 className='py-4 text-[#402D29]'>What I've Created</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Some Website' bgimg={portfolio} pjurl='https://appwrite.io/docs/products/databases/queries' type='Some Project'/>
            <ProjectItem title='Mobile App' bgimg={h4u} pjurl='/ProjectURL' type='Flutter Project'/>


        </div>
      </div>
    </div>
  )
}

export default Projects
