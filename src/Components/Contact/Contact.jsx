import React from 'react'
import NavBar from '../NavBar/NavBar'
export default function Contact() {
  return (
    <>
    <NavBar/>
    <div className='relative top-24 -z-50'>
      <img src="/images/about_hero.png.webp" alt="" className=' w-full h-full'/>
      <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
        <h4>contact</h4>
      </div>
    </div>
    
    <div className='mt-50 flex justify-center'>
    <h5 className=' text-center'>get in touch</h5>
      <form className='flex flex-col'>
        <textarea name="" id="" rows={15} cols={20} className='w-72 border border-gray-300' placeholder='Enter message'></textarea>
        <input type="text" className='w-50 border border-gray-300' placeholder='Enter your name'/>
        <input type="email" className='w-50 border border-gray-300' placeholder='Email'/>
        <input type="text" className='w-100 border border-gray-300' placeholder='Subject'/>
        <button type='submit' className='bg-red-500 cursor-pointer text-white hover:text-black w-25 rounded-md p-2 mt-6'>SEND</button>
      </form>
    </div>
    </>
  )
}
