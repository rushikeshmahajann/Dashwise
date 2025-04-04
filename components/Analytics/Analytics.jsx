import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import Plus from "../../icons/Plus";
import ArrowDown from "../../icons/ArrowDown";
import SmallTaskCard from "../TaskCard/SmallTaskCard";
import TicketBox from "../TicketBox";
import ArrowDiagonal from "../../icons/ArrowDiagonal";
import PieChart from "../Charts/PieChart";
import LineGraph from "../Charts/LineGraph";
import Calendar from "../../icons/Calendar";
import { SiGooglemeet } from "react-icons/si";
import { TbBrandZoom } from "react-icons/tb";
const Analytics = () => {
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);

      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);
  return (
    <div
      className="bg-gray-100 rounded-xl w-full p-6 lg:h-full mx-auto"
    >
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-2 2xl:max-w-[90%]">
        <div className="rounded-xl p-4 bg-white w-full xl:max-w-xl h-full lg:h-max">
          <h3 className="analytics-title">
            My Tasks{" "}
            <span className="stroke-neutral-400 hover:stroke-neutral-600">
              <Plus />
            </span>
          </h3>
          <div className="gap-2 flex tracking-tight mb-2">
            <button className="task-container-button">Today</button>
            <button className="task-container-button">Tomorrow</button>
          </div>
          <button className="on-going-task w-full flex items-center tracking-tight mb-2 justify-between  stroke-neutral-800 hover:stroke-neutral-100">
            <span className="rounded-full bg-neutral-500 text-white px-2">
              04
            </span>{" "}
            On Going Task <ArrowDown />
          </button>

          <div className="overflow-y-auto h-[30rem]">
            <SmallTaskCard
              color={"bg-orange-100"}
              title={"Github - Upload Dev Files & Images"}
              subHeading={
                "Collaborate with developers to ensure seamless media integration"
              }
              textColor={"text-orange-950"}
            />
            <SmallTaskCard
              title={"UI Component Review"}
              subHeading={
                "Assess and refine React components for consistency and accessibility"
              }
              color={"bg-blue-100"}
              textColor={"text-blue-950"}
            />
            <SmallTaskCard
              title={"Database Schema Update"}
              subHeading={
                "Collaborate with backend team to optimize data relationships"
              }
              color={"bg-yellow-100"}
              textColor={"text-yellow-950"}
            />
            <SmallTaskCard
              title={"Deploy Staging Build"}
              subHeading={
                "Push the latest version to the staging environment for QA"
              }
              color={"bg-green-100"}
              textColor={"text-green-950"}
            />
          </div>
        </div>
        <div ref={container} className="md:flex md:flex-col md:gap-2 h-max">
          {/* Data Swappy A */}
          <div data-swapy-slot="a">
            <div
              data-swapy-item="a"
              className="rounded-xl p-4 bg-white w-full  h-full xl:max-w-xl tracking-tight mb-2"
            >
              <h3 className="analytics-title">
                Project Overview
                <span className="stroke-neutral-700">
                  <ArrowDiagonal />
                </span>
              </h3>
              <div className="w-full mb-2 flex justify-center items-center">
                <PieChart />
              </div>

              <div className="flex gap-1.5 items-center justify-center">
                <p className="bg-yellow-100 text-yellow-950 px-1 py-0.5 rounded-sm">
                  Pending
                </p>
                <p className="bg-blue-100 text-blue-950 px-1 py-0.5 rounded-sm">
                  Ongoing
                </p>
                <p className="bg-orange-100 text-orange-950 px-1 py-0.5 rounded-sm">
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div data-swapy-slot="b">
            <div
              data-swapy-item="b"
              className="rounded-xl p-4 bg-white w-full xl:max-w-xl h-full xl:h-[20rem] tracking-tight"
            >
              <h3 className="analytics-title">
                Income vs Expense
                <span className="stroke-neutral-700">
                  <ArrowDiagonal />
                </span>
              </h3>
              <LineGraph />
              <div className="flex gap-1.5 items-center justify-center">
                <p className="bg-pink-100 text-pink-950 px-1 py-0.5 rounded-sm">
                  Income
                </p>
                <p className="bg-blue-100 text-blue-950 px-1 py-0.5 rounded-sm">
                  Expense
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl p-4 bg-white w-full xl:max-w-xl h-full lg:h-max">
          <h3 className="analytics-title">
            My Meetings{" "}
            <span className="stroke-neutral-400 hover:stroke-neutral-600">
              <Calendar />
            </span>
          </h3>
          <div className="tracking-tight mb-2">
            <section className="flex flex-col gap-1 tracking-tight">
              {/* Meetings-Container */}
              <div className="flex w-full justify-between stroke-neutral-400 hover:stroke-neutral-600 border-neutral-300 border rounded-xl px-3 py-3 relative hover:shadow-sm transition-all ease-in-out">
                <div className="flex flex-col justify-between w-10">
                  <header className="text-xs xl:text-sm text-neutral-400 text">
                    My Meetings
                  </header>
                  <p className="text-sm xl:text-base">6:45</p>
                </div>
                <div className="flex flex-col justify-between w-20">
                  <header className="text-neutral-800 text-sm xl:text-base">
                    App Project
                  </header>
                  <p className="text-xs xl:text-base flex items-center just gap-2 text-neutral-400">
                    Meet{" "}
                    <span className="text-neutral-500">
                      <SiGooglemeet />
                    </span>
                  </p>
                </div>
                <div>
                  <ArrowDiagonal />
                </div>
              </div>
              <div className="flex w-full justify-between stroke-neutral-400 hover:stroke-neutral-600 border-neutral-300 border rounded-xl px-3 py-3 relative hover:shadow-sm transition-all ease-in-out">
                <div className="flex flex-col justify-between w-10">
                  <header className="text-xs xl:text-sm text-neutral-400 text">
                    My Meetings
                  </header>
                  <p className="text-sm xl:text-base">8:35</p>
                </div>
                <div className="flex flex-col justify-between w-20">
                  <header className="text-neutral-800 text-sm xl:text-base">
                    User Research
                  </header>
                  <p className="text-xs xl:text-sm flex items-center just gap-2 text-neutral-400">
                    Zoom{" "}
                    <span className="text-neutral-500">
                      <TbBrandZoom />
                    </span>
                  </p>
                </div>
                <div>
                  <ArrowDiagonal />
                </div>
              </div>
              <p className="text-neutral-600 text-sm px-1 py-1 stroke-neutral-600 flex justify-between items-center">
                See All Meetings <ArrowDown />
              </p>
              {/* Meetings Container END */}
            </section>
            {/* Tickets Section */}
            <section>
              <TicketBox
                title={"Rushikesh Mahajan"}
                subHeading={"I just want you to see this frontend code."}
                image={"/4.jpg"}
                onlineStatus={"online"}
              />
              <TicketBox
                title={"Jacob Martinez"}
                subHeading={"I need 3 more features on the mobile app design."}
                image={"/1.jpg"}
                onlineStatus={"offline"}

              />
              <TicketBox
                title={"Kelly Bell"}
                subHeading={"I need 3 more features on the mobile app design"}
                image={"/2.jpg"}
                onlineStatus={"online"}
              />
            </section>
            {/* Tickets Section End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
