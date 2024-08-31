import React from 'react'
import { useState } from 'react';
import Logo from '../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { MdLocalCafe } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='navbar flex justify-between items-center px-5 py-2 bg-orange-100 gap-2 '>
            {/* logo component */}
            <div className='nav'>
                <div className='logo flex items-center justify-between cursor-pointer'>
                    <a href="http://localhost:5173/">
                        <img src={Logo} alt="Ghantaghar.com Logo" height="80px" width="80px" />
                    </a>
                    <div className="logo_title" >
                        <h2 className='text-[1.4rem] font-bold'>Ghantaghar.com<sup className='font-normal'>Beta</sup></h2>
                        <p className='text-[0.65rem]'>Nepal's first Hourly Hotel Booking Platform</p>
                    </div>
                </div>

                {/* Menu */}
                <div className="hamburger cursor-pointer" onClick={toggleMenu}>
                    <GiHamburgerMenu />
                </div>
            </div>



            <div className={`nav_right flex items-center justify-between w-[67vw] flex-nowrap ${isOpen ? 'open' : ''}`}>
                {/* nav-items component */}
                <ul className='flex gap-6 font-medium text-gray-600 flex-wrap'>
                    <li><a href="#" className='nav-items'><FaHome />Home</a></li>
                    <li><a href="#" className='nav-items'><FaHeart />Favourites</a></li>
                    <li><a href="#" className='nav-items'><FaBuilding />List Your Place</a></li>
                    <li><a href="#" className='nav-items'><MdLocalCafe />Cafe</a></li>
                </ul>

                {/* search-bar component */}
                <div className="search_bar flex items-center justify-center gap-2">
                    <input type="text" placeholder='Search by Hotel' className='rounded-md px-3 py-1 outline-gray-500 w-[17rem]' />
                    <button className='border border-slate-600 p-[.45rem] rounded-md hover:bg-orange-200'><FaSearch /></button>
                </div>

                {/* login & signup button component */}
                <button className='flex gap-2 px-4 justify-center items-center border border-slate-600 p-[.3rem] rounded-md hover:bg-orange-200'><IoPersonSharp />Login/Signup</button>
            </div>
        </div>
    )
}

export default Navbar