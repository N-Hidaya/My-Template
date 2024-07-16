import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-40">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-white drop-shadow-lg">About</p>
                    <h2 className="py-4 text-[#402D29]">Who is YourCompany?</h2>
                    <p className="py-2 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. 
                    </p>
                    <p className="py-2 text-gray-600">
                    If you're into captivating reads, head over to the <Link href='/Blog' className="underline font-bold">Blog</Link> section. And tech enthusiasts, we've got your back too! Swing by the <Link href='/#services' className="underline font-bold">Services</Link> section.
                    So, whether you're after inspiration or tech solutions, this is your go-to spot. Stick around for the journey ahead! 🚀🌟 #DayasAdventures"
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 bg-white rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
                    <img className="rounded-xl " src="https://i.pinimg.com/originals/44/69/bf/4469bfc00266eab9cb1e955c13cc0640.jpg" alt="programming girl" />
                </div>
            </div>
        </div>
    )
}

export default About