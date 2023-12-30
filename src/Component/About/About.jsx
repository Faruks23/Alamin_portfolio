import React, { useEffect } from 'react';
import SectionTitle from '../../shared/SectionTitle';

import AOS from "aos";
import "aos/dist/aos.css"; 
 
const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <SectionTitle
          firstTitle={"Who"}
          SecondTitle={"we are"}
          className={"text-right"}
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            className=" px-20  w-full "
          >
            <img
              src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-feliz-tableta-digital_1262-12831.jpg"
              alt=""
              className="md:w-[400px] h-[400px] w-full rounded-md"
            />
            <h1 className=" font-bold text-white text-2xl mb-1 mt-10">
              Alamin
            </h1>
            <p className="  text-teal-500">Professional Digital marketer</p>
          </div>

          <div className="about md:pt-[100px] pt-7  p-4   text-white px-5 font-serif  border-l border-teal-500 ">
            <h1
              data-aos="fade-up"
              data-aos-duration="2200"
              className="font-bold text-3xl mb-4  uppercase leading-10"
            >
              Versatile Digital Marketer. <br />
              Driving Success Through Strategy and. Engagement
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2500"
              className=" mb-10 font-mono pr-7 text-justify"
            >
              {" "}
              Experienced digital marketer skilled in SEO, social media, and
              content creation. I excel at enhancing brand visibility, engaging
              audiences, and driving conversions. Proficient in data analysis
              and adaptive to changing trends. Dedicated to delivering
              measurable results and creating compelling online experiences.
            </p>
            <img
              data-aos="fade-up"
              data-aos-duration="2600"
              src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-feliz-tableta-digital_1262-12831.jpg"
              alt=""
              className="md:w-[400px] h-[400px] w-full rounded-md"
            />
            <p
              data-aos="fade-left"
              data-aos-duration="2700"
              className="text-right px-5 py-3 bg-teal-500 rounded-md shadow-lg float-right mt-5"
            >
              Heir Me
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;