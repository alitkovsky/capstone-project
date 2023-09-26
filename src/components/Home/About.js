import React from 'react';

import './About.css';

const About = (props) => {
   const { srca, srcb } = props;

   return (
      <>
         <section className="about">
            <div className="aboutContainer grid container">
               <div className="aboutDescription grid">
                     <h1>{props.title}</h1>
                     <h2>{props.subtitle}</h2>
                     <p>{props.description}</p>
               </div>

               <div className="aboutImageContainer">
                  <div className="aboutImage">
                     <img
                        className="aboutImage"
                        src={srca}
                        alt={props.alt}
                     />
                  </div>
                  <div className="imageOverlay">
                     <img
                        className="imageOverlay"
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