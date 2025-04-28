import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Shop() {
  return (
    <>
      <NavBar/>
      <div className='relative top-24 -z-50'>
      <img src="/images/about_hero.png.webp" alt="" className=' w-full h-full'/>
      <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
        <h4 className='capitalize'>watch shop</h4>
      </div>
    </div>
    </>
  )
}
