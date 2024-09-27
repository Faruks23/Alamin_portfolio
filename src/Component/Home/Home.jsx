import React, { Suspense } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import About from "../About/About";
import Projects from "../Porjects/Projects";
import Review from "../Review/Review";
import Contact from "../Contact/Contact";
import MyLocation from "../MyLocation/MyLocation";
import Team from "../Team/Team";
import Faq from "../Faq/Faq";
import Loading from "../../shared/Loading";

const Home = () => {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Services></Services>

      <Projects></Projects>

      <About></About>

      <Contact></Contact>
      <Team></Team>
      <Review></Review>

      <Faq></Faq>
      <MyLocation></MyLocation>
    </div>
  );
};

export default Home;
