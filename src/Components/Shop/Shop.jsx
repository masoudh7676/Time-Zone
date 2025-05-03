import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import AllProductsContext from '../../Context/Products'
export default function Shop() {
  const contextData = useContext(AllProductsContext)
  return (
    <>
      <NavBar />
      <div className='relative top-24'>
        <img src="/images/about_hero.png.webp" alt="" className=' w-full h-full' />
        <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
          <h4 className='capitalize'>watch shop</h4>
        </div>
      </div>
      
      <div className='parent w-[52%]  mt-50 mx-auto grid grid-cols-3 bg-gray-100 border border-gray-200'>
      {
        contextData.items.map(data => (
          <div className=' group border p-2 border-gray-200'>
          <div className=' bg-white shadow-2xl rounded-4xl p-3 mb-8'>
            <img src= {data.src} className='object-cover' alt="" />
            <button className='text-center hidden  group-hover:block w-full rounded-b-xl cursor-pointer text-white p-1 bg-[#ff203c]'>add to cart</button>
          </div>
          <div className='text-center'>
            <h4>Brand: {data.title}</h4>
            <p>{data.description}</p>
            <span>Price: {data.price}$</span>
          </div>
        </div>
        ))
      }




      </div>
    </>
  )
}
