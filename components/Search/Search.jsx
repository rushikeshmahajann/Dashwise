import React, {useEffect} from "react";
import { MdKeyboardCommandKey } from "react-icons/md";
import Magnify from "../../icons/Mangnify";
import './search.css'

const Search = ({setCmdOpen}) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            setCmdOpen((prev) => !prev);
          }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
      }, [setCmdOpen]);
  return (
    <div className="search-container bg-white relative rounded flex items-center border-1 border-neutral-300">
      <button className="stroke-neutral-600">
        <Magnify />
      </button>
      <input onClick={()=>setCmdOpen(true)} className="search-input px-1.5 bg-transparent text-neutral-800 tracking-tight placeholder:text-neutral-400 placeholder:tracking-tight placeholder:text-base focus:outline-none" type="text"
      placeholder="Search" />
      <div className="command-k flex items-center rounded-sm">
      <MdKeyboardCommandKey className="text-neutral-600" /><span className="text-neutral-600">K</span>
      </div>
    </div>
  );
};

export default Search;
