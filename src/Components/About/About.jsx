import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function About() {
  return (
    <>
      <NavBar />
            <div className='relative top-24'>
        <img src="/images/about_hero.png.webp" alt="" className=' w-full h-full dark:mask-y-from-5%' />
        <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
          <h4 className='capitalize'>About Us</h4>
        </div>
      </div>
      <div className='mt-70 text-center flex'>
      <div className=''>
        <h3 className="capitalize text-2xl relative before:content-[''] before:absolute before:w-[7%] before:left-[0] before:rounded-2xl before:bg-[#eb566c] before:h-1 before:top-3">our mission</h3>
      </div>
      <div>
        
      </div>
      </div>
    </>
  )
}
