import React, { useEffect, useState } from 'react';
import './Services.css'

 
const Services = () => {
const [visible, setVisible] = useState(8);
const [services, setServices] = useState([])
const [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8,])
const [loading, setLoading] = useState(true) 
  
  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.VITE_SERVER_KEY}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
    
  },[visible])

  const handleLoadMore = () => { 
    const items = visible + 4;
    setVisible(items)
  }


  return (
    <div className="my-[100px]  mx-[5%] text-white  relative overflow-x-hidden">
      <div>
        <h1 className=" text-[30px]  text-center md:text-[50px] font-serif font-[700] italic ">
          {" "}
          Our <span className=' text-teal-500'>Services</span>
        </h1>
        <div className="flex justify-center  w-full z-10">
          <div
         
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10 services  z-10"
          >
            {loading ? (
              <>
                {cards.map((card, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className=" font-serif card md:w-[250px] glass px-3 py-2  h-[250px] overflow-hidden animate-pulse bg-gradient-to-r from-gray-800 to-gray-900  border shadow-lg "
                      >
                        <div className="my-1">
                          <div className="w-16 h-16 bg-slate-500 rounded-full opacity-50" />
                        </div>
                        <div className="full h-[3px] bg-gradient-to-r from-gray-900 to-gray-900 opacity-60" />
                        <h1 className="my-3 font-[700] opacity-50">
                          Loading...
                        </h1>
                        <p className="leading-[25px] text-sm opacity-50">
                          Loading description...
                        </p>
                      </div>
                    </>
                  );
                })}
              </>
            ) : (
              <>
                {services.slice(0, visible).map((service, index) => {
                  return (
                    <div
                      
                      key={service._id}
                      className={` font-serif  px-3 py-2 bg-gradient-to-r from-gray-900 to-gray-950  rounded-md  shadow-xl overflow-hidden border-r border-teal-400`}
                    >
                      <div className="  my-1">
                        <img
                          src={service.imageLink}
                          className={"w-16 h-16 bg-slate-500 rounded-full"}
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
              </>
            )}
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

        <div onClick={handleLoadMore} className="flex justify-center my-20 ">
          <button className="load-more-btn px-4 py-2 rounded-md shadow-md ">
            More services
          </button>
        </div>
      </div>
    </div>
  );
};
export default Services;