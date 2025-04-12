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
            <div className='bg-black/50 w-[90%] nav '>
                <nav className=''>
                    <div>
                        {/* Logo */}
                        <img src="./images/logo.png.webp" alt="Time-Zone" />
                    </div>
                    {/* Nav */}
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">About</a></li>
                        <li>
                            <a href="">Latest</a>
                            {/* Sub Menu */}
                            <ul>
                                <li>Product List</li>
                                <li>Product Details</li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Blog</a>
                            {/* Sub Menu */}
                            <ul className=''>
                                <li>Blog</li>
                                <li>Blog Details</li>
                            </ul>
                        </li>
                        <li>
                            <a href="">Pages</a>
                            {/* Sub Menu */}
                            <ul>
                                <li>Login</li>
                                <li>Cart</li>
                                <li>Element</li>
                                <li>Confirmation</li>
                                <li>Product Checkout</li>
                            </ul>
                        </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                <div>
                    {/* User Actions */}
                    <ul>
                        <li><IoSearchOutline /></li>
                        <li><CiUser /></li>
                        <li><PiShoppingCartThin /></li>
                        {/* Dark Mode */}
                        <li>
                            <DarkModeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

