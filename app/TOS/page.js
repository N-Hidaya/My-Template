'use client'

import React from 'react'
import Link from 'next/link'
import {TbPointFilled} from 'react-icons/tb'

export default function TOS() {
    return <article className='flex flex-col h-full  mx-auto px-4  items-center rounded-md md:w-10/12'>
            <h2 className='pt-4 mt-20 text-[#402D29]'>Terms of Service</h2>
              <p>Effective Date: 04/08/2023</p>
                <div className='items-center h-full justify-center'>
                    <h3 className='py-4 underline'>Paste your own TOS here</h3>
                   
                    <p><Link href='#contact' className='underline'>Contact</Link>  or Email at <span className='underline text-blue'>youremail@gmail.com</span></p>




                </div>
        </article>
    
}

