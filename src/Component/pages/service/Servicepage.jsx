import React from 'react'
import HeroBanner from '../../../shared/HeroBanner/HeroBanner';
import useService from '../../../hooks/useServices';

function ServicePage() {
  const {services}=useService()
  return (
    <div>
      <div className=" ">
        <HeroBanner title={"Services"}></HeroBanner>

        <div className="portfolio my-10 container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10 services  z-10">
            {services.map((service, index) => {
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
      </div>
    </div>
  );
}

export default ServicePage