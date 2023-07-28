import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#5651e5]">Daya</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">
                        A Website and Mobile Developer 
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a website and mobile developer specializing in building and designing exceptional digital experiences.
                        Currently, I'm focused on building responsive websites and mobile applications using frameworks such as 
                        NextJS, ReactJS and Flutter. For the backend, I can create simple APIs using NodeJS and I've deployed, used my own
                        APIs to implement with the websites and mobile applications. I'm also learning while creating SEO content writing as well as CMS such as Wordpress and Wix.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <RiContactsFill />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main