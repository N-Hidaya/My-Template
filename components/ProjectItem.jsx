import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ProjectItem = ({title, bgimg, pjurl, type}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-white rounded-xl p-4 group hover:bg-gradient-to-r from-[#68333c] to-[#eba9a9]'>
                <Image className='rounded-xl group-hover:opacity-10' src={bgimg} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-white text-center'>{type}</p>
                    <Link href={pjurl}>
                        <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
  )
}

export default ProjectItem
