import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto rounded-lg glass md:h-[300px] w-full mb-[100px] md:flex justify-between">
      <div className='p-2 md:p-0 md:w-[400px] h-full'>
        <img
          src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-feliz-tableta-digital_1262-12831.jpg"
          alt=""
          className="md:w-[400px] h-full w-full rounded-md"
        />
      </div>

      <div className="about text-white p-6 font-serif w-[100%]">
        <h1 className="text-[40px] font-[700]">Md.Al-Amin</h1>
        As a digital marketer, I am a dynamic and data-driven professional who
        excels in navigating the complex and ever-changing world of online
        marketing. With a passion for all things digital, I thrive on crafting
        strategic campaigns that drive results. My expertise spans various
        areas, including search engine optimization (SEO), social media
        marketing, content creation, and email campaigns. I am dedicated to
        enhancing brand visibility, <br /> engaging target audiences, and
        optimizing conversion rates. In an environment where algorithms and
        consumer behavior are in constant flux, I take pride in my ability to
        analyze data, interpret consumer insights, and adapt to emerging trends.
        My mission is to help businesses succeed in the digital age by creating
        compelling online experiences and delivering measurable results. With a
        strong work ethic and a commitment to excellence, I am ready to take on
        any digital marketing challenge and drive success for your brand.
      </div>
    </div>
  );
};

export default About;