import React from "react";

import image from '../../assets/logo.png'
import { Link } from "react-router";

import { FaGithub } from "react-icons/fa";

const github = ()=>{
    window.open("https://github.com/akashroy651","_blank");
}


const Navbar = () => {
    const links = <>
        <Link to='/'><li className="m-2 text-[#000000]">Home</li></Link>
        <Link to='/about'> <li className="m-2 text-[#000000]">Apps</li></Link>
        <Link to='/installation'><li className="m-2 text-[#000000]">Installation</li></Link>
    </>

    
  return (
    <div className="navbar  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
          <Link to='/'>
          <a className="btn btn-ghost text-xl text-pink-400">
          <img src={image} className="w-13" alt="" />
          HERO.IO</a>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          {links}

        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={github} className="btn bg-amber-700 border-0 text-white"><FaGithub />Contribute</a>
      </div>
    </div> 
  );
};

export default Navbar;
