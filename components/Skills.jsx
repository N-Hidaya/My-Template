import Image from "next/image";
import React from "react";

const Skills = () => {
    return (
        <div id='skills' className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-white drop-shadow-lg">Skills</p>
                <h2 className="py-4 text-[#402D29]">What I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                            <div className="m-auto">
                                <Image src={'/assets/skills/html5.png'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center ">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 pt-3 justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/css.jpeg'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/es6.jpeg'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Javascript ES6</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/typescript.png'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Typescript</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/reactjs.png'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/flutter.png'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Flutter</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4  justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/github.png'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={'/assets/skills/Dart.png'} width='64' height='64' alt="/" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Dart</h3>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills