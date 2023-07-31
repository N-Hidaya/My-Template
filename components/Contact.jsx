import Link from 'next/link';
import React, {useState} from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import { sendContactForm } from '../lib/api';


const initValues = { name: "", email: "", country: "", subject: "", message: ""}

const initState = { values: initValues}


const Contact = () => {

    const [state, setState] = useState(initState);

    const { values, isLoading, error } = state;


    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }))

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));

        try {
            await sendContactForm(values);
            setState(initState)
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message
            }));
        }
    }

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-white drop-shadow-lg'>
            Contact
        </p>
        
        <h2 className='py-4 text-[#402D29]'>Get in Touch</h2>
        
        <div className='grid lg:grid-cols-5 gap-8'>
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-white rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://i.pinimg.com/564x/5f/d5/0e/5fd50e6cfee48eba2c0220731b6e9f1c.jpg' alt='/' />
                    </div>
                    <div>
                        <h2 className='py-2 text-white drop-shadow-lg'>Daya</h2>
                        <p>Front-End Developer</p>
                        <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's discuss.</p>
    
                    </div>
               
                    <p className='uppercase pt-8 font-semibold'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail color='#68333c' />
                        </div>
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub color='#68333c' />
                        </div>
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram color='#68333c'/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <RiContactsFill color='#68333c'/>
                        </div>
                        
                        </div>
                    </div>
                </div>

            </div>

            <div className='col-span-3 w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4'>
            {error && (
            <p className='text-[#f75c51] text-xl p-4'>{error}</p> 
            )}
        
                <div className='p-4'>
                    <form action='/api/contactdata' method='post' >
                           
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2 '>Name <span className='text-[#ec504e]'>*</span></label>
                            <input type='text' id='name' name='name' value={values.name} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email <span className='text-[#ec504e]'>*</span></label>
                            <input type='email' id='email' name='email' value={values.email} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 required:border-red-500'/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Country</label>
                            <input type='text' id='country' name='country' value={values.country} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 '/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input type='text' id='subject' name='subject' value={values.subject} onChange={handleChange} className='border-2 rounded-lg p-3 flex border-gray-300 '/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea id='message' name='message' value={values.message} onChange={handleChange} className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                        </div>
                        <button isloading={isLoading} disabled={!values.name || !values.email} onClick={onSubmit} className='w-full p-4 text-gray-100 mt-4'>Send</button>
                    </form>
                </div>
            </div>

        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-white p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp size={30} className='text-white drop-shadow-2xl'/>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
