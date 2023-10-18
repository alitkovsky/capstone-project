import React from 'react';

import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

import client1 from './assets/clientPhoto1.png';
import client2 from './assets/clientPhoto2.png';
import client3 from './assets/clientPhoto3.png';

const testimonials = [
   {
      name: 'Jane',
      lastName: 'Airinous',
      rating: '★★★★',
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`,
      clientImage: client1,
      slogan: 'It was a very good experience'
   },
   {
      name: 'Jane',
      lastName: 'Doesun',
      rating: '★★★★★',
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`,
      clientImage: client2,
      slogan: 'It was a very good experience'
   },
   {
      name: 'John',
      lastName: 'Smithson',
      rating: '★★★',
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.`,
      clientImage: client3,
      slogan: 'It was a very good experience'
   }
];

const Testimonials = () => {
   return (
      <>
         <section className="testimonials grid">
            <div className="testimonials-container grid container">
               <div className="testimonials-title grid">
                  <h1>What our clients say about us</h1>
               </div>
               <div className="testimonials-cards grid">

                  {testimonials.map((testimonial, index) => (
                     <TestimonialCard
                        key={index}
                        name={testimonial.name}
                        lastName={testimonial.lastName}
                        rating={testimonial.rating}
                        review={testimonial.review}
                        image={testimonial.clientImage}
                        slogan={testimonial.slogan}
                     />
                  ))}
               </div>
            </div>
         </section>
      </>
   )
};

export default Testimonials;