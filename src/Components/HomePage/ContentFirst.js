import React from "react";
import Demo from "../assets/images/demoView.svg";
import Side from "../assets/images/SideDesign.svg";
import videoFirst from "../assets/images/dummyOne.svg";

const ContentFirst = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-5 md:mt-0">
          <p className="text-[#1B1A20] font-poppins text-3xl md:text-5xl font-medium leading-[1.2] md:leading-[57.6px]">
            Create digital wings for shop floors
          </p>
          <p className="text-[#657385] text-base md:text-lg font-poppins">
            Appify your manufacturing process and streamline the end-to-end
            manufacturing process.
          </p>
          <div className="mt-5 md:mt-10 flex flex-col md:flex-row">
            <button className="getStarted text-base md:text-2xl font-poppins font-medium text-white w-full md:w-[202px] h-[68px] rounded-[12px]">
              Get Started
            </button>
            <div className="flex mt-2 md:mt-0 md:ml-5 cursor-pointer">
              <img
                src={Demo}
                alt=""
                className="w-[58px] h-[58px]"
              />
              <p className="text-[#1600C9] font-poppins text-base md:text-[25px] font-semibold ml-2 md:ml-3 mt-3">
                View Demo
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <img src={Side} alt="" className="w-[15%] ml-[0%] 2xl:ml-[0%]" />
          <img
            src={videoFirst}
            alt=""
            className="relative z-[1] bottom-[20%] md:bottom-[30%] mr-auto ml-[35px] mt-5 md:mt-0 md:ml-5 w-full md:w-[713px] h-[40%] md:h-[373px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentFirst;
