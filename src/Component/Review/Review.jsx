
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
    <div className=" container mx-auto">
      <h1 className="text-center text-[40px] font-serif font-[700] text-white mb-20">
        {" "}
        Trusted Review
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
        {
          Review.map(item => {
            return (
              <SwiperSlide>
                <div className="h-card h-[350px] w-[300px] glass rounded-md shadow-md  text-white p-6">
                  <img
                    className=" w-16 h-16  rounded-full mb-4"
                    src={item.image}
                    alt=""
                  />

                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className=" text-sm leading-[25px] mb-4">{item.description}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">
                      {"★".repeat(Math.round(item.rating))}
                    </span>
                    <span className="">{item.rating}</span>
                  </div>
                  <p className="font-semibold mt-2">
                    - {item.name}
                  </p>
                </div>
              </SwiperSlide>
            );
          })
        }

      </Swiper>
    </div>
  );
};

export default Review;