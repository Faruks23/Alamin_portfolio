import React from 'react';

import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

  return (
    <div className="navbar mx-[5%] bg-opacity-50 backdrop-blur text-white z-50   fixed top-0 bg-transparent shadow-md">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>Item 1</li>
            <li>Parent</li>
            <li>Item 3</li>
          </ul>
        </div>
        <a className="normal-case text-xl">Al-Amin</a>
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
      </div>
    </div>
  );
};

export default Header;