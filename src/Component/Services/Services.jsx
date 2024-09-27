import React from "react";
import "./Services.css";
import SectionTitle from "../../shared/SectionTitle";

import useService from "../../hooks/useServices";
import { Link } from "react-router-dom";
const Services = () => {
 const { services } = useService();

  return (
    <div className="my-[100px]  mx-[5%] text-white  relative overflow-x-hidden">
      <div>
        <SectionTitle
          firstTitle={"Our"}
          SecondTitle={"Services"}
        ></SectionTitle>
        <div className="flex justify-center  w-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10 services  z-10">
            {services.slice(0, 8).map((service, index) => {
              return (
                <div
                  data-aos="fade-in"
                  data-aos-duration="2200"
                  key={service._id}
                  className={` font-serif   px-3 py-2 bg-gradient-to-r from-gray-900 to-gray-950 hover:shadow-2xl   hover:scale-150  duration-300 rounded-md  shadow-xl overflow-hidden border border-teal-400`}
                >
                  <div className="  my-1 w-full h-[150px]">
                    <img
                      src={service.imageLink}
                      className={" bg-slate-500 w-full h-full"}
                      alt=""
                    />
                  </div>

                  <h1 className="my-3 font-[700] text-teal-500 ">
                    {service.service}
                  </h1>
                  <p className="  text-gray-400 leading-[25px]  text-sm">
                    {service.description.slice(0, 130)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="c-round w-[300px] h-[300px] rounded-full absolute left-[-200px] top-[36%]  border  flex  justify-center items-center">
          <h1 className=" c-round text-3xl font-bold text-white text-center">
            +
          </h1>
          <div className=" c-round w-[200px] h-[200px] rounded-full border-2  ">
            <h1 className="text-3xl font-bold text-white text-center">+</h1>
          </div>
        </div>
        <div className=" c-round w-[300px] h-[300px] rounded-full border absolute right-[-200px] top-[18%]  ">
          <h1 className=" c-round text-3xl font-bold text-white text-center">
            +
          </h1>
          <div className=" c-round w-[200px] h-[200px] rounded-full border-2  ">
            <h1 className="text-3xl font-bold text-white text-center">+</h1>
          </div>
        </div>

        <div className="flex justify-center my-20 ">
          <Link to={'/services'}>
            <button className="load-more-btn px-4 py-2 rounded-md shadow-md ">
              More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Services;
