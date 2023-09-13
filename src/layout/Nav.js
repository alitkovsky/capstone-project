import React from "react";

const Nav = () => {
   return (
      <>
         <nav>
            <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/about">About</a></li>
               <li><a href="/menu">Menu</a></li>
               <li><a href="/reservations">Reservations</a></li>
               <li><a href="/order">Order Online</a></li>
               <li><a href="/login">Login</a></li>
            </ul>
            <a href="#menu" class="burger-menu">
               <div>
                  <img src="../icons/icon-burger-menu.png" alt="Burger menu" class="img-normal"/>
                  <img src="../icons/icon-burger-menu-hover.png" alt="Burger menu hover" class="img-hover"/>
               </div>
            </a>
         </nav>

         <div class="menu" id="menu">
            <div class="menu-top">
               <img
                  src="../images/Logo.svg"
                  alt="Bose"
                  class="logo"
               />
               <a href="#home">
                     <source
                        media="(max-width: 576px)"
                        srcset="../icons/icon-close-mobile.png" />
                     <source
                        media="(max-width: 1024px)"
                        srcset="../icons/icon-close.png" />
                     <img src="../icons/icon-close.png"
                     alt="Close" class="close" />
               </a>
            </div>

            <nav class="nav">
               <a href="/" class="nav-link">Home</a>
               <a href="/about" class="nav-link">About</a>
               <a href="/menu" class="nav-link">Menu</a>
               <a href="/reservations" class="nav-link">Reservations</a>
               <a href="/order" class="nav-link">Order Online</a>
               <a href="/login" class="nav-link">Login</a>
            </nav>
         </div>
      </>
   );
};

export default Nav;