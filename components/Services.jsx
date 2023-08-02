import Link from 'next/link'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {BsPatchCheckFill} from 'react-icons/bs'
//import h4uvid from '../public/assets/services/hanguk4ummah.mp4'

const Services = () => {
  return (
    <div id='services' className='w-full'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-white drop-shadow-lg'>Products and Services</p>
            <h2 className='py-4 text-[#402D29]'>Featured Product</h2>


            <div className='grid lg:grid-cols-5 gap-8'>

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-white rounded-xl p-4  group hover:bg-[#c78787]'>
                    <div className='lg:p-4 h-full '>
                        <video className='h-[800px] w-[450px] md:w-full sm:w-full' autoPlay muted controls >
                            <source src={"/assets/services/hanguk4ummah.mp4"} type="video/mp4"/>

                        </video>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4 hover:bg-slate-100'>
                    <div className='p-4'>
                        <div className='flex flex-col py-2'>
                            <h2>Hanguk4Ummah</h2>
                            <h3>Mobile App for Android</h3>
                            <label className='uppercase text-sm py-2 flex'> Made with Flutter <AiFillHeart color='red' /></label>
                        </div>
                        <div className='flex flex-col py-2'>
                            <h2>Price</h2>
                            <h3>USD $10,000</h3>
                            <label className='uppercase text-sm py-2'>This app is selling for a lucky business client! Will you be my business client?</label>
                        </div>
                        <div className='flex flex-col py-2'>
                            <h2>Description</h2>
                            <h3>Intro:</h3>
                            <p>Introducing our groundbreaking mobile application, designed to cater to the growing needs of the 
                                Muslim community in Korea! As the number of Muslims rises in Korea, we understand the challenges 
                                they face in finding Halal restaurants, groceries, 
                                and mosques, as well as accessing Islamic and Korean study guides.</p>
                                <p className='p-2'></p>
                            <h3>Benefits for consumers:</h3>
                            <p>This innovative app is the ultimate solution for Muslims living in Korea, providing a comprehensive 
                                listing of Halal restaurants, mosques, and Muslim shops. No more struggling to find suitable places 
                                for daily needs or spiritual practices:
                                 our app has it all conveniently curated in one place.</p>
                            <p className='p-2'></p>
                            <h3>Monetization:</h3>
                            <p>But wait, there's more! By purchasing this app, you open up exciting opportunities for monetization 
                                through Google Admob. We don't just stop there: our support extends to help you 
                                effectively promote the app through social media and other marketing channels.
                                Invest in this application today, and witness the fruits of success as it caters to the needs of 
                                the growing Muslim community in Korea!</p>
                        </div>
                        <div className='flex flex-col py-2'>
                            <Link href='/#contact'><button className='text-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer w-full hover:scale-105 ease-in duration-300'>Enquire now to buy!</button></Link>
                        </div>
                    </div>
                </div>

            </div>

            <h2 className='py-4 text-[#402D29]'>Services</h2>
            <div className='flex flex-col xl:flex-row justify-evenly '>
                <Link className='flex flex-col md:flex-row md:max-w-xl w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4 bg-gradient-to-r from-[#68333c] to-[#eba9a9] hover:scale-105 ease-in duration-300' href='https://www.fiverr.com/s2/761ea4f0a8'>
                
                    <img className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/gigs/template2.jpeg" alt="" />

                    <div className='p-2'>
                    <h5 className='mb-4 text-xl font-medium text-gray-200 p-2'>Create Responsive website with Wix</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-xl font-normal text-gray-200 p-2">Starting at </span>
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">80</span>
                    </div>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue' />
                            <span className="text-base font-normal leading-tight text-gray-200">Website pages</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">5 Days Delivery</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Unlimited Revisions</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Functional website</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Responsive (Mobile, Web, Tablet friendly)</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Content Upload</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Website Redesign</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Support</span>
                        </li>
                    </ul>
                    </div>
                </Link>

                <Link className='flex flex-col md:flex-row md:max-w-xl  w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4 bg-gradient-to-r from-[#68333c] to-[#eba9a9] hover:scale-105 ease-in duration-300' href='https://www.fiverr.com/s2/761ea4f0a8'>
                
                    <img className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/assets/gigs/template2.jpeg" alt="" />

                    <div className='p-2'>
                    <h5 className='mb-4 text-xl font-medium text-gray-200 p-2'>Create Responsive website with Wix</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-xl font-normal text-gray-200 p-2">Starting at </span>
                        <span className="text-3xl font-semibold">$</span>
                        <span className="text-5xl font-extrabold tracking-tight">80</span>
                    </div>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue' />
                            <span className="text-base font-normal leading-tight text-gray-200">Website pages</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">5 Days Delivery</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Unlimited Revisions</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Functional website</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Responsive (Mobile, Web, Tablet friendly)</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Content Upload</span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsPatchCheckFill color='lightblue'  />
                            <span className="text-base font-normal leading-tight text-gray-200">Website Redesign</span>
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
