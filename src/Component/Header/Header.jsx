import React, { useEffect } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Header = () => {
 const handleScrollToContact = () => {
   const contactSection = document.getElementById("contact");
   
   if (contactSection) {
     contactSection.scrollIntoView({ behavior: "smooth" });
   }
 };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="navbar px-[5%] bg-opacity-50 backdrop-blur text-white z-50   fixed top-0 bg-transparent shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="  menu-sm dropdown-content mt-3 z-[10] p-2 shadow  rounded-box  w-[250px]  flex flex-col gap-3 bg-black text-white py-10 "
          >
            <li className="hover:underline ">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="hover:underline ">
              <NavLink to={"/portfolio"}>Portfolio</NavLink>
            </li>
            <li className="hover:underline ">
              <NavLink to={"/"}>About</NavLink>
            </li>
            <li className="hover:underline ">
              <NavLink to={"/services"}>Services</NavLink>
            </li>
          </ul>
        </div>
        <a
          data-aos="fade-down"
          data-aos-duration="2100"
          className=" font-serif text-xl italic font-[700] md:text-[42px]"
        >
          <div className="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".5em" textAnchor="middle">
                All Amin
              </text>
            </svg>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 items-center hover:text-white">
          <li data-aos="fade-down" data-aos-duration="2200">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li data-aos="fade-down" data-aos-duration="2300">
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
          </li>
          <li data-aos="fade-down" data-aos-duration="2400">
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li data-aos="fade-down" data-aos-duration="2500">
            <NavLink to={"services"}>Services</NavLink>
          </li>
        </ul>
        <div
          data-aos="fade-down"
          data-aos-duration="2600"
          className="ml-0 md:ml-32 "
        >
         
          
          <button
            onClick={handleScrollToContact}
              type="button"
              className="  border-0 px-3 py-1 rounded-md  bg-teal-500 text-white capitalize font-serif"
            >
              contact
            </button>
       
        </div>
      </div>
    </div>
  );
};

export default Header;