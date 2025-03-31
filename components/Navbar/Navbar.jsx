import React from "react";
import './navbar.css'
import logo from "/Logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent fixed top-0 z-999 flex justify-center">
      <nav className="w-full max-w-[1300px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="w-8" src={logo} alt="" />
          <h2 className="tracking-tight text-3xl text-gray-700 font-semibold">Dashwise</h2>
        </div>

        <div className="links-container w-full flex justify-center gap-10 text-gray-700 text-lg">
          <a className="font-neue hover:text-gray-900 transition-colors ease-in-out" href="">
            Features
          </a>
          <a className="font-neue hover:text-gray-900 transition-colors ease-in-out" href="">
            Reviews
          </a>
          <a className="font-neue hover:text-gray-900 transition-colors ease-in-out" href="">
            FAQ
          </a>
        </div>

        <button className="get-started-button inline-flex rounded-md bg-blue-600 text-white font-neue font-medium text-nowrap hover:bg-blue-500 transition-all ease-in-out">Get started</button>
      </nav>
    </div>
  );
};

export default Navbar;
