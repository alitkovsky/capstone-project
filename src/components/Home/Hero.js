import React from 'react';

import './Hero.css';

const Hero = (props) => {
   const { src } = props;

   return (
      <>
         <section className="hero">
            <div className="heroContainer grid">
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

               <div>
                  <img className="heroImage" src={src} alt={props.alt} />
               </div>

            </div>
         </section>
      </>
   )
};

export default Hero;