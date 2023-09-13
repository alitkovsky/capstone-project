import React from 'react';

import './Card.css';

const Card = (props) => {
   return (
      <>
         <article className="card">
            <img src={props.image} alt={props.alt} />
               <div className="card-title">
                  <h3>{props.title}</h3>
                  <h3 className="price">{props.price}</h3>
               </div>
               <p>{props.description}</p>
               <button >Order a delivery</button>
         </article>
      </>
   )
};

export default Card;