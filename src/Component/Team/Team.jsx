 import React, { useEffect, useState } from 'react';

 
 const Team = () => {
  const [members, setMembers] = useState([]);
  const fetchTeamMembers = async () => {
    const response = await fetch(`https://alaminislam.vercel.app/team/members`);
    const data = await response.json();
    console.log(data);
    setMembers(data);
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

   
   
  return (
    <div className="text-white container mx-auto">
      <h1 className="  text-4xl font-bold font-serif italic">
        Our <span className=" text-teal-500">Teams </span>{" "}
      </h1>
      <div className="flex justify-center">

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-[100px]">
            {members.map((member) => {
              return (
                <div
                  key={member._id}
                  className=" bg-gradient-to-r from-gray-900 to-gray-950  p-4 rounded-md shadow-md  hover:scale-125 transition-all border-l   h-[300px] w-[250px] border-b border-teal-500 duration-500 opacity-95  text-gray-400 "
                >
                  <div className="imag my-2">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={member?.image}
                      alt=""
                    />
                  </div>
                  <div className="info mt-3 text-sm">
                    <h1 className="mt-1  text-emerald-400">
                      Name:{member.name}
                    </h1>
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