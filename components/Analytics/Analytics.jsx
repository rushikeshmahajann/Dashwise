import React, { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import LineGraph from "../Charts/LineGraph";
import Bar from "../Charts/Bar";
import Pie from "../Charts/Pie";
import Plus from "../../icons/Plus";
import ArrowDown from "../../icons/ArrowDown";
import SmallTaskCard from "../TaskCard/SmallTaskCard";

const Analytics = () => {
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Your event listeners
      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);
  return (
    <div ref={container} className="bg-gray-100 rounded-xl w-full p-2 h-full">
      <div className="rounded-xl p-4 bg-white w-[18rem]">
        <h3 className="text-xl tracking-tight flex items-center justify-between mb-2">
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
            12
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
          />
          <SmallTaskCard
            title={"UI Component Review"}
            subHeading={
              "Assess and refine React components for consistency and accessibility"
            }
            color={"bg-blue-100"}
          />
          <SmallTaskCard
            title={"Database Schema Update"}
            subHeading={
              "Collaborate with backend team to optimize data relationships"
            }
            color={"bg-yellow-100"}
          />
          <SmallTaskCard
            title={"Deploy Staging Build"}
            subHeading={
              "Push the latest version to the staging environment for QA"
            }
            color={"bg-green-100"}
          />
        </div>
      </div>
      </div>

    
      /* {<div
        className="border-1 rounded-xl p-2 border-neutral-400 w-max"
        data-swapy-slot="a"
      >
        <div className="bg-red w-max h-max " data-swapy-item="a">
          <div className="bg-white"></div>
        </div>
      </div>

      <div data-swapy-slot="b">
        <div className=" w-max h-max " data-swapy-item="b">
          <div></div>
        </div>
      </div>
    </div>
        <>
    <LineGraph />
    <Bar />
    <Pie />
    </> */
  );
};

export default Analytics;
