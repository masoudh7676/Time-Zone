import React from 'react'
import Header from '../Header/Header'
import './Home.css'
export default function Home() {
  return (
    <>
      <Header />
      <div className='examples flex justify-center align-middle'>
        <div className='grid grid-cols-2 gap-54'>
          <div>
            <img src="./images/rolex1.jpg" className='w-md mx-9 object-contain' alt="" />
            <p className='text-center capitalize  margin__top'> <a href="">see other from rolex watch's</a></p>
          </div>
          <div>
            <img src="./images/citizen.jpeg" className='w-md object-contain' alt="" />
            <p className='text-center capitalize margin__top'> <a href="">see other from citizen watch's</a></p>
          </div>
          <div>
            <img src="./images/casio.webp" className='w-md object-contain' alt="" />
            <p className='text-center capitalize margin__top'> <a href="">see other from casio watch's</a></p>
          </div>
          <div>
            <img src="./images/swatch.jpg" className='w-md object-contain' alt="" />
            <p className='text-center capitalize margin__top'> <a href="">see other from swatch watch's</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
