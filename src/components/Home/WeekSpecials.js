import React from 'react';

import './WeekSpecials.css';
import Card from './Card';

import greekSaladImage from './assets/greeksalad.jpg';
import bruschettaImage from './assets/bruschetta.jpg';
import lemonDessertImage from './assets/lemondessert.jpg';

const offers = [
   {
      title: 'Greek Salad',
      image: greekSaladImage,
      price: '$12.99',
      description: `The famous greek salad of crispy lettuce, peppers, olives and
       our Chicago style feta cheese, garnished with crunchy garlic and rosemary
       croutons.`,
      alt: 'Greek Salad'
   },
   {
      title: 'Bruschetta',
      image: bruschettaImage,
      price: '$5.99',
      description: `Our Bruschetta is made from grilled bread that has been
       smeared with garlic and seasoned with salt and olive oil.`,
      alt: 'Bruchetta'
   },
   {
      title: 'Lemon Dessert',
      image: lemonDessertImage,
      price: '$5.00',
      description: `This comes straight from grandma's recipe book, every last
       ingredient has been sourced and is as authentic as can be imagined.`,
      alt: 'Lemon Dessert'
   },
 ];

const WeekSpecials = () => {
   return (
      <>
      <section className="specials">
         <div className="specials-container container grid">
            <div className="specials-title grid">
               <h1>This week specials!</h1>
               <button>Online Menu</button>
            </div>
            <div className="specials-cards grid">
               {offers.map((offer, index) => (
                  <Card
                     key={index}
                     title={offer.title}
                     price={offer.price}
                     description={offer.description}
                     image={offer.image}
                  />
               ))}
            </div>
         </div>
      </section>
      </>
   )
};

export default WeekSpecials;