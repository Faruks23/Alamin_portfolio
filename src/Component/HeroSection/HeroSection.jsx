import React from 'react';
import './HeroSection.css'
import { BiPhoneCall } from "react-icons/bi";
const HeroSection = () => {
  return (
    <div className=" pt-32 relative hero-bg h-[700px] ">
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
      <div className="hr-content md:flex gap-6  justify-between items-center  mx-[5%]">
        <section class=" text-white py-16 md:w-[50%]">
          <div class="">
            <h1 class="md:text-[50px] text-3xl font-[700] mb-4 md:leading-[60px] ">
              Digital Marketing Expert, <br /> Your Brand's Digital Potential{" "}
            </h1>
            <p class="text-lg capitalize  font-thin">
              Strategizing, optimizing, and delivering digital marketing
              solutions to drive success and growth in the digital
              landscape.Elevating your online presence and engagement through
              innovative digital strategies.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="btn-custom">Explore</button>
              <button className="border shadow-md bg-transparent  px-2 py-1 rounded-[8px] flex items-center gap-2">
                {" "}
                <BiPhoneCall></BiPhoneCall>
                Contact
              </button>
            </div>
          </div>
        </section>
        <div className="image-slider md:w-[50%] flex justify-center overflow-hidden h-[400px] ">
          <img
            src="https://img.freepik.com/foto-gratis/retrato-hombre-negocios-feliz-tableta-digital_1262-12831.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;