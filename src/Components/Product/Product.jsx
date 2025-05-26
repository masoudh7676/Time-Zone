import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Product() {
  return (
    <>
      <div className='w-[60%] md:w-[50%] lg:w-[30%] mx-auto my-10 p-5 border border-gray-300 rounded-lg shadow-lg'>
        <aside>
          <h5 className='font-bold'>price : $</h5>
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
          <button className='bg-red-500 w-[75%] cursor-pointer hover:text-white rounded-xl p-1'>add to cart</button>
          </div>
        </aside>
        <main className=''>

        </main>
      </div>
    </>
  )
}
