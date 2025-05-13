import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
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
            {isDarkMode ? <FaMoon />  : <GoSun />}
        </button>
    );
}

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Logo & Navigation */}
            <div className='h-28 hidden lg:flex w-full fixed drop-shadow-xl top-0 bg-white justify-between items-center z-50'>
                <nav className='flex w-[90%] mx-auto'>
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
                            <li className='cursor-pointer hover:scale-[1.4]'><Link to="/cart"><PiShoppingCartThin /></Link><span></span></li>
                            {/* Dark Mode */}
                            <li className='cursor-pointer hover:scale-[1.4]'>
                                <DarkModeToggle />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Mobile Menu */}
            <div className='fixed top-0 lg:hidden z-99 bg-white w-full'>
            <div className='flex content-center justify-between p-5'>
                <div>
                    <Link to="/cart"><PiShoppingCartThin className='text-2xl ' /></Link>
                </div>
                <div>
                    <Link to="/home"><img src="./images/logo.png.webp" alt="Time-Zone" /></Link>
                </div>
                <button onClick={toggleMobileMenu} aria-label="Toggle menu" className='cursor-pointer'>
                    <HiOutlineBars3BottomRight className='text-4xl'/>
                </button>
            </div>
            {mobileMenuOpen && (
            <div className='bg-white h-full px-4 py-3 w-70 fixed right-0 z-99'>
            <div className='flex flex-row-reverse border-b-2 p-2 border-gray-300'>
                <div className='flex justify-between w-95'>
                    <button onClick={closeMobileMenu} aria-label="Close menu" className='text-xl font-bold cursor-pointer'>X</button>
                    <div>
                        <Link to="/home"><img src="./images/logo.png.webp" alt="Time-Zone" /></Link>
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex mt-5 flex-row-reverse h-50'>
                <ul>
                    <li className='mb-5'><Link to="/home" className='font-bold'>Home</Link></li>
                    <li className='mb-5'><Link to="/shop" className='font-bold'>Shop</Link></li>
                    <li className='mb-5'><Link to="/about" className='font-bold'>About</Link></li>
                    <li className='mb-5'><a href="#" className='font-bold'>Latest</a></li>
                    <li className='mb-5'><a href="#" className='font-bold'>Blog</a></li>
                    <li className='mb-5'><a href="#" className='font-bold'>Blog Details</a></li>
                    </ul>
            </div>
            <ul className='flex flex-row-reverse gap-5 mt-18'>
                    <li className='cursor-pointer hover:scale-[1.4]'><IoSearchOutline /></li>
                            <li className='cursor-pointer'><Link to="/user"><CiUser /></Link></li>
                            {/* Dark Mode */}
                            <li className='cursor-pointer'>
                                <DarkModeToggle />
                            </li>
                            </ul>
            </div>
            )}
            </div>
            {mobileMenuOpen && (
                <div
                    className='bg-neutral-700 opacity-70 mask-alpha lg:hidden fixed inset-0 z-10 w-full h-full'
                    onClick={closeMobileMenu}
                ></div>
            )}
        </>
    );
}

