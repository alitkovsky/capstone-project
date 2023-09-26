import React from 'react';

import heroImgUrl from './assets/restaurant-food.jpg';
import aboutImgUrla from './assets/chefs-mario-and-adrian_a.jpg';
import aboutImgUrlb from './assets/chefs-mario-and-adrian_b.jpg';


import Hero from './Hero';
import WeekSpecials from './WeekSpecials';
import Testimonials from './Testimonials';
import About from './About';


const Home = () => {
   return (
      <>
         <Hero
            title="Little Lemon"
            subtitle="Chicago"
            description="We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist."
            src={heroImgUrl}
            alt="Little Lemon Restaurant Food"
         />
         <WeekSpecials />
         <Testimonials />
         <About
            title="Little Lemon"
            subtitle="Chicago"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            srca={aboutImgUrla}
            srcb={aboutImgUrlb}
            alt="Chefs Mario and Adrian"
         />
      </>
   );
};

export default Home;