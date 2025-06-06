import React from 'react'
import { Link } from 'react-router'
export default function Header() {
  return (
    <div className=' bg-[#f0f0f2] dark:bg-gray-800 w-full mt-27'>
    <div className='flex items-center content-between justify-center'>
        <div className='text-description  w-[50%] mt-10 md:mt-0'>
            <h3 className='capitalize text-3xl large-text xl:text-[90px] sm:text-6xl font-bold'>
                select your new perfect style
            </h3>
            <p className='text-[15px] md:text-[19px] leading-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, sapiente. Aut vero aperiam voluptatibus culpa laudantium assumenda dolor!</p>
           <Link to="/shop">
            <button className='bg-[#4a4a4b] mb-10 sm:mb-0 p-[7px] md:p-4 md:px-[10px] lg:p-[12px] lg:px-[20px] xl:p-[17px] px-[35px] rounded-2xl cursor-pointer hover:bg-[#ff203c] text-white mt-7 capitalize font-bold'>Shop Now</button>
           </Link>
        </div>
        <div className='hidden sm:block w-[20%]'>
               <img src={`${import.meta.env.BASE_URL}images/watch.png.webp`} alt="" className='w-full h-full dark:mask-y-from-75%' />
            </div>
            </div>
    </div>
  )
}
