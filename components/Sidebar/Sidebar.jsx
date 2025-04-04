import React from "react";
import "./sidebar.css";
import Arrow from "../../icons/Arrow";
import { useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import ArrowUpDown from "../../icons/ArrowUpDown";
import ArrowDown from "../../icons/ArrowDown";
import Graph from "../../icons/Graph";
import Calendar from "../../icons/Calendar";
import Check from "../../icons/Check";
import Click from "../../icons/Click";
import File from "../../icons/File";
import Flash from "../../icons/Flash";
import Help from "../../icons/Help";
import Invite from "../../icons/Invite";
import Setting from "../../icons/Setting";
import Stack from "../../icons/Stack";
import Bulb from "../../icons/Bulb";
import { useState, useEffect } from "react";

const Sidebar = ({ toggleMenu, onMenuClick }) => {
  const { user } = useUser();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section
        className={`${
          isMobile ? "fixed" : null
        } top-0 left-0 sm:block side-bar-container bg-gray-100 h-[100vh] z-[890] md:z-0`}
      >
        <div className="w-full h-max">
          <div className="logo-container flex justify-between items-center border-b-1 border-gray-300">
            <div className="flex gap-2 items-end">
              <img
                className="w-auto rounded-xl h-12"
                src="/Logo.png"
                alt="Dashwise"
              />
              <h2 className="font-medium text-lg text-gray-600 tracking-tighter leading-tight flex flex-col">
                Dashwise{" "}
                <span className="text-gray-400 font-normal text-sm">
                  dashwise@helpdesk.com
                </span>
              </h2>
            </div>

            <button
              onClick={()=>toggleMenu()}
              className="arrow-btn stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md cursor-pointer"
            >
              <Arrow />
            </button>
          </div>

          {/* Overview */}
          <div>
            <h3 className="side-bar-menu-section">
              Overview{" "}
              <button className="stroke-gray-400">
                <ArrowDown />
              </button>
            </h3>
            <button
              onClick={() => {
                onMenuClick("home");
                if (isMobile) {
                  toggleMenu();
                }
              }}
              className="side-bar-menu-title"
            >
              <Graph />
              Dashboard
            </button>
            <button
              onClick={() => {
                onMenuClick("calendar");
                if (isMobile) {
                  toggleMenu();
                }
              }}
              className="side-bar-menu-title"
            >
              <Calendar />
              Calendar
            </button>
            <button
              onClick={() => {
                onMenuClick("kanban");
                if (isMobile) {
                  toggleMenu();
                }
              }}
              className="side-bar-menu-title"
            >
              <Stack />
              Kanban Board
            </button>
            <button
              onClick={() => {
                onMenuClick("flow-designer");
                if (isMobile) {
                  toggleMenu();
                }
              }}
              className="side-bar-menu-title"
            >
              <Bulb />
              Flow Designer
            </button>
          </div>

          {/* TASKS */}
          <div>
            <h3 className="side-bar-menu-section">
              Tasks
              <button className="stroke-gray-400">
                <ArrowDown />
              </button>
            </h3>
            <button className="side-bar-menu-title">
              <File />
              Backlog
            </button>
            <button className="side-bar-menu-title">
              <Flash />
              In progress
            </button>
            <button className="side-bar-menu-title">
              <Click />
              Validation
            </button>
            <button className="side-bar-menu-title">
              <Check />
              Done
            </button>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="side-bar-menu-section">
              Useful Links
              <button className="stroke-gray-400">
                <ArrowDown />
              </button>
            </h3>
            <div className="flex flex-col">
              <button className="side-bar-menu-title">
                <Help /> Help Center
              </button>
              <button className="side-bar-menu-title">
                <Setting />
                Settings
              </button>
              <button className="side-bar-menu-title">
                <Invite />
                Invite teams
              </button>
            </div>
          </div>

          {/* Profile Section */}
        </div>
        <div className="flex flex-row gap-10 justify-between absolute bottom-8">
          <div className="flex gap-1">
            <UserButton />
            <div>
              <h3 className="font-medium text-lg text-gray-600 tracking-tighter leading-tight flex flex-col">
                {user?.fullName || "User"}
              </h3>
              <p className="text-gray-500 font-normal text-sm">
                {user?.primaryEmailAddress?.emailAddress || "xyz@gmail.com"}
              </p>
            </div>
          </div>
          <button className="arrow-btn stroke-neutral-500 hover:border-[1px] hover:shadow-md border-neutral-300 rounded-md cursor-pointer flex items-center">
            <ArrowUpDown />
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
