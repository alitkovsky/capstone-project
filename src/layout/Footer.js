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
      data: <a href="tel:555-555-5555" className="footerLink">555-555-5555</a>
   },
   {
      name: 'email',
      data: <a href="mailto:info@littlelemon.com" className="footerLink">info@littlelemon.com</a>
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
                        <li><a href="/" className="footerLink">Home</a></li>
                        <li><a href="/about" className="footerLink">About</a></li>
                        <li><a href="/menu" className="footerLink">Menu</a></li>
                        <li><a href="/reservations" className="footerLink">Reservations</a></li>
                        <li><a href="/order" className="footerLink">Order Online</a></li>
                        <li><a href="/login" className="footerLink">Login</a></li>
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
                           <a key={index} href={social.url} className="socialLink">
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