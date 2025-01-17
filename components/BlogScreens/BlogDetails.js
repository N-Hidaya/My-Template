import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import { slug } from 'github-slugger'


const BlogDetails = ({blog, slug: blogSlug}) => {
  return (
    <div className='px-10 bg-[#402D29] text-white py-2 flex items-center justify-around flex-wrap text-xl font-medium 
    mx-10 rounded-lg'>
        <time className='m-3'>
            {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <div>
            {blog.readingTime.text}
        </div>
        <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>
            #{blog.tags[0]}
        </Link>
    </div>
  )
}

export default BlogDetails
