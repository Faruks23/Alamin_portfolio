import React, { useEffect } from 'react';
import './HeroSection.css'
import { BiPhoneCall } from "react-icons/bi";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

 
 
const HeroSection = () => {

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
        <section class=" text-white py-16 md:w-[50%]">
          <div class="">
            <h1 class="md:text-[50px] text-3xl font-[700] mb-10 md:leading-[60px] mt-[-70px]  text-teal-500 font-serif">
              Digital Marketing Expert, <br /> Your Brand's Digital Potential{" "}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              class=" font-mono capitalize  text-gray-300  font-thin"
            >
              Strategizing, optimizing, and delivering digital marketing
              solutions to drive success and growth in the digital
              landscape.Elevating your online presence and engagement through
              innovative digital strategies.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="load-more-btn px-4 py-2 rounded-md">Explore</button>
              <button className="border shadow-md bg-transparent  px-2 py-1 rounded-[8px] flex items-center gap-2">
                {" "}
                <BiPhoneCall></BiPhoneCall>
                Contact
              </button>
            </div>
          </div>
        </section>
        <div className="image-slider md:w-[50%] flex   justify-center  overflow-hidden h-[500px] ">
          <img
            src="digital.gif"
            alt=""
            className="w-full h-full shadow-2xl  blur-[1px]"
          />
        </div>
      </div>
      <div className="fixed md:top-[25%] z-20 top-[60%] right-0 p-2">
        <ul className="social-account">
          <li className="heartbeat">
            <a href="'/">
              <BsFacebook className="w-10 my-6 h-10 rounded-full"></BsFacebook>
            </a>
          </li>
          <li className="heartbeat">
            <a href="'/">
              <BsLinkedin className="w-10 my-6 h-10 rounded-full"></BsLinkedin>
            </a>
          </li>
          <li className="heartbeat">
            <a href="'/">
              <BsInstagram className="w-10 my-6 h-10 rounded-full"></BsInstagram>
            </a>
          </li>
          <li className="heartbeat">
            <a href="'/">
              <SiUpwork className="w-10 my-6 h-10 rounded-full"></SiUpwork>
            </a>
          </li>
          <li className="heartbeat">
            <a href="'/">
              <SiFiverr className="w-10 my-6 h-10 rounded-full"></SiFiverr>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;