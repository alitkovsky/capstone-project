import React from 'react';

import './TestimonialCard.css';

const TestimonialCard = (props) => {
   return (
      <>
         <article className="testimonialCard grid">
            <div className="testimonialCardHeader grid">
               <img
                  src={props.image}
                  alt={props.name}
                  className="testimonialCardImg"
               />
               <div className="testimonialCardName">
                  <h3>{props.name}</h3>
                  <p>{props.lastName}</p>
               </div>
               <div className="testimonialRating grid">
                  {props.rating}
               </div>
            </div>

            <div className="testimonialSlogan grid">{props.slogan}</div>
            <p>{props.review}</p>
         </article>
      </>
   )
};

export default TestimonialCard;