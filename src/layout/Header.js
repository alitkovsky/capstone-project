import React, { useState } from 'react';
import { useTransition } from 'transition-hook';

import './Header.css';
import Nav from './Nav';

import burgerMenuIcon from './assets/icons/icon-burger-menu.svg';
import burgerMenuIconHover from './assets/icons/icon-burger-menu-hover.svg';
import logo from './assets/Logo.svg';
import closeIcon from "./assets/icons/icon-close.svg";

const Header = () => {
   const [isVisible, setIsVisible] = useState(false);
   const { stage, shouldMount } = useTransition(isVisible, 500);
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

            <div
               className="menu grid"
               key={shouldMount}
               style={{
                  transition: '.5s',
                  opacity: stage === 'enter' ? 1 : 0,
                  transform: {
                  from: 'translateX(-100%)',
                  enter: 'translateX(0%)',
                  leave: 'translateX(-100%)',
                  }[stage],
               }}
            >
            <div className="menu-top grid container">
               <img
                  src={logo}
                  alt="Little Lemon Restaurant"
                  className="logo"
               />
            </div>
            <div className="nav grid container">
               <a href="/" className="burgerMenuLink">Home</a>
               <a href="/about" className="burgerMenuLink">About</a>
               <a href="/menu" className="burgerMenuLink">Menu</a>
               <a href="/reservations" className="burgerMenuLink">Reservations</a>
               <a href="/order" className="burgerMenuLink">Order Online</a>
               <a href="/login" className="burgerMenuLink">Login</a>
            </div>
         </div>

      </header>
    </>
   );
};

export default Header;