import React from 'react';

import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  
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
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box  w-[300px] h-[400px] flex flex-col gap-3"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Portfolio</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Services</Link>
            </li>
          </ul>
        </div>
        <a className=" font-serif text-xl italic font-[700] md:text-[42px]">
          Digital <span className=" text-teal-500"> World</span>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Services</Link>
          </li>
        </ul>
        <div className='ml-0 md:ml-32'>
          <button type='button' className="btn btn-sm bg-transparent border-0  bg-teal-500 text-white capitalize font-serif"> Heir Me</button>
         </div>
        
      </div>
    </div>
  );
};

export default Header;