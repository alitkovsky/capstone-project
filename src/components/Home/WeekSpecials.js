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
      <section className="specials grid">
         <div className="specialsContainer grid container">
            <div className="specialsTitle grid">
               <h1>This week specials!</h1>
               <button>Online Menu</button>
            </div>
            <div className="specialsCards grid">
               <Card
                  title={offers[0].title}
                  price={offers[0].price}
                  description={offers[0].description}
                  image={offers[0].image}
               />
               <Card
                  title={offers[1].title}
                  price={offers[1].price}
                  description={offers[1].description}
                  image={offers[1].image}
               />
               <Card
                  title={offers[2].title}
                  price={offers[2].price}
                  description={offers[2].description}
                  image={offers[2].image}
               />
            </div>
         </div>
      </section>
      </>
   )
};

export default WeekSpecials;