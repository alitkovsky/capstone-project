import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './Header.css';
import Nav from './Nav';

import burgerMenuIcon from './assets/icons/icon-burger-menu.svg';
import burgerMenuIconHover from './assets/icons/icon-burger-menu-hover.svg';
import logo from './assets/logo.png';
import closeIcon from "./assets/icons/icon-close.svg";

const Header = () => {
   const [isVisible, setIsVisible] = useState(false);
   const menuAnimation = useSpring({
      config: {
         duration: 500,
      },
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0%)' : 'translateX(-100%)',
   });

   const toggleMenu = () => setIsVisible(!isVisible);

   return (
    <>
       <header className="grid container">

         <a href="/" className="logo">
            <img
               src={logo}
               alt="Little Lemon Restaurant"
            />
         </a>

         <Nav />

         <a href="#menu" className="burger-menu">
            <div onClick={toggleMenu}>
               <img
                  src={isVisible ? closeIcon : burgerMenuIcon}
                  alt={isVisible ? 'Close menu' : 'Burger menu'}
                  className="img-normal"
               />
               <img
                  src={isVisible ? closeIcon : burgerMenuIconHover}
                  alt={isVisible ? 'Close menu' : 'Burger menu'}
                  className="img-hover"
               />
            </div>
         </a>

         <animated.div
               className="menu grid"
               style={menuAnimation}
         >
            <div className="menu-top grid container">
               <a href="/" className="logo">
                  <img
                     src={logo}
                     alt="Little Lemon Restaurant"
                  />
               </a>
            </div>
            <div className="nav grid container">
               <a href="/">Home</a>
               <a href="/about">About</a>
               <a href="/menu">Menu</a>
               <a href="/reservations">Reservations</a>
               <a href="/order">Order Online</a>
               <a href="/login">Login</a>
            </div>
         </animated.div>

      </header>
    </>
   );
};

export default Header;