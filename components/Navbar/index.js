'use client'
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaGithub, FaInstagram} from 'react-icons/fa';
import { RiContactsFill} from 'react-icons/ri';

const Navbar = () => {
    //console.log('AiOutlineMail', AiOutlineMail)
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setShadow(true)
            }else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={shadow ? "fixed w-full h-[100px] shadow-xl z-[100] bg-[#352d2c]" : "fixed w-full h-[100px] z-[100] bg-[#402D29]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
                <Link href='/'>
                <Image src={"/assets/logo.png"} alt="logo" width='140' height='50' className="w-auto h-auto"/>

                </Link>
                <div className="inset-y-0 right-5">
                    <ul className="hidden md:flex right-0"> 
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">About</li>
                        </Link>
                        <Link href='/blogpage'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Blog</li>
                        </Link>
                        <Link href='/#services'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Services</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className="ml-10 text-sm uppercase hover:border-b text-white">Contact</li>
                        </Link>
                        
                    </ul>
                    <div onClick={handleNav} className="md:hidden inset-y-0 right-5">
                        <AiOutlineMenu size={25} color="white"/>
                    </div>
                </div>

                <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ''} >
                    <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#ecf0f3] p-10 ease-in duration-500" 
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Link href='/'>
                                    <Image src='/assets/logo.png' width='87' height='35' alt="logo"/>

                                </Link>
                                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-300 my-4">
                                <p className="w-[85%] md:w-[90%] py-4">Let's produce our ideas together</p>
                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href='/'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                                </Link>
                                <Link href='/#about'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
                                </Link>
                                <Link href='/Blog'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">Blog</li>
                                </Link>
                                <Link href='/#services'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">Services</li>
                                </Link>
                                <Link href='/#skills'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
                                </Link>
                                <Link href='/#projects'>
                                    <li  onClick={() => setNav(false)} className="py-4 text-sm">Projects</li>
                                </Link>
                                <Link href='/#contact'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">Contact</li>
                                </Link>
                        
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-white">Let's Connect</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <Link href='/#contact' className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <AiOutlineMail color='#68333c' />
                                </Link>
                                <Link href='https://github.com/N-Hidaya' className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaGithub color='#68333c' />
                                </Link>
                                <Link href='https://www.instagram.com/ai__daya/' className="rounded-full shadow-lg shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <FaInstagram color='#68333c'/>
                                </Link>
                                <Link href='/#contact' className="rounded-full shadow-lg shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                                    <RiContactsFill color='#68333c'/>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;