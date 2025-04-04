import React from "react";
import "./navbar.css";
import logo from "/Logo.png";
import {useNavigate} from 'react-router';


const Navbar = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <div className="w-full bg-transparent fixed top-0 z-999 flex justify-center">
      <nav className="w-full max-w-[1300px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="w-8" src={logo} alt="" />
          <h2 className="tracking-tighter text-xl lg:text-3xl text-gray-700 mix-blend-difference dark:text-gray-300 font-semibold">
            Dashwise
          </h2>
        </div>

        <div className="hidden sm:flex links-container w-full justify-center gap-10 text-gray-700 text-lg tracking-tight mix-blend-difference">
          <a
            className="hover:text-gray-900 dark:text-gray-400 transition-colors ease-in-out mix-blend-difference"
            href=""
          >
            Features
          </a>
          <a
            className="hover:text-gray-900 transition-colors ease-in-out dark:text-gray-400 mix-blend-difference" 
            href=""
          >
            Reviews
          </a>
          <a
            className="hover:text-gray-900 transition-colors ease-in-out dark:text-gray-400 mix-blend-difference"
            href=""
          >
            FAQ
          </a>
        </div>

        <button onClick={handleSignUp} className="hidden sm:block px-2 py-2 rounded-md text-sm  bg-blue-600 text-white font-neue font-medium text-nowrap hover:bg-blue-500 hover:shadow-lg hover:bg-gradient-to-b from-blue-500 to-blue-700 transition-all ease-in-out">
          Free Trial
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
