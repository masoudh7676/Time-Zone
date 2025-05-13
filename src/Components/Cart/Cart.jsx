import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import AllProductsContext from '@/Context/Products'


// const contextData = useContext(AllProductsContext)
export default function Cart() {
  return (
    <>
      <NavBar/>
      <div className='mt-28 relative'>
      <img src="/images/about_hero.png.webp" alt=""/>
        <h4 className='absolute top-2/5 font-bold text-7xl left-2/5'>CheckOut</h4>
      </div>
      <div className='mt-25 flex flex-row-reverse w-[65%] mx-auto'>
        <div className='border-t-1 border-t-gray-300 border-b-1 border-b-gray-300 w-[60%] p-5 flex flex-row-reverse'>
          <div>
            <button className='font-bold'>X</button>
          </div>
        </div>
        <aside></aside>
      </div>
    </>
  )
}
