import React from 'react'
import ytomp3 from '../public/assets/projects/portfolio3.png'
import ProjectItem from './ProjectItem'
import ko4ummah from '../public/assets/projects/portfolio4.png'
import Image from 'next/image'
import Link from 'next/link'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Created</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem title='Youtube to MP3 converter' bgimg={ytomp3} pjurl='/property' type='NextJS Project'/>
            <ProjectItem title='Hanguk4Ummah Web Version' bgimg={ko4ummah} pjurl='https://www.yt2music.com/' type='Gatsby Project'/>


        </div>
      </div>
    </div>
  )
}

export default Projects
