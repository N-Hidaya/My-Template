import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../elements/Tag';
import { slug } from 'github-slugger'


const ScreenOne = ({blog}) => {
  return (
    <div className='inline-block overflow-hidden rounded-xl'>
       <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
            bg-gradient-to-b from-transparent from-0% to-black rounded-xl z-10 '/>

            <Image src={blog.image.filePath.replace("../public", "")}
            placeholder='blur'
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className='w-full h-full object-center object-cover rounded-xl -z-10'
            />

            <div className='absolute bottom-0 p-10 z-20 w-full '>
                <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} className='px-6 text-sm py-2 !border'/>
                <Link href={blog.url} className='mt-6'>
                <h1 className='text-2xl font-bold capitalize text-white mt-4'>
                    <span className='bg-gradient-to-r from-rose-300 to-rose-300 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
                    {blog.title}

                    </span>
                </h1>
                </Link>
            </div>
    </div>
  )
}

export default ScreenOne
