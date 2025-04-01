import React from "react";
import "./sidebar.css";
import Arrow from "../../icons/Arrow";
import { useUser } from "@clerk/clerk-react";
import ArrowUpDown from "../../icons/ArrowUpDown";
import ArrowDown from '../../icons/ArrowDown';
import Graph from "../../icons/Graph";
export { Calendar } from "../../icons/Calendar";
export { Check } from "../../icons/Check";
export { Click } from "../../icons/Click";
export { File } from "../../icons/File";
export { Flash } from "../../icons/Flash";
export { Graph } from "../../icons/Graph";
export { Help } from "../../icons/Help";
export { Invite } from "../../icons/Invite";
export { Setting } from "../../icons/Setting";
export { Stack } from "../../icons/Stack";


const Sidebar = () => {
  const { user } = useUser();
  return (
    <section className="side-bar-container bg-gray-100 h-[100vh]">
      <div className=" w-full h-full flex flex-col items-left">
        <div className="logo-container flex justify-between items-center border-b-1 border-gray-300">
          <div className="flex gap-1 items-end">
            <img className="w-auto h-12" src="/Logo.png" alt="Dashwise" />
            <h2 className="font-medium text-lg text-gray-600 tracking-tighter leading-tight flex flex-col">
              Dashwise{" "}
              <span className="text-gray-400 font-normal text-sm">
                dashwise@helpdesk.com
              </span>
            </h2>
          </div>

          <button className="arrow-btn stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md">
            <Arrow />
          </button>
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-neutral-400 tracking-tight flex gap-1">Overview <button className="stroke-neutral-400"><ArrowDown /></button></h3>
          <button className="stroke-neutral-500 flex gap-2"><Graph />Dashboard</button>
          <button>Calendar</button>
          <button>Kanban Board</button>
        </div>
        {/* TASKS */}
        <div>
          <h3>Tasks</h3>
          <button>Backlog</button>
          <button>In progress</button>
          <button>Validation</button>
          <button>Done</button>
        </div>
        {/* Useful Links */}
        <div>
          <button>Help Center</button>
          <button>Settings</button>
          <button>Invite teams</button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-row justify-between">
          <div className="flex gap-1">
            <img
              className="w-[3rem] rounded-full"
              src={user?.imageUrl}
              alt="Profile"
            />
            <div>
              <h3>{user?.fullName || "User"}</h3>
              <p>
                {user?.primaryEmailAddress?.emailAddress || "xyz@gmail.com"}
              </p>
            </div>
          </div>
          <button className="arrow-btn stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md">
            <ArrowUpDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
