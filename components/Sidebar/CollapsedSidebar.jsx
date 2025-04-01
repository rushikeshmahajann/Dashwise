import React from "react";

import Arrow from "../../icons/Arrow";
import { UserButton } from "@clerk/clerk-react";

const CollapsedSidebar = ({ toggleMenu }) => {
  return (
    <section className="collapsed-side-bar-container bg-gray-100 h-[100vh] relative flex flex-col justify-between items-center">
      <button
        onClick={toggleMenu}
        className="arrow-btn stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md cursor-pointer"
      >
        <Arrow />
      </button>
      <UserButton />
    </section>
  );
};

export default CollapsedSidebar;
