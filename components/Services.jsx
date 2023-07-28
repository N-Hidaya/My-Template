import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
//import h4uvid from '../public/assets/services/hanguk4ummah.mp4'

const Services = () => {
  return (
    <div id='services' className='w-full'>
         <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Products and Services</p>
            <h2 className='py-4'>Featured Product</h2>


            <div className='grid lg:grid-cols-5 gap-8'>

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#e4a4a4]'>
                    <div className='lg:p-4 h-full '>
                        <video className='h-[800px] w-[450px] md:w-full sm:w-full' autoPlay muted controls >
                            <source src={"/assets/services/hanguk4ummah.mp4"} type="video/mp4"/>

                        </video>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <div className='flex flex-col py-2'>
                            <h2>Hanguk4Ummah</h2>
                            <h3>Mobile App for Android</h3>
                            <label className='uppercase text-sm py-2 flex'> Made with Flutter <AiFillHeart color='red' /></label>
                        </div>
                        <div className='flex flex-col py-2'>
                            <h2>Price</h2>
                            <h3>USD $10,000</h3>
                            <label className='uppercase text-sm py-2'>This app is selling for a lucky customer!</label>
                        </div>
                    </div>
                </div>

            </div>
            
                
          
           

        
     
         </div>
      
    </div>
  )
}

export default Services
