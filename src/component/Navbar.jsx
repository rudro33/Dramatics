import React from "react";
import { NavLink } from "react-router";
import Avater from "../assets/Man.jpg"

const Navbar = ({ searchText, setSearchText }) => {

  const activeStyle = ({ isActive }) =>
    isActive ? "text-yellow-400" : "text-white";

  const link = (
    <>
      <NavLink to='/' className={activeStyle}><li>HOME</li></NavLink>
      <NavLink to='/show' className={activeStyle}><li>TV SHOW</li></NavLink>
      <NavLink to='/subscription' className={activeStyle}><li onClick={() => setStep(1)}>SUBSCRIPTION</li></NavLink>
       {/* <NavLink to='/' className={activeStyle}><li></li></NavLink> */}
      
    </>
  );

  return (
   <div className="navbar bg-black/40 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-100 shadow-md font-montser">
  <div className="w-11/12 mx-auto flex justify-between items-center">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
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
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-black/60 backdrop-blur-lg rounded-box z-[1] mt-3 w-52 p-2 shadow text-white"
      >
        {link}
      </ul>
    </div>

    <div className="flex items-center gap-10">
      <a className="text-2xl font-semibold text-yellow-400 tracking-wide font-grif">
        DRAMATIC
      </a>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 text-white">{link}</ul>
      </div>
    </div>
  </div>

  <div className="navbar-end flex gap-6">
    <label className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 border border-transparent focus-within:border-yellow-400 transition duration-300">
      <svg
        className="h-[1em] opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
        className="bg-transparent outline-none text-sm text-white placeholder-white/60 w-24 md:w-40"
      />
    </label>

    <div className="avatar">
      <div className="ring-[#facc15] rounded-full ring-2 ring-offset-2 ring-offset-black/40">
        <img
          className="w-8"
          src={Avater}
          alt="User"
        />
      </div>
    </div>
  </div>
  </div>
</div>

  );
};

export default Navbar;