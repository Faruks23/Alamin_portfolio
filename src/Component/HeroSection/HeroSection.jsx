import React, { useEffect, useState } from 'react';
import './HeroSection.css'
import { BiPhoneCall } from "react-icons/bi";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';
import AOS from "aos";
import "aos/dist/aos.css"; 
 
 
const HeroSection = () => {

  useEffect(() => { 
      AOS.init();
  }, [])

  const [socials,setSocialAccounts]=useState([])
   const fetchSocialAccounts = async () => {
     const response = await fetch(`https://alamin-cms.vercel.app/social`);
     const data = await response.json();
     setSocialAccounts(data);
   };

   useEffect(() => {
     fetchSocialAccounts();
   }, []);



  return (
    <div className=" pt-32 relative hero-bg md:h-[650px] ">
      <div className=" w-6 h-5 mask mask-star absolute top-20  box-glow"></div>
      <div className=" w-6 h-5 mask mask-star absolute top-20  right-0 box-glow"></div>

      <div className=" w-3 h-3 mask mask-star absolute top-20 left-20 box-glow"></div>
      <div className=" w-3 h-3 mask mask-star absolute top-20 right-20 box-glow"></div>

      <div className=" w-6 h-5 mask mask-star absolute top-[50%] left-[47%] box-glow"></div>

      <div className=" w-6 h-5 mask mask-star absolute top-20 left-[50%]  box-glow"></div>
      <div className=" w-3 h-3 mask mask-star absolute top-[70%] left-[47%] box-glow"></div>
      <div className=" w-6 h-5 mask mask-star absolute top-[60%] right-[10%]  box-glow"></div>
      <div className=" w-3 h-3 mask mask-star absolute top-[30%] left-[30%]  box-glow"></div>
      <div className=" w-3 h-3 mask mask-star absolute top-[30%] right-[30%]  box-glow"></div>
      <div className=" w-6 h-5 mask mask-star absolute top-[60%] left-[10%]  box-glow"></div>
      <div className=" w-3 h-3 mask mask-star absolute bottom-20  box-glow"></div>
      <div className=" w-3 h-3 mask mask-star absolute bottom-20 right-0  box-glow"></div>

      {/* hero main content */}
      <div className="hr-content md:flex gap-6  justify-between items-center  mx-[5%] ">
        <section className=" text-white py-16 md:w-[50%]">
          <div className="">
            <h1
              data-aos="fade-up"
              data-aos-duration="1100"
              className="md:text-[50px] text-3xl font-[700] mb-10 md:leading-[60px] mt-[-70px]  text-teal-500 font-serif  leading-[50px] "
            >
              Digital Marketing Expert, <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Your Brand's",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Digital Potential",
                  1000,
                ]}
                wrapper="span"
                speed={500}
                repeat={Infinity}
                style={{ fontSize: "30px" }}
              />
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2200"
              className=" capitalize  text-gray-300  font-thin  leading-7"
            >
              Strategizing, optimizing, and delivering digital marketing
              solutions to drive success and growth in the digital
              landscape.Elevating your online presence and engagement through
              innovative digital strategies.
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              className="flex gap-4 mt-10"
            >
              <button className="load-more-btn px-4 py-2 rounded-md">
                Explore
              </button>
              <button className="border shadow-md bg-transparent  px-2 py-1 rounded-[8px] flex items-center gap-2">
                {" "}
                <BiPhoneCall></BiPhoneCall>
                Contact
              </button>
            </div>
          </div>
        </section>
        <div
          data-aos="fade-up"
          data-aos-duration="2700"
          className="image-slider md:w-[50%] flex   justify-center  overflow-hidden h-[500px] "
        >
         
            <img
              src="alamin1.jpg"
              alt=""
              className="w-full h-full shadow-2xl  blur-[1px] hero-image md:w-[70%]"
            />
          
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2200"
        className="fixed md:top-[25%] z-20 top-[30%] right-0 p-2"
      >
        <ul className="social-account">
          <li className="heartbeat">
            <a href={socials[0]?.link}>
              <BsFacebook className="w-10 my-6 h-10 rounded-full"></BsFacebook>
            </a>
          </li>
          <li className="heartbeat">
            <a href={socials[2]?.link}>
              <BsLinkedin className="w-10 my-6 h-10 rounded-full"></BsLinkedin>
            </a>
          </li>
          <li className="heartbeat">
            <a href={socials[1]?.link}>
              <BsInstagram className="w-10 my-6 h-10 rounded-full"></BsInstagram>
            </a>
          </li>
          <li className="heartbeat">
            <a href={socials[4]?.link}>
              <SiUpwork className="w-10 my-6 h-10 rounded-full"></SiUpwork>
            </a>
          </li>
          <li className="heartbeat">
            <a href={socials[3]?.link}>
              <SiFiverr className="w-10 my-6 h-10 rounded-full"></SiFiverr>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;