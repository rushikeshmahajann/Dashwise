import React from "react";
import ArrowDiagonal from "../icons/ArrowDiagonal";

const TicketBox = ({ title, subHeading, image, onlineStatus }) => {
  return (
    <div className="w-full px-3 py-2 border-neutral-300 border flex items-start gap-4 justify-between tracking-tight rounded-xl mb-4 hover:shadow-lg transition-all ease-in-out">
      <div className="w-15 lg:h-full rounded-full overflow-hidden">
        <img className="w-12 h-12 object-cover" src={image} alt="Person" />
      </div>

      <div className="w-full">
        <h5 className="text-base xl:text-lg text-neutral-800 flex items-center justify-between">
          {title}
          <span
            className={`${
              onlineStatus === "online"
                ? "bg-green-100 text-green-950"
                : "bg-red-100 text-red-950"
            } text-xs px-1 py-0.5 rounded-lg`}
          >
            {onlineStatus}
          </span>
        </h5>
        <p className="text-sm xl:text-base text-neutral-600">{subHeading}</p>
        <button className="flex mt-2 text-sm sm:text-base items-center stroke-neutral-400 text-neutral-600 bg-neutral-100 rounded-xl px-1 py-1 sm:px-2 sm:py-2 hover:shadow-sm transition-all ease-in-out">
          check <ArrowDiagonal />
        </button>
      </div>
    </div>
  );
};

export default TicketBox;
