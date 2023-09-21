import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


import './Footer.css';
import logoFooter from './assets/logo-footer.png';

const instagram = <FontAwesomeIcon icon={faInstagram} size="xl" />;
const facebook = <FontAwesomeIcon icon={faFacebook} size="xl" />;
const twitter = <FontAwesomeIcon icon={faTwitter} size="xl" />;
const youtube = <FontAwesomeIcon icon={faYoutube} size="xl" />;

const socials = [
   {
      url: 'https://facebook.com',
      icon: facebook
   },
   {
      url: 'https://twitter.com',
      icon: twitter
   },
   {
      url: 'https://instagram.com',
      icon: instagram
   },
   {
      url: 'https://youtube.com',
      icon: youtube
   }
];

const contacts = [
   {
      name: 'address',
      data: '1234 Main Street Anytown, USA 12345'
   },
   {
      name: 'phone',
      data: '555-555-5555'
   },
   {
      name: 'email',
      data: 'info@littlelemon.com'
   }
];


const Footer = () => {

   return (
      <>
         <footer className="grid">
            <div className="grid container footerContainer">
               <div className="footerLogo">
                  <a href="/">
                     <img
                        src={logoFooter}
                        alt="Little Lemon Restaurant"
                     />
                  </a>
               </div>
               <div className="footerContent grid">
                  <div className="footerNav">
                     <h3>Site map</h3>
                     <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                     </ul>
                  </div>

                  <div className="footerContact">
                     <h3>Contact us</h3>
                        <address>
                           {contacts.map((contact, index) =>
                              <p key={index}>
                                 {contact.data}
                              </p>
                           )}
                        </address>
                  </div>

                  <div className="footerSocial">
                     <h3>Follow us</h3>
                     <div className="socialIcons grid">
                        {socials.map((social, index) =>
                           <a key={index} href={social.url}>
                              {social.icon}
                           </a>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;