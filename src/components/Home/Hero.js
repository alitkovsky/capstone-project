import React from 'react';

import './Hero.css';

const Hero = (props) => {
   const { src } = props;
   return (
      <>
         <section className="hero">
            <div className="hero">
               <div className="hero-description">
                  <div className="text">
                  <h1>{props.title}</h1>
                  <h2>{props.subtitle}</h2>
                  <p>{props.description}</p>
                  </div>
                  <div className="button">
                  <button>
                     Reserve Table
                  </button>
                  </div>
               </div>
                  <img className="hero-image" src={src} alt={props.alt} />
            </div>
         </section>
      </>
   )
};

export default Hero;