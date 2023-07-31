import React from "react";

const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-40">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-white drop-shadow-lg">About</p>
                    <h2 className="py-4 text-[#402D29]">Who is Daya?</h2>
                    <p className="py-2 text-gray-600">Daya is a Developer Girl who also loves to discover new things to create</p>
                    <p className="py-2 text-gray-600">
                        Daya used to be an IT hardware engineer, serving customers in the office environment to help troubleshoot PC issues.
                        While working full time, Daya also studies part time Degree in Computer Science. 
                        She got headhunted and managed to work as a software engineer in a company, 
                        however 2 years later she got laid off. It was difficult to get a job after that. 
                    </p>
                    <p className="py-2 text-gray-600">
                        Fortunately, she has graduated from studies recently and started to look for other options.
                        Daya has started working with freelance companies such as Upwork and Fiverr. 
                        She also does her own projects that involves things that she loves to offer.

                    </p>
                    <p className="py-2 text-gray-600">Check out some of my latest projects.</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-white rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
                    <img className="rounded-xl " src="https://i.pinimg.com/originals/44/69/bf/4469bfc00266eab9cb1e955c13cc0640.jpg" alt="programming girl" />
                </div>
            </div>
        </div>
    )
}

export default About