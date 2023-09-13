import React from 'react';

import './Header.css';
import Nav from './Nav';
import logoImg from './assets/Logo.svg';

const Header = () => {
   return (
    <>
       <header>
         <a href="/">
            <img
               src={logoImg}
               alt="Little Lemon Restaurant"
               className="logo"
            />
         </a>
         <Nav />
      </header>
    </>
   );
};

export default Header;