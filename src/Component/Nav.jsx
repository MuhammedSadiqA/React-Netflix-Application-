import React from 'react'

function Nav() {
    return (
        <>
            <div className='px-30 py-5 bg-black text-white '>
                <div className='flex justify-between items-center'>
                    <div className='text-3xl font-bold text-red-600 mt-2'>
                        Content
                    </div>
                    <div className='flex mr-4'>
                        <div className='mr-2 font-medium pr-15 py-1 border border-gray-500' >
                            <select name="" id="">
                                <option className='text-black' value="English">English</option>
                                <option className='text-black' value="Hindi">हिन्दी</option>
                                <option className='text-black' value="Arabic">العربية</option>
                            </select>
                        </div>
                        <button className='bg-red-600 px-5 rounded font-medium'>Sing In</button>
                    </div>
                </div>
                {/* center portion div */}
                <div className='py-40 flex items-center flex-col'>
                    <div className='text-6xl font-bold w-130 '>
                        Unlimited movies, shows, and more
                    </div>
                    <div className='text-2xl mt-4 '>
                        Starts at ₹149. Cancel at any time.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav