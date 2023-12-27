
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import './Review.css'
const Review = () => {


  const [Review, setReview] = useState([])
  useEffect(() => {
    fetch('Review.json')
      .then(res => res.json())
      .then(data => {
       setReview(data)
     })

  },[])

  return (
    <div className=" container mx-auto mt-[100px]">
      <h1 className=" text-[40px] font-serif font-[700] italic text-white mb-20">
        {" "}
        <span className=" text-teal-500"> Trusted </span> Review
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Review.map((item) => {
          return (
            <SwiperSlide>
              <div className=" animate-pulse bg-gradient-to-r from-gray-900 to-gray-950 rounded-md shadow-xl  text-white p-6 border-t border-teal-500 border-b">
                <img
                  className=" w-16 h-16  rounded-full mb-4"
                  src={item.image}
                  alt=""
                />

                <h3 className="text-xl  text-teal-500 font-semibold mb-2">
                  {item.name}
                </h3>
                <p className=" text-sm text-gray-400 leading-[25px] mb-4">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">
                    {"★".repeat(Math.round(item.rating))}
                  </span>
                  <span className="">{item.rating}</span>
                </div>
                <p className="font-semibold mt-2">- {item.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Review;