import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import About from '../About/About';
import Projects from '../Porjects/Projects';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';
import MyLocation from '../MyLocation/MyLocation';

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Services></Services>
      <About></About>
      <Projects></Projects>
      <Review></Review>
      <Contact></Contact>

      <MyLocation></MyLocation>

    </div>
  );
};

export default Home;