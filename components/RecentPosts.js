import React from 'react'
import { sortBlogs } from '../utils';
import Link from 'next/link';
import ScreenThree from './BlogScreens/ScreenThree';


const RecentPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);

  return (
    <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
        <div className='w-full flex justify-between'>
        <h2 className='inline-block font-bold capitalize text-4xl text-[#402D29] '>Recent Posts</h2>
        <Link href="/categories/all" className='inline-block font-medium text-[#402D29] underline underline-offset-2 text-lg'>View All</Link>
        </div>

        <div className='grid grid-cols-3 grid-rows-3 gap-16 mt-16'>
            {
                sortedBlogs.slice(5, 11).map((blog, index) => {
                    return <article className='col-span-1 row-span-1 relative'>
                        <ScreenThree blog={blog} />
                        Blog Layout 3
                    </article>
                })
            }
        </div>
        

    </section>
  )
}

export default RecentPosts;
