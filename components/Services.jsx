import Link from 'next/link'
import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import ProjectItem from './ProjectItem'
import donateImg from '../public/assets/blog/donationcover.jpeg'

//import h4uvid from '../public/assets/services/hanguk4ummah.mp4'

const Services = () => {
  return (
    <div id='services' className='w-full'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-white drop-shadow-lg'>Services</p>

            <h2 className='pt-10 pb-4 text-[#402D29]'>My Gigs</h2>
            <div className='flex flex-col xl:flex-row justify-evenly '>
                

                <Link className='flex flex-col md:flex-row md:max-w-xl  w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4 bg-gradient-to-r from-[#68333c] to-[#eba9a9] hover:scale-105 ease-in duration-300' href='https://www.fiverr.com/s2/b76a4f5ba2'>
                
                    <img className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/gigs/mobile1.png" alt="Flutter Mobile Applications Development" />

                    <div className='p-2'>
                    <h5 className='mb-4 text-xl font-medium text-gray-200 p-2'>Develop Flutter Mobile Apps</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-xl font-normal text-gray-200 p-2">Starting at </span>
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">270</span>
                    </div>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue' />
                            <span className="text-base font-normal leading-tight text-gray-200">App screens creation</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">14 Days Delivery</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Unlimited Revisions</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Functional App</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Multi-platforms (Android Mobile, Web, Tablet friendly)</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Ads Integration</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Source Code</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Support</span>
                        </li>
                    </ul>
                    </div>
                </Link>

     

            </div>
            
     
         </div>
      
    </div>
  )
}

export default Services
