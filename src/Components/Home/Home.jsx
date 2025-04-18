import React from 'react'
import Header from '../Header/Header'
import './Home.css'
export default function Home() {
  return (
    <>
    <Header/>   
    <div className=''>
      <div className='examples grid grid-cols-2 gap-54'>
        <div>
          <img src="./images/rolex1.jpg" className='w-sm' alt="" />
        </div>
        <div>
          <img src="./images/citizen.jpeg" className='w-sm' alt="" />
        </div>
        <div>
          <img src="./images/casio.webp" className='w-sm' alt="" />
        </div>
        <div>
          <img src="./images/swatch.jpg" className='w-sm' alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
