import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import About from '../About/About';
import Projects from '../Porjects/Projects';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';
import MyLocation from '../MyLocation/MyLocation';
import Team from '../Team/Team';

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Services></Services>
      <Projects></Projects>
      <About></About>

      <Contact></Contact>
      <Team></Team>
      <MyLocation></MyLocation>
      <Review></Review>
    </div>
  );
};

export default Home;