import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';


import './Card.css';

const deliveryIcon = <FontAwesomeIcon icon={faMotorcycle} size="sm" className="fa-motorcycle" />;

const Card = (props) => {
   return (
      <>
         <article className="card grid">
            <img
               src={props.image}
               alt={props.alt}
               className="card-img"
            />

            <div className="card-title grid">
               <h3 className="card-title">{props.title}</h3>
               <h3 className="price">{props.price}</h3>
            </div>

            <p>{props.description}</p>

            <a href="/" className="card-button">Order a delivery  {deliveryIcon}</a>
         </article>
      </>
   )
};

export default Card;