'use client'
import Link from 'next/link';
import React, {useState} from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import {HiOutlineChevronDoubleUp} from "react-icons/hi"
import { sendContactForm } from '../lib/api';
import { Alert, Typography } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';



const initValues = { name: "", email: "", country: "", subject: "", message: ""}

const initState = { values: initValues}


const Contact = () => {

    const [state, setState] = useState(initState);
    const [success, setSuccess] = useState(false)

    const { values, isLoading, error } = state;
    const router = useRouter()


    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }))

    function IconSuccess() {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        );
    }

    const onSubmit = async () => {
        setSuccess(true)
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        router.push('/')


        try {
            await sendContactForm(values);
            setState(initState)
            

        } catch (error) {
            setSuccess(false)
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
                
            }));
        }
    }

    

  return (
    <div id='contact' className='w-full '>
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
                        <p className='font-bold drop-shadow-lg shadow-white'>Front-End Developer</p>
                        <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's discuss.</p>
    
                    </div>
               
                    <p className='uppercase pt-8 font-semibold'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                            <Link href='/#contact' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail color='#68333c' />
                            </Link>
                            <Link href='https://github.com/N-Hidaya' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub color='#68333c' />
                            </Link>
                            <Link href='https://www.instagram.com/ai__daya/' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram color='#68333c'/>
                            </Link>
                            <Link href='/#contact' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <RiContactsFill color='#68333c'/>
                            </Link>
                        
                        </div>
                    </div>
                </div>

            </div>

            <div className='col-span-3 w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4'>
            {error && (
            <p className='text-[#f75c51] text-xl p-4'>{error}</p> 
            )}
                <div className='p-4'>
                    <form>
                           
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
                    <Alert
                open={success}
            
                className="max-w-screen-md bg-[#586d4f] p-4"
                icon={<IconSuccess />}
                onClose={() => setSuccess(false)}
              >
                <Typography variant="h5" >Success</Typography>
                <Typography className="mt-2 font-normal p-2">
                    Your message has been sent successfully :) Thank you for your enquiries!
                </Typography>
                </Alert>
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
