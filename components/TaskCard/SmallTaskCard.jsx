import React from "react";
import CheckNaked from "../../icons/CheckNaked";

const SmallTaskCard = ({ title, subHeading, color, textColor }) => {
  return (
    <div className={`rounded-lg ${color} tracking-tight px-4 py-6 flex flex-row gap-4 hover:shadow-lg mb-3 transition-all ease-in-out`}>
      <div className="flex flex-col gap-4">
        <h4 className={`text-lg ${textColor} flex justify-between gap-2 leading-snug`}>
          {title}
        </h4>
        <p className="text-sm text-neutral-500">{subHeading}</p>
      </div>
      <span className="stroke-neutral-700">
        <CheckNaked />
      </span>
    </div>
  );
};

export default SmallTaskCard;
