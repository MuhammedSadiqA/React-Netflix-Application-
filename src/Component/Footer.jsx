    import React from 'react'
    import { HiMiniLanguage } from "react-icons/hi2";
    import { MdOutlineKeyboardArrowRight } from "react-icons/md";

    function Footer() {
        return (
            <div className='min-h-screen'>
                <div className='flex flex-col items-center gap-5 mt-10  '>
                    <div className=' text-center '>
                        Ready to watch? Enter your email to create or restart your membership.
                    </div>
                    <div className='flex '>
                        <input className='border border-gray-500 p-4 pr-90 mr-4' type="text" placeholder='Email Address' />
                        <button className='bg-red-600 h-12 px-6 py-7 rounded flex items-center gap-2'>
                            <span className='text-xl font-medium'>Get Started</span>
                            <MdOutlineKeyboardArrowRight className='text-3xl' />
                        </button>

                    </div>
                </div>
                {/* Footer Section */}
                <div className=' text-zinc-400 text-[16px]'>
                    <div className=' underline mt-15'>

                        <div className='mb-8'>
                            Questions? Call 000-800-919-1743
                        </div>
                        <div className='flex justify-between'>
                            <div className='w-[200px]'>
                                <li>FAQ</li>
                                <li>Investor Relations</li>
                                <li>Privacy</li>
                                <li> Speed Test</li>
                            </div>
                            <div className='w-[200px]'>
                                <li>Help Centre</li>
                                <li>Jobs</li>
                                <li>Cookie Preferences</li>
                                <li>Legal Notices</li>
                            </div>
                            <div className='w-[200px]'>
                                <li>Account</li>
                                <li>Ways to Watch</li>
                                <li>Corporate Information</li>
                                <li>Only on Netflix</li>
                            </div>
                            <div className='w-[200px]'>
                                <li>Media Centre</li>
                                <li>Terms of Use</li>
                                <li>Contact Us</li>
                            </div>
                        </div>
                    </div>
                    {/* Language Selection Bar */}
                    <div className='mt-10 w-fit  py-1 border hover:border-white border-gray-400 rounded font-medium px-2 '>
                        <select className='text-white ' name="" id="">
                            <option className='text-black ' value="English">English</option>
                            <option className='text-black' value="Hindi">हिन्दी</option>
                            <option className='text-black' value="Arabic">العربية</option>
                        </select>
                    </div>
                    <div className='mt-5'>
                        <div className='my-4 font-medium'>Netflix India </div>

                        <div className='text-[13px] mt-6 '> This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500 underline cursor-pointer'>Learn more.</span></div>
                    </div>
                </div>
            </div>
        )
    }

    export default Footer