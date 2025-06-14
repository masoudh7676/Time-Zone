import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CiStar } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AllProductsContext from '@/Context/Products';
import { CgSpinner } from "react-icons/cg";
import Footer from '../Footer/Footer';

export default function Product() {
  const { id } = useParams()
  const contextData = useContext(AllProductsContext)
  const product = contextData.items.find(item => item.id === parseInt(id))

  if (!product) {     //  when product item not found
    return (
      <div className='flex items-center justify-center mt-28'>
        <p>Product not found.</p>
      </div>
    )
  }

  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    const existingProduct = contextData.userCart.find(item => item.id === product.id)

    if (existingProduct) {
      const updatedCart = contextData.userCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      contextData.setUserCart(updatedCart)
    } else {
      contextData.setUserCart([
        ...contextData.userCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          img: product.src,
          quantity: 1
        }
      ])
    }
    contextData.setShowCart(true)

    setTimeout(() => {
      setIsAdding(false);
    }, 1000); // simulate loading for 1 second
  }

  return (
    <>
    <div className='flex flex-col md:flex-row items-center justify-center mt-28 overflow-hidden'>
      <aside className='md:w-[40%] lg:w-[40%] md:mr-15 p-5 w-screen border border-gray-300 rounded-lg shadow-lg'>
        <h5 className='text-2xl'>price : <span className='text-blue-500'>${product.price}</span> </h5>
        <ul>
          <li>
            <Accordion type="single" collapsible className="w-full flex items-center">
              <AccordionItem className={'w-full'} value="item-1">
                <div className='flex items-center'>
                  <CiStar className='mr-5' />
                  <AccordionTrigger className={'text-xl'}>Guarantee</AccordionTrigger>
                </div>
                <AccordionContent className={'leading-8'}>
                  life time guarantee
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </li>
          <li>
            <Accordion type="single" collapsible className="w-full flex items-center ">
              <AccordionItem className={'w-full'} value="item-1">
                <div className='flex items-center'>
                  <FaTruckFast className='mr-5' />
                  <AccordionTrigger className={'text-xl'}>Fast Delivery</AccordionTrigger>

                </div>
                <AccordionContent className={'leading-8'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus, dolores modi ad odio dolor assumenda qui veritatis, libero amet dicta dolorem ullam quod error a voluptates doloremque deserunt porro
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
          <Accordion type="single" collapsible className="w-full flex items-center ">
            <AccordionItem className={'w-full'} value="item-1">
              <div className='flex items-center'>
                <FaRegCreditCard className='mr-5' />
                <AccordionTrigger className={'text-xl'}>Secure Payment</AccordionTrigger>
              </div>
              <AccordionContent className={'leading-8'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo temporibus, dolores modi ad odio dolor assumenda qui veritatis, libero amet dicta dolorem ullam quod error a voluptates doloremque deserunt porro
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ul>
        <div className='flex justify-center'>
          <button 
            className='bg-red-500 w-[75%] cursor-pointer hover:text-white rounded-xl p-1 flex items-center justify-center capitalize text-xl' 
            onClick={handleAddToCart}
            disabled={isAdding}
          > 
            {isAdding && <CgSpinner className='animate-spin mr-2 text-white text-xl'/>} 
            add to cart
          </button>
        </div>
      </aside>
      <main className='md:w-[33%] w-[65%] mt-20'>
        <div className='border-1 border-gray-300'>
          <img src={`${import.meta.env.BASE_URL}images/${product.src.replace(/^\.\/images\//, '')}`} loading='lazy' className='object-cover' alt={product.title} />
        </div>
        <div className='mt-10'>
          <h5 className = 'text-center text-2xl font-bold mb-10'>{product.title}</h5>
          <p className='leading-9'>additionalDescription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut veniam dolor architecto assumenda possimus est iure quidem debitis praesentium porro, quod voluptatem eius. Nulla, consequuntur repudiandae. Nisi, laborum laboriosam debitis facere ab autem praesentium!'</p>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
  
}
