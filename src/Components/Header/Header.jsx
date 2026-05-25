import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/555555555555555.png";
import ava from "../../img/avatar.png";

import { HiHome, HiPlayCircle, HiTv } from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const menu = [
    {
      name: "Home",
      icon: HiHome,
      route: "/",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      route: "/watchlist",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      route: "/movies",
    },
    {
      name: "SERIES",
      icon: HiTv,
      route: "/series",
    },
  ];

  const handleNavigation = (route) => {
    navigate(route);
    setToggle(false);
  };

  return (
    <header className="w-full px-3 sm:px-5 md:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 sm:gap-5 md:gap-8">
          {/* LOGO */}
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/home")}
            className="
              w-[70px]
              sm:w-[90px]
              md:w-[110px]
              cursor-pointer
              object-contain
            "
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {menu.map((item) => (
              <div
                key={item.name}
                onClick={() => handleNavigation(item.route)}
                className="cursor-pointer"
              >
                <HeaderItem name={item.name} Icon={item.icon} />
              </div>
            ))}
          </div>

          {/* MOBILE MENU */}
          <div className="flex md:hidden items-center gap-2">
            {/* QUICK ICONS */}
            {menu.slice(0, 2).map((item) => (
              <div
                key={item.name}
                onClick={() => handleNavigation(item.route)}
                className="cursor-pointer"
              >
                <HeaderItem name="" Icon={item.icon} />
              </div>
            ))}

            {/* DROPDOWN */}
            <div className="relative">
              <div
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer"
              >
                <HeaderItem name="" Icon={HiDotsVertical} />
              </div>

              {toggle && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-50
                    w-[180px]
                    rounded-xl
                    border
                    border-gray-700
                    bg-[#121212]
                    shadow-lg
                    p-3
                    flex
                    flex-col
                    gap-3
                  "
                >
                  {menu.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => handleNavigation(item.route)}
                      className="cursor-pointer"
                    >
                      <HeaderItem name={item.name} Icon={item.icon} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AVATAR */}
        <img
          src={ava}
          alt="avatar"
          className="
            w-[38px]
            h-[38px]
            sm:w-[45px]
            sm:h-[45px]
            md:w-[55px]
            md:h-[55px]
            rounded-full
            object-cover
            cursor-pointer
          "
        />
      </div>
    </header>
  );
}
