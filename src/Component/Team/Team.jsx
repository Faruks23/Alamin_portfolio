import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  const [members, setMembers] = useState([]);
  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(
        `https://alaminislam.vercel.app/team/members`
      );
      const data = await response.json();
      console.log(data);
      setMembers(data);
    } catch (error) {
       console.log(error)
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-white container mx-auto">
      <SectionTitle firstTitle={"Our"} SecondTitle={"Teams"}></SectionTitle>
      <div className="flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-[100px]">
          {members.map((member) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="2400"
                key={member._id}
                className=" bg-gradient-to-r from-gray-900 to-gray-950  p-4 rounded-md shadow-md  hover:scale-125 transition-all border-l   h-[300px] w-[250px] border-b border-teal-500 duration-500 opacity-95  text-gray-400 "
              >
                <div className="imag my-2 w-full h-[150px]">
                  <img
                    className="  w-full h-full bg-slate-200"
                    src={member?.image}
                    alt=""
                  />
                </div>
                <div className="info mt-3 text-sm">
                  <h1 className="mt-1  text-emerald-400">Name:{member.name}</h1>
                  <h1 className="">Email:{member.email}</h1>
                  <h1 className="my-1">Role:{member.role}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
