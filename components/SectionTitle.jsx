import React from "react";

const SectionTitle = ({subHeading, title, icon}) => {
  return (
    <>
      <p className="text-neutral-400 tracking-tight">
        {subHeading}
      </p>
      <h2 className="text-neutral-800 flex gap-1 items-center tracking-tight text-2xl mb-2 stroke-neutral-800">
        {icon}
        {title}
      </h2>
    </>
  );
};

export default SectionTitle;
