import React from 'react';

import './About.css';

const About = (props) => {
   const { srca, srcb } = props;

   return (
      <>
         <section className="about">
            <div className="about-container grid container">
               <div className="about-description grid">
                     <h1>{props.title}</h1>
                     <h2>{props.subtitle}</h2>
                     <p>{props.description}</p>
               </div>

               <div className="about-image-container">
                  <div className="about-image">
                     <img
                        className="about-image"
                        src={srca}
                        alt={props.alt}
                     />
                  </div>
                  <div className="image-overlay">
                     <img
                        className="image-overlay"
                        src={srcb}
                        alt={props.alt}
                     />
                  </div>
               </div>

            </div>
         </section>
      </>
   )
};

export default About;