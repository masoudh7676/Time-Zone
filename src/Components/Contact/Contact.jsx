import React from 'react'
import NavBar from '../NavBar/NavBar'
export default function Contact() {
  return (
    <>
    <NavBar/>
    <div className='relative top-24'>
      <img src="./images/about_hero.png.webp" alt="" className=' w-full h-full dark:mask-y-from-5%'/>
      <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
        <h4>contact</h4>
      </div>
    </div>
    <h5 className='mt-50 text-center text-3xl font-bold capitalize'>get in touch</h5>
    <div className='mt-20 flex justify-center items-center min-h-[calc(100vh-6rem)] overflow-hidden'>
      <form className='flex flex-col w-[60%] md:w-fit'>
        <textarea rows={12} className='border border-gray-300 outline-0 p-2' placeholder='Enter message'></textarea>
        <div className='mt-12 mb-10 flex flex-col gap-5 md:block'>
        <input type="text" className='md:w-73 border border-gray-300 mr-5 p-2 rounded-md outline-0 w-full' placeholder='Enter your name'/>
        <input type="email" className='md:w-73 border border-gray-300 p-2 rounded-md outline-0 w-full' placeholder='Email'/>
        </div>
        <input type="text" className='md:w-152 border border-gray-300 rounded-md p-2 outline-0 -mt-5' placeholder='Subject'/>
        <button type='submit' className='bg-red-500 cursor-pointer text-white mx-auto hover:text-black w-45 rounded-md p-2 mt-10 mb-15'>SEND</button>
      </form>
    </div>
    </>
  )
}
