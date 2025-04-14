import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <div className=' bg-[#f0f0f2] header w-full'>
    <div className='flex items-center justify-center'>
        <div className='text-description  w-[50%]'>
            <h3 className='uppercase large-text'>
                select your new perfect style
            </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, sapiente. Aut vero aperiam voluptatibus culpa laudantium assumenda dolor!</p>
            <button className='bg-[#4a4a4b] p-[17px] px-[35px] rounded-2xl cursor-pointer hover:bg-[#ff203c] text-white mt-7'>Shop Now</button>
        </div>
        <div>
                <img src="/images/watch.png.webp" alt="Time-Zone" />
            </div>
            </div>
    </div>
  )
}
