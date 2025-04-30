import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ScrollUp from '../ScrollUp/ScrollUp'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
export default function Home() {
  return (
    <>
    <NavBar/>
      <Header />
      <h2 className='text-center text-3xl font-bold'>top sales!</h2>
      <div className='examples mt-20'>
        <div className='flex justify-around'>
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-14">
            <img className="w-full transition-all hover:scale-110" src="./images/rolex1.jpg" alt="Time-Zone"/>
              <div>
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
            <img className="w-full transition-all hover:scale-110" src="./images/casio.webp" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              </div>
              <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 mb-14">
            <img className="w-full transition-all hover:scale-110" src="./images/swatch.jpg" alt="Time-Zone"/>
              <div>
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
            <img className="w-full transition-all hover:scale-110" src="./images/citizen.jpeg" alt="Time-Zone"/>
              <div>
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
          </div>
          </div>
        </div>
        <div className='relative mt-25'>
        <div className='absolute w-[85px] h-[85px] top-[40%] left-[45%] border border-amber-50 rounded-full cursor-pointer'><FaPlay className='text-4xl ml-6 mt-5.5 text-white'/></div>
          <img src="/images/sectin_bg1.png.webp" alt="" />
          <div className='bg-[#ff2020] absolute w-[30%] bottom-0 '>
          <a href="" className='flex justify-around items-center cursor-pointer p-15'>
            <span className='capitalize text-2xl text-white font-bold'>next video</span>
            <FaArrowRightLong className='text-white text-2xl'/>
            </a>
          </div>
        </div>
        <Footer/>
        <ScrollUp />
      </>
      )
}
