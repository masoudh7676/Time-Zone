  import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'


// const contextData = useContext(AllProductsContext)
export default function Cart() {
  return (
    <>
      <NavBar/>
      <div className='mt-28 relative'>
        <img src="/images/about_hero.png.webp" alt=""/>
        <h4 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-7xl'>CheckOut</h4>
      </div>
      
      <div className='mt-12 w-full mx-auto flex justify-center'>
              <aside className='shadow-2xl rounded-2xl mr-10 w-2/7 text-center p-7'>
          <h3 className='mb-4'>
            Total Cart Price
          </h3>
          <h5 className='mb-4'>Total price:454</h5>
          <div>
            <button className='cursor-pointer w-[70%] p-3 rounded-2xl bg-gray-200'>Proceed To payment</button>
          </div>
        </aside>
        <table className='table-auto w-1/2 border border-gray-300'>
          <thead className='border-b border-gray-300 bg-gray-100'>
            <tr>
              <th className='px-4 py-2 text-left'>Product</th>
              <th className='px-4 py-2 text-center'>Quantity</th>
              <th className='px-4 py-2 text-right'>Price</th>
              <th className='px-4 py-2 text-right'>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='px-4 py-2 flex items-center gap-2'>
                <img src="/images/casio.webp" className='w-16 h-auto' alt="Casio" />
                Casio
              </td>
              <td className='px-4 py-2 text-center'>4</td>
              <td className='px-4 py-2 text-right'>$1235</td>
              <td className='px-4 py-2 text-right'>$4940</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
