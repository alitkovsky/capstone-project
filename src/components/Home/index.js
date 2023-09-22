import React from 'react';

import heroImgUrl from './assets/restaurant-food.jpg';

import Hero from './Hero';
import WeekSpecials from './WeekSpecials';
import Testimonials from './Testimonials';
import About from './About';


const Home = () => {
   return (
      <>
         <Hero
            title='Little Lemon'
            subtitle='Chicago'
            description='We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.'
            src={heroImgUrl}
            alt='Little Lemon Restaurant Food'
         />
         <WeekSpecials />
         <Testimonials />
         <About />
      </>
   );
};

export default Home;