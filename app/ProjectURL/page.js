'use client'

import { AiFillHeart } from 'react-icons/ai'

export default function ProjectFlutter() {
    return <article className='w-full h-full py-10 px-10'>
            <h2 className="py-4 text-[#402D29]">Flutter Project</h2>

            <div className='grid lg:grid-cols-5 gap-8'>

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-white rounded-xl p-4  group hover:bg-[#c78787]'>
                    <div className='lg:p-4 h-full '>
                        <video className='h-[800px] w-[450px] md:w-full sm:w-full' autoPlay muted controls >
                            <source src={"/assets/projects/addvid.mp4"} type="video/mp4"/>

                        </video>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4 hover:bg-slate-100'>
                    
                    <div className='p-4'>
                        <div className='flex flex-col py-2'>
                            <h2>My Flutter Project</h2>
                            <h3>Mobile App for Android</h3>
                            <label className='uppercase text-sm py-2 flex'> Made with Flutter <AiFillHeart color='red' /></label>
                        </div>
                        
                        <div className='flex flex-col py-2'>
                            <h2>Description</h2>
                            <h3>Intro:</h3>
                            <p>Dolor sit amet, consectetur adipiscing elit. Nullam convallis, justo id vestibulum vulputate, 
                                ipsum nisi eleifend turpis, nec ultricies justo risus et dolor. Donec lacinia sem eu felis tincidunt, 
                                sit amet fringilla libero aliquet. Cras nec semper purus. Sed eget est ut mauris tincidunt mollis. 
                                Nunc ultricies, erat at molestie fringilla, justo turpis tincidunt mi, nec auctor mauris mauris non ligula.</p>
                                <p className='p-2'></p>
                            <h3>Benefits for consumers:</h3>
                            <p>Dolor sit amet, consectetur adipiscing elit. Nullam convallis, justo id vestibulum vulputate, 
                                ipsum nisi eleifend turpis, nec ultricies justo risus et dolor. Donec lacinia sem eu felis tincidunt, 
                                sit amet fringilla libero aliquet. Cras nec semper purus. Sed eget est ut mauris tincidunt mollis. 
                                Nunc ultricies, erat at molestie fringilla, 
                                justo turpis tincidunt mi, nec auctor mauris mauris non ligula.</p>
                            <p className='p-2'></p>
                           
                        </div>
                       
                    </div>
                    

                </div>

            </div>
        </article>
    
}

