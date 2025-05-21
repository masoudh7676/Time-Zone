import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

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
      <div className='mt-70'>
        <div className="w-full flex justify-center">
          <h3 className="capitalize  relative text-2xl before:content-[''] before:absolute before:left-1/2 before:-translate-x-[240%] before:-z-10 before:w-[40%] before:rounded-2xl before:bg-[#eb566c] before:h-1 before:top-3">our mission</h3>
        </div>
        <div className='w-full flex items-center flex-col mt-10'>
          <p className='w-[50%] mb-6 text-base/10'>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
          <p className='w-[50%] text-base/8'>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
        </div>
        <div>
          <div className="w-full flex justify-center mt-20">
            <h3 className="capitalize  relative text-2xl before:content-[''] before:absolute before:left-1/2 before:-translate-x-[240%] before:-z-10 before:w-[40%] before:rounded-2xl before:bg-[#eb566c] before:h-1 before:top-3">our vision</h3>
          </div>
          <div className='w-full flex items-center flex-col mt-10'>
            <p className='w-[50%] mb-6 text-base/10'>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
            <p className='w-[50%] text-base/8'>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}