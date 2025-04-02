import React, { useState, useEffect } from "react";
import Arrow from "../../icons/Arrow";
import { UserButton } from "@clerk/clerk-react";

const CollapsedSidebar = ({ toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    
      !isMobile? 
        (<section className="collapsed-side-bar-container bg-gray-100 h-[100vh] relative flex flex-col justify-between items-center">
        <button
          onClick={toggleMenu}
          className="arrow-btn stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md cursor-pointer"
        >
          <Arrow />
        </button>
        <UserButton />
      </section>) : (
        <section>
          <button
          onClick={toggleMenu}
          className="stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md cursor-pointer fixed top-10 left-1"
        >
          <Arrow />
        </button>
        </section>
      )
      
    
  );
};

export default CollapsedSidebar;
