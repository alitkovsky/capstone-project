import React from 'react';

import './Hero.css';

const Hero = (props) => {
   const { src } = props;
   return (
      <>
         <section className="hero grid">
            <div className="heroContainer grid container">
               <div className="heroDescription grid">

                  <div className="text">
                  <h1>{props.title}</h1>
                  <h2>{props.subtitle}</h2>
                  <p>{props.description}</p>
                  </div>

                  <button>
                     Reserve Table
                  </button>
               </div>
               
                  <img className="hero-image" src={src} alt={props.alt} />
            </div>
         </section>
      </>
   )
};

export default Hero;