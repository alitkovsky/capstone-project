import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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

const SocialIcons = () => {
  return (
   <>
      {socials.map((social, index) =>
         <a key={index} href={social.url} className="social-link">
            {social.icon}
         </a>
      )}
   </>
  )
}

export default SocialIcons;