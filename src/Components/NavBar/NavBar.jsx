import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import './Navbar.css'
// Child component for the dark mode toggle
function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? <FaMoon /> : <GoSun />}
        </button>
    );
}

export default function NavBar() {
    return (
        <>
            {/* Logo & Navigation */}
            <div className='h-24 d-flex justify-between items-center'>
                <nav className='d-flex w-[90%] nav'>
                    <div>
                        {/* Logo */}
                        <img src="./images/logo.png.webp" alt="Time-Zone" />
                    </div>
                    {/* Nav */}
                    <ul className='flex w-[100%] justify-center gap-7'>
                        <li><a href="" className = 'hover-effect'>Home</a></li>
                        <li><a href="" className = 'hover-effect'>Shop</a></li>
                        <li><a href="" className = 'hover-effect'>About</a></li>
                        <li>
                            <a href="" className='relative hover-effect' >Latest <span className='absolute red-btn rounded-2xl text-white shadow'>Hot</span></a>
                            {/* Sub Menu */}
                            <ul className='hidden'>
                                <li>Product List</li>
                                <li>Product Details</li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className = 'hover-effect'>Blog</a>
                            {/* Sub Menu */}
                            <ul className='hidden'>
                                <li>Blog</li>
                                <li>Blog Details</li>
                            </ul>
                        </li>
                        <li>
                            <a href="" className='hover-effect'>Pages</a>
                            {/* Sub Menu */}
                            <ul className='hidden'>
                                <li>Login</li>
                                <li>Cart</li>
                                <li>Element</li>
                                <li>Confirmation</li>
                                <li>Product Checkout</li>
                            </ul>
                        </li>
                        <li><a href="" className = 'hover-effect'>Contact</a></li>
                    </ul>
                    <div>
                    {/* User Actions */}
                    <ul className='flex gap-5'>
                        <li><IoSearchOutline /></li>
                        <li><CiUser /></li>
                        <li><PiShoppingCartThin /></li>
                        {/* Dark Mode */}
                        <li>
                            <DarkModeToggle />
                        </li>
                    </ul>
                </div>
                </nav>

            </div>
        </>
    );
}

