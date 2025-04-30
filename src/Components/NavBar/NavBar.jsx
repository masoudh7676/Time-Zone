import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import './Navbar.css'
import { Link } from 'react-router-dom';
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
            <div className='h-28 d-flex w-full fixed drop-shadow-xl top-0 bg-white justify-between items-center z-50'>
                <nav className='d-flex w-[90%] nav'>
                    <div>
                        {/* Logo */}
                        <Link to="/home"><img src="./images/logo.png.webp" alt="Time-Zone" /></Link>
                        
                    </div>
                    {/* Nav */}
                    <ul className='flex w-[100%] justify-center gap-7'>
                        <li><Link to="/home" className='hover-effect font-bold'>Home</Link></li>
                        <li><Link to="/shop" className='hover-effect font-bold'>Shop</Link></li>
                        <li><Link to="/about" className='hover-effect font-bold'>About</Link></li>
                        <li className='relative action red__btn'>
                            <a href="#" className='relative hover-effect with-sub font-bold'>Latest</a>
                            {/* Sub Menu */}
                            <div className='hidden absolute cursor-pointer w-[290%] rounded-sm bg-white latest__sub'>
                            <ul>
                                <li className='arrow hover-effect'><a href="">Product List</a> </li>
                                <li className='hover-effect'><a href="">Product Details</a> </li>
                                </ul>
                            </div>
                        </li>
                        <li className='action'>
                            <Link to="blog" className='hover-effect with-sub font-bold'>Blog</Link>
                            {/* Sub Menu */}
                            <ul className='absolute hidden cursor-pointer rounded-sm bg-white latest__sub'>
                                <li className='arrow hover-effect'><a href="">Blog</a></li>
                                <li className='hover-effect'><a href="">Blog Details</a></li>
                            </ul>
                        </li>
                        <li className='action'>
                            <a href="#" className='hover-effect with-sub font-bold'>Pages</a>
                            {/* Sub Menu */}
                            <ul className='absolute hidden cursor-pointer rounded-sm bg-white latest__sub'>
                                <li className='hover-effect'><Link to="/user">Login</Link></li>
                                <li className='hover-effect'>Cart</li>
                                <li className='hover-effect'>Element</li>
                                <li className='hover-effect'>Confirmation</li>
                                <li className='hover-effect'>Product Checkout</li>
                            </ul>
                        </li>
                        <li><Link to="/contact" className='hover-effect font-bold'>Contact</Link></li>
                    </ul>
                    <div>
                        {/* User Actions */}
                        <ul className='flex gap-5'>
                            <li className='cursor-pointer hover:scale-[1.4]'><IoSearchOutline /></li>
                            <li className='cursor-pointer hover:scale-[1.4]'><Link to="/user"><CiUser /></Link></li>
                            <li className='cursor-pointer hover:scale-[1.4]'><PiShoppingCartThin /></li>
                            {/* Dark Mode */}
                            <li className='cursor-pointer hover:scale-[1.4]'>
                                <DarkModeToggle />
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    );
}

