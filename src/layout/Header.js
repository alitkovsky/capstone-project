import React, { useState } from 'react';

import './Header.css';
import Nav from './Nav';

import burgerMenuIcon from './assets/icons/icon-burger-menu.png';
import burgerMenuIconHover from './assets/icons/icon-burger-menu-hover.png';
import logo from './assets/Logo.svg';
import closeIcon from "./assets/icons/icon-close.png";
import closeIconMobile from "./assets/icons/icon-close-mobile.png";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
    <>
       <header>
         <a href="/">
            <img
               src={logo}
               alt="Little Lemon Restaurant"
               className="logo"
            />
         </a>
         <Nav />
         {menuOpen ? (
            <div class="menu" id="menu" onClick={() => setMenuOpen(false)}>
            <div class="menu-top">
               <img
                  src={logo}
                  alt="Little Lemon Restaurant"
                  class="logo"
               />
               <a href="#home">
                     <source
                        media="(max-width: 576px)"
                        srcset={closeIconMobile} />
                     <source
                        media="(max-width: 1024px)"
                        srcset={closeIcon} />
                     <img
                        src={closeIcon}
                        alt="Close" class="close"
                     />
               </a>
            </div>
            <div class="nav">
               <a href="/" class="nav-link">Home</a>
               <a href="/about" class="nav-link">About</a>
               <a href="/menu" class="nav-link">Menu</a>
               <a href="/reservations" class="nav-link">Reservations</a>
               <a href="/order" class="nav-link">Order Online</a>
               <a href="/login" class="nav-link">Login</a>
            </div>
         </div>
         ) : (
            <a href="#menu" class="burger-menu">
            <div onClick={() => setMenuOpen(true)}>
               <img
                  src={burgerMenuIcon}
                  alt="Burger menu"
                  class="img-normal"
               />
               <img
                  src={burgerMenuIconHover}
                  alt="Burger menu hover"
                  class="img-hover"
               />
            </div>
         </a>
         )}
      </header>
    </>
   );
};

export default Header;