import React from 'react'
import bison from '../assets/bison.webp'
import delhicrime from '../assets/delhicrime.webp'
import dude from '../assets/dude.webp'
import idlikadai from '../assets/idlikadai.webp'
import jolly from '../assets/jolly.webp'
import kurukshethra from '../assets/kurukshethra.webp'
import narasimha from '../assets/narasimha.webp'
import og from '../assets/og.webp'




function Trends() {
  return (
    <>
       <div className='pt-10'>
            <div className='font-bold text-2xl'>
            Trending Now
            </div>
            <div className='pt-5 '>
                <img className='rounded-2xl relative' src={bison}  alt="movie#1" />
                <div className='text-9xl font-bold absolute'>
                      1
                </div>
            </div>
       </div>
    </>
  )
}

export default Trends