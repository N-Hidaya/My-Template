import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Main = () => {
    return (
        <div className="w-full h-full text-center pt-40 pb-20">
            <div className="max-w-[1240px] w-full h-full mx-auto  flex justify-center items-center">
                <div >
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                    Let's produce our ideas together
                    </p>
                    <h1 className="py-4 text-[#402D29]">
                        Hi, I'm <span className="text-white drop-shadow-md">Your Name</span>
                    </h1>
                    <h1 className="py-2 text-[#402D29] drop-shadow-md">
                        A Website and Mobile Developer 
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                            <Link href='/#contact' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail color='#68333c' />
                            </Link>
                            <Link href='https://github.com' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub color='#68333c' />
                            </Link>
                            <Link href='https://www.instagram.com' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram color='#68333c'/>
                            </Link>
                            <Link href='/#contact' className="rounded-full shadow-lg shadow-gray-400 bg-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <RiContactsFill color='#68333c'/>
                            </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main