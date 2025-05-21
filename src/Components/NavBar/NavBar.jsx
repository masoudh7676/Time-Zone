import React, { memo, useContext, useState, useEffect, useRef } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import './Navbar.css'
import { Link } from 'react-router-dom';
import watchData from '../../watchsData';
import { IoSearchSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa"
function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
    setFilteredResults([]);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && searchOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [searchOpen]);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredResults([]);
    } else {
      const results = watchData.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  };
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Voice recognition logic
  const handleMicClick = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }
    if (!recognitionRef.current) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = false;
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setFilteredResults(
          transcript.trim() === ''
            ? []
            : watchData.filter((product) =>
                product.title.toLowerCase().includes(transcript.toLowerCase()) ||
                product.description.toLowerCase().includes(transcript.toLowerCase())
              )
        );
      };
      recognitionRef.current.onend = () => setListening(false);
    }

    if (!listening) {
      setListening(true);
      recognitionRef.current.start();
    } else {
      setListening(false);
      recognitionRef.current.stop();
    }
  };
  
  return (
    <>
      {/* Logo & Navigation */}
      <div className='h-28 hidden lg:flex w-full fixed drop-shadow-xl top-0 bg-white justify-between items-center z-50 dark:bg-black'>
        <nav className='flex w-[90%] mx-auto'>
          <div className='dark:bg-white rounded-2xl p-2'>
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
              <div className='hidden absolute cursor-pointer w-[290%] rounded-sm bg-white latest__sub dark:bg-gray-800'>
                <ul>
                  <li className='arrow hover-effect'><a href="">Product List</a> </li>
                  <li className='hover-effect'><a href="">Product Details</a> </li>
                </ul>
              </div>
            </li>
            <li className='action'>
              <Link to="blog" className='hover-effect with-sub font-bold'>Blog</Link>
              {/* Sub Menu */}
              <ul className='absolute hidden cursor-pointer rounded-sm bg-white latest__sub dark:bg-gray-800'>
                <li className='arrow hover-effect'><a href="">Blog</a></li>
                <li className='hover-effect'><a href="">Blog Details</a></li>
              </ul>
            </li>
            <li className='action'>
              <a href="#" className='hover-effect with-sub font-bold'>Pages</a>
              {/* Sub Menu */}
              <ul className='absolute hidden cursor-pointer rounded-sm bg-white latest__sub dark:bg-gray-800'>
                <li className='hover-effect'><Link to="/user">Login</Link></li>
                <li className='hover-effect'> <Link to="/cart">Cart</Link></li>
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
              <li className='cursor-pointer hover:scale-[1.4]' onClick={openSearch}><IoSearchOutline /></li>
              <li className='cursor-pointer hover:scale-[1.4]'><Link to="/user"><CiUser /></Link></li>
              <li className='cursor-pointer hover:scale-[1.4]'><Link to="/cart"><PiShoppingCartThin /></Link></li>
              {/* Dark Mode */}
              <li>
                <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="focus:outline-none cursor-pointer hover:scale-[1.4]">
                  {theme === 'dark' ? <FaMoon /> : <GoSun />}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className='fixed top-0 lg:hidden z-99 bg-white w-full dark:bg-black'>
        <div className='flex content-center justify-between p-5'>
          <div>
            <Link to="/cart"><PiShoppingCartThin className='text-2xl ' /></Link>
          </div>
          <div className='dark:bg-white rounded-2xl p-2'>
            <Link to="/home"><img src="./images/logo.png.webp" alt="Time-Zone" /></Link>
          </div>
          <button onClick={toggleMobileMenu} aria-label="Toggle menu" className='cursor-pointer'>
            <HiOutlineBars3BottomRight className='text-4xl' />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className='bg-white h-full px-4 py-3 w-70 fixed right-0 z-99 dark:bg-black'>
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
              <li className='cursor-pointer hover:scale-[1.4]' onClick={openSearch}><IoSearchOutline /></li>
              <li className='cursor-pointer'><Link to="/user"><CiUser /></Link></li>
              {/* Dark Mode */}
              <li className='cursor-pointer'>
                <button onClick={toggleTheme} aria-label="Toggle Dark Mode" className="focus:outline-none">
                  {theme === 'dark' ? <FaMoon /> : <GoSun />}
                </button>
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
      {/* Search Overlay */}
     <div
        className={`fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${
          searchOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button
          onClick={closeSearch}
          className='absolute top-10 right-10 text-3xl font-bold cursor-pointer'
          aria-label="Close search"
        >
          &times;
        </button>
        <div className="relative w-4/5 max-w-lg flex items-center">
          <IoSearchSharp className="absolute left-4 text-2xl text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder='Search Product ...'
            className='w-full p-4 pl-12 pr-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white'
            autoFocus={searchOpen}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            type="button"
            onClick={handleMicClick}
            className={`absolute right-4 text-2xl focus:outline-none transition-all
              ${listening ? 'animate-pulse text-red-500 scale-125' : 'text-gray-400 hover:text-blue-500'}
            `}
            aria-label="Voice search"
          >
            <FaMicrophone />
          </button>
        </div>
        {filteredResults.length > 0 && (
          <ul className="w-4/5 max-w-lg mt-2 border border-gray-300 rounded-md bg-white dark:bg-gray-900 text-left max-h-60 overflow-y-auto">
            {filteredResults.map((product) => (
              <li key={product.id} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                <div className="flex items-center gap-3">
                  <img src={product.src} alt={product.title} className="w-10 h-10 object-cover rounded" />
                  <div>
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default memo(NavBar);
