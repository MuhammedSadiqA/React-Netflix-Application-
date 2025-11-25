import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import bgimg from "../assets/banner.jpg"
import { HiMiniLanguage } from "react-icons/hi2";

function Nav() {
    return (
        <>
            <div className='netflix px-40 h-screen py-5 bg-black text-white  z-10 '>
                <div className='absolute   inset-0 bg-cover bg-center opacity-25' style={{ backgroundImage: `url(${bgimg})` }}>

                </div>
                <div className='relative'>
                    <div className=' flex justify-between items-center w-full'>
                        <div className='text-5xl  font-bold text-red-600 '>
                            Netflix
                        </div>
                        <div className='flex mr-2'>
                            <div className='me-3 font-medium px-5 hover:border-white py-1 border border-gray-500 rounded flex' >
                                <HiMiniLanguage />
                                <select name="" id="">
                                    <option  className='text-black text' value="English">English</option>
                                    <option className='text-black' value="Hindi">हिन्दी</option>
                                    <option className='text-black' value="Arabic">العربية</option>
                                </select>
                            </div>
                            <button className='bg-red-600 px-5 rounded font-medium'>Sign In</button>
                        </div>
                    </div>
                    {/* center portion div */}
                    <div className='py-20 mt-25 flex items-center  flex-col'>
                        <div className='text-6xl mt-4   w-140 text-center '>
                            Unlimited movies, shows, and more
                        </div>
                        <div className='text-[22px] mt-3 '>
                            Starts at ₹149. Cancel at any time.
                        </div>
                        <p className='text-[20px] mt-7'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='mt-4 flex content-center items-center '>
                            <input className=' border pr-48 p-4 border-gray-400 placeholder-gray-300 rounded' type="text" placeholder='Email address' />
                            <button className='bg-red-600 mx-2  px-8 py-3 items-center flex font-bold text-2xl rounded' >Get Started <MdOutlineKeyboardArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav