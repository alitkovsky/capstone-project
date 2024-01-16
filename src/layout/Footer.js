import React from "react";
import SocialIcons from "./SocialIcons";


import "./Footer.css";
import logoFooter from "./assets/logo-footer.png";
import logoFooterMobile from"./assets/logo-footer-thin.png";

const contacts = [
   {
      name: "address",
      data: "1234 Main Street Anytown, USA 12345"
   },
   {
      name: "phone",
      data: <a href="tel:555-555-5555" className="footer-link">555-555-5555</a>
   },
   {
      name: "email",
      data: <a href="mailto:info@littlelemon.com" className="footer-link">info@littlelemon.com</a>
   }
];

const Footer = () => {
   return (
      <>
         <footer className="grid">
            <div className="footer-container grid container">
               <div className="footer-logo-container grid">
                  <a href="/">
                     <img
                        src={logoFooter}
                        className="footer-logo"
                        alt="Little Lemon logo"
                     />
                     <img
                        src={logoFooterMobile}
                        className="footer-logo-mobile"
                        alt="Little Lemon logo"
                     />
                  </a>
                  <p className="footer-slogan">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                  <div className="social-icons-mobile grid">
                     <SocialIcons />
                  </div>
               </div>

               <div className="footer-content-container grid">

                  <div className="footer-nav">
                     <h3>Site map</h3>
                     <ul className="footer-nav-links">
                        <li><a href="/" >Home</a></li>
                        <li><a href="/about" >About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                     </ul>
                  </div>

                  <div className="footer-contact">
                     <h3>Contact us</h3>
                        <address>
                           {contacts.map((contact, index) =>
                              <p key={index}>
                                 {contact.data}
                              </p>
                           )}
                        </address>
                  </div>

                  <div className="footer-social">
                     <h3>Follow us</h3>
                     <div className="social-icons grid">
                        <SocialIcons />
                     </div>
                  </div>

               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;