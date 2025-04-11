import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
export default function NavBar() {
  return (
    <>
        {/* Logo & Navigation */}
        <nav className='d-'>    
            <div>       
                <img src="./images/logo.png.webp" alt="Time-Zone" />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Shop</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
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
                    <ul>        
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
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            <div>
            {/* User Actions */}
                <ul>        
                    <li><IoSearchOutline /></li>
                    <li><CiUser /></li>
                    <li><PiShoppingCartThin /></li>
                </ul>
            </div>
        </nav>
        </>
  )
}

