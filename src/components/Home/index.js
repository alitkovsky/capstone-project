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
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id aliquam ultricies, nunc sapien ultricies nunc, vitae ultricies nisl nunc vitae nisl.'
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