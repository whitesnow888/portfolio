import React from "react";

const SiteBarLeft: React.FC = () => {
  return (
    <div
      className="absolute flex items-center flex-col justify-center top-0 left-0 ml-8 max-lg:h-[10%] max-lg:ml-4"
      id="home"
    >
      <div className="flex items-center justify-center flex-col">
        <div className="w-[0.25rem] h-[50vh] bg-[--lightblue]"></div>
      </div>
      
    </div>
  );
};

export default SiteBarLeft;
