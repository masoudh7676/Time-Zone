import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useContext } from 'react'
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import AllProductsContext from '../../Context/Products'
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Cart() {
  const contextData = useContext(AllProductsContext)

  // Handler to increase quantity for a specific product
  const increaseQuantity = (productId) => {
    const updatedCart = contextData.userCart.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
    contextData.setUserCart(updatedCart)
  }

  // Handler to decrease quantity for a specific product
  const decreaseQuantity = (productId) => {
    const updatedCart = contextData.userCart.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 1 }
        : product
    )
    contextData.setUserCart(updatedCart)
  }

  // Handler to remove a product from the cart by id
  const removeProduct = (productId) => {
    const updatedCart = contextData.userCart.filter(product => product.id !== productId)
    contextData.setUserCart(updatedCart)
  }

  // Calculate total price by summing all product totals
  const totalPrice = contextData.userCart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)

  return (
    <>
      <NavBar />
      {contextData.userCart.length > 0 ? (
        <>
          <div className='mt-28 relative'>
            <img src={`${import.meta.env.BASE_URL}images/about_hero.png.webp`} alt="" className='w-full h-full dark:mask-y-from-5%' />
            <div className='absolute top-2/5 text-center w-full'>
              <h4 className='capitalize text-5xl sm:text-7xl font-black'>check out</h4>
            </div>
          </div>
          <div className='mt-12 w-full flex flex-col xl:flex-row justify-center overflow-hidden items-center content-center'>
            <aside className='shadow-2xl rounded-2xl xl:mr-10 max-w-5xl mb-20  xl:w-2/7 xl:mb-5 p-7 flex flex-col text-center dark:bg-gray-900'>
              <h5 className='mb-4 text-2xl'>Total Price: {totalPrice.toFixed(2)}$</h5>
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
                    <button className='cursor-pointer w-[70%] p-3 hover:scale-110 hover:text-blue-600 rounded-2xl text-xl bg-gray-200 dark:bg-black'>Proceed To payment</button>
                  </a>
                </div>
                <div className='mt-5'>
                  <button
                    className='cursor-pointer w-[70%] p-3 hover:scale-110 hover:text-red-600 rounded-2xl text-xl bg-gray-200 dark:bg-black'
                    onClick={() => contextData.setUserCart([])}
                  >
                    Empty Cart
                  </button>
                </div>
              </form>
            </aside>
            <div className='flex flex-col gap-10'>
              {
                contextData.userCart.map(product => (
                  <table className='table-auto w-full mx-auto sm:w-150 xl:w-200 border border-gray-300 h-1 dire' dir='rtl' key={product.id}>
                    <thead className='border-b border-gray-300 bg-gray-100 dark:bg-gray-800'>
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
                          <abbr title="Click to Remove From Cart"><MdRemoveShoppingCart className='text-2xl cursor-pointer' onClick={() => removeProduct(product.id)} /></abbr>
                          <Link to={`/product/${product.id}`} className='flex items-center gap-2'>
                            <img src={product.img} className='w-16 h-auto' alt="time-zone" />
                            <span>{product.title}</span>
                          </Link>
                        </td>
                        <td className='px-4 py-2 text-center'>
                          <div className='flex justify-center'>
                            <div className='flex flex-col content-center items-center'>
                              <CiSquarePlus className='text-3xl cursor-pointer mb-3' onClick={() => increaseQuantity(product.id)} />
                              <CiSquareMinus className='text-3xl cursor-pointer' onClick={() => decreaseQuantity(product.id)} />
                            </div>
                            <span className='my-auto mr-5'>{product.quantity}</span>
                          </div>
                        </td>
                        <td className='px-4 py-2 text-left'>{product.price.toFixed(2)} $</td>
                        <td className='px-4 py-2 text-left'>{(product.price * product.quantity).toFixed(2)} $</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              }
            </div>
          </div>
        </>
      ) : (
        <h3 className='capitalize mt-60 text-center text-2xl text-orange-400 leading-12'>
          still nothing here to show !
        </h3>
      )}
      <Footer />
    </>
  )
}
