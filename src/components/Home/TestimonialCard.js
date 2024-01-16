import React from "react";

import "./TestimonialCard.css";

const TestimonialCard = (props) => {
   return (
      <>
         <article className="testimonial-card grid">
            <div className="testimonial-card-header grid">
               <img
                  src={props.image}
                  alt={props.name}
                  className="testimonial-card-img"
               />
               <div className="testimonial-card-name">
                  <h3>{props.name}</h3>
                  <p>{props.lastName}</p>
               </div>
               <div className="testimonial-rating grid">
                  {props.rating}
               </div>
            </div>

            <div className="testimonial-slogan grid">{props.slogan}</div>
            <p>{props.review}</p>
         </article>
      </>
   );
};

export default TestimonialCard;