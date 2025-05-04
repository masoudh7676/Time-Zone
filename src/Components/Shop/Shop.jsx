import React, { useContext, useState } from 'react'
import { Slider } from '../ui/slider'
import { Button } from '../ui/button'
import NavBar from '../NavBar/NavBar'
import AllProductsContext from '../../Context/Products'

const min = 0;
const max = 1000;
export default function Shop() {
  const contextData = useContext(AllProductsContext)
  const [values, setValues] = useState([min, max])          
  const [filteredItems, setFilteredItems] = useState(contextData.items) //creating filter price

  const handleFilter = () => {            //price filter function
    const [minPrice, maxPrice] = values
    const filtered = contextData.items.filter(item => item.price >= minPrice && item.price <= maxPrice)
    setFilteredItems(filtered)
  }

  return (
    <>
      <NavBar />
      <div className='relative top-24'>
        <img src="/images/about_hero.png.webp" alt="" className=' w-full h-full' />
        <div className='absolute top-2/5 text-center text-7xl font-black w-full'>
          <h4 className='capitalize'>watch shop</h4>
        </div>
      </div>
      <div className='flex content-center'>
      <aside className='mt-30 w-[30%] p-10 flex flex-col items-center'>
      <div className='sticky top-35 w-full'>            
      <div className='w-full'>
      <div className='flex items-center'>
      <h5 className='text-3xl'>Price: </h5>
      <p className='mx-2 text-2xl'> ${values[0]} - ${values[1]}</p>
      </div>
      <Slider
        onValueChange={setValues}
        value={values}
        min={min}
        max={max}
        step={1}
        className={' my-8'}
      />
      <div className='flex flex-col'>
      <p className='text-xl my-4'>Current Value: ${values[1] - values[0]}</p>

      <Button variant="outline" className={'text-[18px]'} onClick={handleFilter}>Filter</Button>
      </div>
      </div>
      </div> 
      </aside>
      <div className='parent w-[52%]  mt-50 grid grid-cols-3 bg-gray-100 border border-gray-200'>
      {
        filteredItems.map(data => (
          <div className=' group border p-2 border-gray-200 cursor-pointer' key={data.id}>
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
      </div>
    </>
  )
}
