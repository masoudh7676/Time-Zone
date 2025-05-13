import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

// const contextData = useContext(AllProductsContext)
export default function Cart() {
  return (
    <>
      <NavBar />
      <div className='mt-28 relative'>
        <img src="/images/about_hero.png.webp" alt="" />
        <h4 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-7xl'>CheckOut</h4>
      </div>

      <div className='mt-12 w-full flex justify-center content-center'>
        <aside className='shadow-2xl rounded-2xl mr-10 w-2/7 p-7 flex flex-col text-center'>
          <h5 className='mb-4 text-2xl'>Total Price: 454$</h5>

          <h6>Sending method:</h6>
          <form method='post'>
            <div className='flex flex-col'>
            <div className='flex w-full justify-center content-center mt-4'>
              <input type="radio" className='mr-3' name='send' id='1' />
              <label htmlFor='1'>Post</label>
              </div>
              <div className='flex w-full justify-center content-center mt-4 ml-2'>
              <input type="radio" className='mr-3' name='send' id='2' />
              <label htmlFor='2'>Person</label>
              </div>
              <div className='flex w-full justify-center content-center my-4'>
              <input type="radio" className='mr-3' name='send' id='3' />
              <label htmlFor='3'>Bike</label>
              </div>
            </div>
            <div>
              <a href="#">
                <button className='cursor-pointer w-[70%] p-3 hover:scale-110 hover:text-blue-600 rounded-2xl text-xl bg-gray-200'>Proceed To payment</button>
              </a>
            </div>
          </form>

        </aside>
        <table className='table-auto w-1/2 border border-gray-300 h-1' style={{ direction: 'rtl' }}>
          <thead className='border-b border-gray-300 bg-gray-100'>
            <tr>
              <th className='px-4 py-2 text-right'>Product</th>
              <th className='px-4 py-2 text-center'>Quantity</th>
              <th className='px-4 py-2 text-left'>Price</th>
              <th className='px-4 py-2 text-left'>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='px-4 py-2 flex items-center gap-2'>
                <img src="/images/casio.webp" className='w-16 h-auto' alt="Casio" />
                Casio
              </td>
              <td className='px-4 py-2 text-center'>4</td>
              <td className='px-4 py-2 text-left'>$1235</td>
              <td className='px-4 py-2 text-left'>$4940</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
}
