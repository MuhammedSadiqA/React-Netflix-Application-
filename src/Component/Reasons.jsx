import React from 'react'
import { LuMonitor } from "react-icons/lu";
import { MdDownloadForOffline } from "react-icons/md";
import { IoTelescopeSharp } from "react-icons/io5";
import { MdFaceRetouchingNatural } from "react-icons/md";



function Reasons() {

    const reasons = [
        {
            title: " Enjoy on your TV",
            para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
            icon: <LuMonitor />
        },
          {
            title: "Download your shows to watch offline",
            para: "Save your favourites easily and always have something to watch",
            icon:<MdDownloadForOffline />
        },
         {
            title: " Watch everywhere",
            para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            icon:<IoTelescopeSharp />

        },
          {
            title: "Create profiles for kids",
            para: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
            icon:<MdFaceRetouchingNatural />

        },
    ]

    return (
        <div>
            <div className=' h-screen'>
                <div className='font-bold text-2xl mt-6 md:mt-15'>
                    More Reasons to join
                </div>
                <div className='flex gap-5'>
                    {
                        reasons.map((reasons, index)=>(
                    <div key={index} className=' rounded-2xl md:w-[320px]   md:h-[300px] md:p-10 bg-gradient-to-b from-blue-950 to-gray-900 mt-3 ms-2 relative '>
                        <div className='bg- ms-2 text-[20px] font-bold'>
                            {reasons.title}
                        </div>
                        <div className='py-4 text-[16px] overflow-hidden text-justify text-gray-400'>
                            {reasons.para}
                        </div>
                        <div className='text-7xl right-2 bottom-3 absolute me-2 opacity-70'>
                            {reasons.icon}
                        </div>
                    </div>
                    ))
                 }
                </div>
            </div>
        </div>
    )
}

export default Reasons