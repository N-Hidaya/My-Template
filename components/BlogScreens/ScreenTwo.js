import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'


const ScreenTwo = ({blog}) => {
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-black'>
        <Link href={blog.url} className='col-span-4 h-full rounded-xl overflow-hidden'>
            <Image 
            src={blog.image.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className='aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300'
            />
        </Link>

        <div className='col-span-8 w-full '>
                <span className='uppercase text-rose-400 font-semibold text-sm'>{blog.tags[0]}</span>
                <Link href={blog.url} className='inline-block my-1'>
                <h1 className='text-lg font-semibold capitalize '>
                    <span className='bg-gradient-to-r from-rose-300 to-rose-300 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                    {blog.title}
                    </span>
                </h1>
                </Link>

                <span className='capitalize text-black/50 font-semibold text-base'>
                    {format(new Date(blog.publishedAt), 'MMM dd, yyyy')}
                </span>
        </div>
      
    </div>
  )
}

export default ScreenTwo
