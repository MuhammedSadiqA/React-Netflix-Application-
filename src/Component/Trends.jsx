import React from 'react'
import bison from '../assets/bison.webp'
import delhicrime from '../assets/delhicrime.webp'
import dude from '../assets/dude.webp'
import idlikadai from '../assets/idlikadai.webp'
import jolly from '../assets/jolly.webp'
// import kurukshethra from '../assets/kurukshethra.webp'
import narasimha from '../assets/narasimha.webp'
import og from '../assets/og.webp'
import stranger from '../assets/strangerthings.webp'




function Trends() {

  const movies =[
    {id:1,movie:bison},{id:2,movie:dude},{id:3,movie:idlikadai},{id:4,movie:jolly},{id:5,movie:og},{id:6,movie:narasimha}, {id:7,movie:delhicrime},{id:8,movie:stranger}
  ]
  return (
    <>
      <div className='pt-10'>
        <div className='font-bold text-2xl'>
          Trending Now
        </div>
        <div className='flex gap-10  border-white overflow-scroll hide-scrollbar  '>
          {
            movies.map((movie, index) => (
              <div key={index} className='pt-5 relative '>
                <img  className='rounded-2xl min-w-[180px] ' src={movie.movie} alt="movie#1" />
                <div className="text-9xl font-bold absolute bottom-0 text-black text-stroke-white left-[-28px] ">
                  {index+1}
                </div>
              </div>
            ))}

        </div>
      </div>
    </>
  )
}

export default Trends