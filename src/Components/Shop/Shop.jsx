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
      <div className='parent mt-50 grid grid-cols-3'>
      {
        contextData.items.map(data => (
          <div className=' group mx-15'>
          <div className='w-80 shadow-2xl rounded-4xl p-2 mb-8'>
            <img src= {data.src} className='object-cover' alt="" />
            <button className='text-center hidden  group-hover:block w-full rounded-b-xl cursor-pointer text-white p-1 bg-[#ff203c]'>add to cart</button>
          </div>
          <div className='text-center'>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
            <span>{data.price}</span>
          </div>
        </div>
        ))
      }




      </div>
    </>
  )
}
