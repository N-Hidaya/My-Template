import { AiFillHeart } from 'react-icons/ai'

export default function Hanguk4Ummah() {
    return (
        <div className='w-full h-full py-10 px-10'>
            <h2 className="py-4 text-[#402D29]">Hanguk4Ummah</h2>

            <div className='grid lg:grid-cols-5 gap-8'>

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-white rounded-xl p-4  group hover:bg-[#c78787]'>
                    <div className='lg:p-4 h-full '>
                        <video className='h-[800px] w-[450px] md:w-full sm:w-full' autoPlay muted controls >
                            <source src={"/assets/services/hanguk4ummah.mp4"} type="video/mp4"/>

                        </video>
                    </div>
                </div>

                <div className='col-span-3 w-full h-auto shadow-xl shadow-white rounded-xl lg:p-4 hover:bg-slate-100'>
                    
                    <div className='p-4'>
                        <div className='flex flex-col py-2'>
                            <h2>Hanguk4Ummah</h2>
                            <h3>Mobile App for Android</h3>
                            <label className='uppercase text-sm py-2 flex'> Made with Flutter <AiFillHeart color='red' /></label>
                        </div>
                        
                        <div className='flex flex-col py-2'>
                            <h2>Description</h2>
                            <h3>Intro:</h3>
                            <p>Introducing our groundbreaking mobile application, designed to cater to the growing needs of the 
                                Muslim community in Korea! As the number of Muslims rises in Korea, we understand the challenges 
                                they face in finding Halal restaurants, groceries, 
                                and mosques, as well as accessing Islamic and Korean study guides.</p>
                                <p className='p-2'></p>
                            <h3>Benefits for consumers:</h3>
                            <p>This innovative app is the ultimate solution for Muslims living in Korea, providing a comprehensive 
                                listing of Halal restaurants, mosques, and Muslim shops. No more struggling to find suitable places 
                                for daily needs or spiritual practices:
                                 our app has it all conveniently curated in one place.</p>
                            <p className='p-2'></p>
                           
                        </div>
                       
                    </div>
                    

                </div>

            </div>
        </div>
    )
}

