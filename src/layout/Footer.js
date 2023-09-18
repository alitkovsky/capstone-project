import React from 'react';

import logoFooter from './assets/logo-footer.png';

const Footer = () => {
   return (
      <>
         <footer>
            <a href="/">
               <img
                  src={logoFooter}
                  alt="Little Lemon Restaurant"
                  className="logoFooter"
               />
            </a>
         </footer>
      </>
   );
};

export default Footer;