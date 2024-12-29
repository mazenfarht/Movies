import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../img/555555555555555.png';
import ava from '../../img/avatar.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';

export default function Header() {
  const [toggle, setToggle] = useState(false); // For mobile menu
  const [showSearch, setShowSearch] = useState(false); // For showing search input
  const navigate = useNavigate(); // Hook to navigate between routes

  const menu = [
    {
      name: 'Home',
      icon: HiHome,
      route: '/',
    },
    // {
    //   name: 'SEARCH',
    //   icon: HiMagnifyingGlass,
    //   route: '/search',
    // },
    {
      name: 'WATCH LIST',
      icon: HiPlus,
      route: '/watchlist',
    },
    // {
    //   name: 'ORIGINALS',
    //   icon: HiStar,
    //   route: '/originals',
    // },
    {
      name: 'MOVIES',
      icon: HiPlayCircle,
      route: '/movies',
    },
    {
      name: 'SERIES',
      icon: HiTv,
      route: '/series',
    },
  ];


    
    
    
   
  const nav = () => {
    navigate('/home');  // Navigate to the details page with the movie ID
  };

  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="flex items-center justify-between p-4">
      {/* Logo and Menu */}
      <div className="flex items-center gap-8">
        <img src={logo} onClick={nav} alt="logo" className="w-[100px] p-3 object-cover" />
        
        <div className="hidden md:flex gap-4">
          {menu.map((item) => (
            <div key={item.name} onClick={() => handleNavigation(item.route)}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </div>
          ))}
        </div>

        <div className="flex md:hidden gap-1">
          {menu.map((item, index) => index < 3 && (
            <div key={item.name} onClick={() => handleNavigation(item.route)}>
              <HeaderItem name={''} Icon={item.icon} />
            </div>
          ))}
        </div>

        {/* Toggle mobile menu */}
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle ? (
            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 p-3'>
              {menu.map((item, index) => index > 2 && (
                <div key={item.name} onClick={() => handleNavigation(item.route)}>
                  <HeaderItem name={item.name} Icon={item.icon} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Search icon */}
      <div className="flex items-center gap-4">
        {/* <HiMagnifyingGlass
          className="text-white cursor-pointer"
          onClick={() => setShowSearch(!showSearch)} // Toggle search input
        /> */}
        
        {/* Conditionally render the search input */}
        {/* {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white p-2 rounded-md"
            autoFocus
          />
        )} */}

        {/* Avatar */}
        <img
          src={ava}
          alt="avatar"
          className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full"
        />
      </div>
    </div>
  );
}
