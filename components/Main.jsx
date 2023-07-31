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
                        Hi, I'm <span className="text-white drop-shadow-md">Daya</span>
                    </h1>
                    <h1 className="py-2 text-[#402D29] drop-shadow-md">
                        A Website and Mobile Developer 
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    Welcome to my portfolio website! I'm an accomplished website and mobile developer, 
                    dedicated to crafting outstanding digital experiences that leave a lasting impact. 
                    With a keen focus on responsive design, I specialize in developing dynamic websites and 
                    mobile applications using cutting-edge frameworks, including NextJS, ReactJS, and Flutter.

                    To stay at the forefront of industry trends, I'm continually expanding my skill set. 
                    Currently, I'm exploring the realm of SEO content writing, allowing me to optimize digital content
                     for maximum visibility and engagement. Additionally, I'm honing my expertise in content management 
                     systems like WordPress and Wix, 
                    empowering me to deliver user-friendly and feature-rich platforms.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail color='#68333c' />
                        </div>
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub color='#68333c'/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaInstagram color='#68333c' />
                        </div>
                        <div className="rounded-full shadow-lg shadow-white p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <RiContactsFill color='#68333c'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main