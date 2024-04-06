"use client"
import React from 'react'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div className='col-span-8 font-in prose prose-lg max-w-max prose-blockquote:bg-[#e98976]/20 
    prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-[#e98976] '>
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
