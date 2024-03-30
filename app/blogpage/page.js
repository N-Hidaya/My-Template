'use client'

import {allBlogs} from "contentlayer/generated";
import BlogDesign from '../../components/BlogDesign';
import FeaturedPosts from '../../components/FeaturedPosts';
import RecentPosts from '../../components/RecentPosts';



export default function Blog() {
    return <main className='flex flex-col items-center justify-center pb-40'>
          <BlogDesign blogs={allBlogs}/>
          <FeaturedPosts blogs={allBlogs} />
          <RecentPosts blogs={allBlogs} />
        </main>
       
    
}