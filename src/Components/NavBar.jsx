import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
export default function NavBar() {
  return (
    <>
        <nav>
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
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">Pages</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            <div>
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
