import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { TfiUnlock } from "react-icons/tfi";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from 'react-router';
export default function Footer() {
    return (
        <>
            <div className='bg-[#ea0000] w-[70%] mx-auto lg:grid grid-cols-3 gap-40 px-8 py-4 mt-40 overflow-hidden'>
                <div className='mb-15 lg:mb-0'>
                    <div className='text-white text-5xl'><BsBoxSeam /></div>
                    <div className='mt-8'>
                        <h5 className='capitalize text-white text-xl font-bold'>free shipping method</h5>
                        <p className='text-gray-300'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd</p>
                    </div>
                </div>
                <div className='mb-15 lg:mb-0'>
                    <div className='text-white text-5xl'><TfiUnlock /></div>
                    <div className='mt-8'>
                        <h5 className='capitalize text-white text-xl font-bold'>Secure Payment System</h5>
                        <p className='text-gray-300'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>
                </div>
                <div className='mb-15 lg:mb-0'>
                    <div className='text-white text-5xl'><FiRefreshCcw /></div>
                    <div className='mt-8'>
                        <h5 className='capitalize text-white text-xl font-bold'>Secure Payment System</h5>
                        <p className='text-gray-300'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                    </div>
                </div>
            </div>
            
            <div className='overflow-hidden w-[70%] gap-30 align-middle  mt-26 mb-20 grid grid-cols-1 sm:grid-cols-2 mx-auto xl:flex justify-center '>
                <div>
                    <Link to="/home" ><img src="./images/logo.png.webp" className='mb-4' alt="time-zone" /></Link>
                    <p className='text-[#868c98]'>Asorem ipsum adipolor sdit amet, <br /> consectetur adipisicing elitcf sed do <br /> eiusmod tem.</p>
                </div>
                <div>
                <h5 className='text-xl font-bold mb-3'>Quick Links</h5>
                <ul>
                    <li className='text-[#868c98]  transition delay-100 hover:text-[#ff003c] mb-3'>
                        <Link to="/about" className='capitalize'>about</Link>
                    </li>
                    <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c] mb-3'>
                        <a href="#" className='capitalize'>offers & discount's</a>
                    </li>
                    <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c] mb-3'>
                        <a href="#" className='capitalize'>get coupon</a>
                    </li>
                    <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c]'>
                        <a href="#" className='capitalize'>contact us</a>
                    </li>
                </ul>
                </div>
                <div>
                    <h5 className='text-xl font-bold mb-3'>New Products</h5>
                    <ul>
                        <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c] mb-3'>
                            <a href="#">Woman Cloth</a>
                        </li>
                        <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c] mb-3'>
                            <a href="#">Fashion Accessories</a>
                        </li>
                        <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c] mb-3'>
                            <a href="#">Man Accessories</a>
                        </li>
                        <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c]'>
                            <a href="#">Rubber made Toys</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5 className='text-xl font-bold mb-3'>Support</h5>
                    <ul className='gap-4'>
                        <li className='text-[#868c98] transition delay-100 hover:text-[#ff003c] mb-3'>
                            <a href="#">Frequently Asked Questions</a>
                        </li>
                        <li className='text-[#868c98]  transition delay-100 hover:text-[#ff003c] mb-3'>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li className='text-[#868c98]  transition delay-100 hover:text-[#ff003c] mb-3'>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className='text-[#868c98]  transition delay-100 hover:text-[#ff003c]'>
                            <a href="#">Report a Payment Issue</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
