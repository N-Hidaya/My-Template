import React from 'react'
import { sortBlogs } from '../utils';
import ScreenOne from './BlogScreens/ScreenOne';
import ScreenTwo from './BlogScreens/ScreenTwo';

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);

  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
        <h2 className='w-full inline-block font-bold capitalize text-4xl text-[#402D29] '>Featured Posts</h2>

        <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-16'>
            <article className='col-span-1 row-span-2 relative'>
                <ScreenOne blog={sortedBlogs[1]} />
            </article>
            <article className='col-span-1 row-span-1 relative'>
                <ScreenTwo blog={sortedBlogs[2]} />
            </article>
            <article className='col-span-1 row-span-1 relative'>
                <ScreenTwo blog={sortedBlogs[0]} />
            </article>
        </div>

    </section>
  )
}

export default FeaturedPosts
