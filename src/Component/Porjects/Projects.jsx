import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import useProject from "../../hooks/useProject";
const Projects = () => {
  const { project } = useProject();

  return (
    <div className="container mx-auto min-h-[70vh]">
      <SectionTitle firstTitle={"Our"} SecondTitle={"Works"}></SectionTitle>
      <div
        data-aos="fade-up"
        data-aos-duration="2400"
        className=" grid grid-cols-1 md:grid-cols-4 gap-5 my-20  "
      >
        {project.slice(0, 4).map((item, index) => {
          return (
            <>
              <div
                key={item._id}
                className={`card   hover:scale-95 transition-all duration-300 bg-slate-900 shadow-xl max-h-[550px] ${
                  index == 0 && "md:col-span-2 md:row-span-2 max-h-[550px]"
                }  ${
                  index == 3 && "md:col-span-2  h-[400px]"
                } border border-teal-500  text-white`}
              >
                <figure>
                  <img src={item?.image} alt="project Image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item?.name}</h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button className="px-3 inline-block py-2 load-more-btn rounded-md shadow-md w-[150px] text-white mt-5 ">
        View More
      </button>
    </div>
  );
};

export default Projects;
