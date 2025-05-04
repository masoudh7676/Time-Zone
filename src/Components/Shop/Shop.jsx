import React, { useContext, useState } from 'react'
import { Slider } from "@/components/ui/slider"
import NavBar from '../NavBar/NavBar'
import AllProductsContext from '../../Context/Products'

const min = 0;
const max = 1500;
export default function Shop() {
  const contextData = useContext(AllProductsContext)
  const [values, setValues] = useState([min, max])
  console.log("values :", values)
  return (
    <>
      <NavBar />
      <div className='relative top-24'>
        <img src="/images/about_hero.png.webp" alt="" className=' w-full h-full' />
        <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
          <h4 className='capitalize'>watch shop</h4>
        </div>
      </div>
      <aside className='mt-30'>
      <div>
      <h5>Price:</h5>
      <span>${values[0]} - ${values[1]}</span>
      <small>Current Value: ${values[1] - values[0]}</small>
      <Slider
      onValueChange = {setValues}
      value={values}
      min={min}
      max={max}
       step={1}
       className={'w-[32%] bg-blue-500 mx-auto'}/>
       </div>
      </aside>
      <div className='parent w-[52%]  mt-50 mx-auto grid grid-cols-3 bg-gray-100 border border-gray-200'>
      {
        contextData.items.map(data => (
          <div className=' group border p-2 border-gray-200 cursor-pointer'>
          <div className=' bg-white shadow-2xl rounded-4xl p-3 mb-8'>
            <img src= {data.src} className='object-cover' alt="" />
            <button className='text-center hidden group-hover:block w-full rounded-b-xl cursor-pointer text-white p-1 hover:text-blue-200 bg-[#ff203c]'>add to cart</button>
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
