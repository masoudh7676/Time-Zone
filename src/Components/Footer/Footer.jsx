import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { TfiUnlock } from "react-icons/tfi";
import { FiRefreshCcw } from "react-icons/fi";
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className='footer w-7xl mx-auto grid grid-cols-3 gap-40 px-8 py-4 mt-40'>
                <div>
                    <div className='text-white text-5xl'><BsBoxSeam /></div>
                    <div className='mt-8'>
                        <h5 className='capitalize text-white text-xl font-bold'>free shipping method</h5>
                        <p className='text-gray-300'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</p>
                    </div>
                </div>
                <div>
                    <div className='text-white text-5xl'><TfiUnlock /></div>
                    <div className='mt-8'>
                        <h5 className='capitalize text-white text-xl font-bold'>Secure Payment System</h5>
                        <p className='text-gray-'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>
                </div>
                <div>
                    <div className='text-white text-5xl'><FiRefreshCcw /></div>
                    <div className='mt-8'>
                        <h5 className='capitalize text-white text-xl font-bold'>Secure Payment System</h5>
                        <p className='text-gray-'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
