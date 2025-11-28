import React, { act, useState } from 'react'
import { FiPlus } from "react-icons/fi";


function Questions() {

    const [activeIndex,setActiveIndex]=useState(null)
    const btnClick=(index)=>{
        setActiveIndex(activeIndex==index?null:index)
    }

    const content = [
        {
            title: "What is Netflix?",
            para: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!"
        },
        {
            title: "How much does Netflix cost?",
            para: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."
        },
        {
            title: "Where can I watch?",
            para: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
        },
        {
            title: "How do I cancel?",
            para: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            title: "What can I watch on Netflix?",
            para: "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            title: "Is Netflix good for kids?",
            para: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
        },


    ]

    return (
        <div className='pb-20 '>
            <div className='h-full'>
                <h1 className='text-2xl  mb-3 font-bold'>Frequently Asked Questions</h1>
            </div>
            {
                content.map((content, index) => (
                    <div key={index}>
                        <div onClick={()=>btnClick(index)} className=' bg-zinc-800 p-5  flex items-center justify-between'>
                            <div className='font-semibold text-2xl'>
                                {content.title}
                            </div>
                            <FiPlus className='text-3xl' />
                        </div>
                        <div className={`mt-0.5 text-xl my-3 overflow-hidden ${activeIndex==index? "max-h-[500px] p-5 bg-zinc-800 ":"max-h-0" }`}>
                            {content.para}
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Questions