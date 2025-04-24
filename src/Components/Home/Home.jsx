import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
export default function Home() {
  return (
    <>
    <NavBar/>
      <Header />
      <h2 className='text-center text-3xl font-bold'>top sales!</h2>
      <div className='examples flex justify-center align-middle'>
        <div className='grid  grid-cols-1 gap-54 sm:grid-cols-2 sm:gap-12 md:gap-52'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full transition-all hover:scale-110" src="./images/rolex1.jpg" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full transition-all hover:scale-110" src="./images/casio.webp" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full transition-all hover:scale-110" src="./images/swatch.jpg" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full transition-all hover:scale-110" src="./images/citizen.jpeg" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click to see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
          </div>
        </div>
        <Footer/>
      </>
      )
}
