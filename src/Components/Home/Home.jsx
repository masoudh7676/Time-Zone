import React from 'react'
import Header from '../Header/Header'
import './Home.css'
export default function Home() {
  return (
    <>
      <Header />
      <div className='examples flex justify-center align-middle'>
        <div className='grid grid-cols-2 gap-54'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="./images/rolex1.jpg" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="./images/casio.webp" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="./images/swatch.jpg" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="./images/citizen.jpeg" alt="Time-Zone"/>
              <div className="padding">
                <div className="font-bold text-xl mb-2"><a href="" className='capitalize hover:text-blue-500'>click see other watch's from this brand</a></div>
                <p className="text-gray-700 text-base margin__top">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </div>
          </div>
        </div>
        <div className='popular'>

        </div>
      </>
      )
}
