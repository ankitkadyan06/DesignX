import React from "react";
import whiteArrow from "../assets/images/whiteArrow.svg"

const HeaderAbout = () => {
  return (
    <div>
      <div className="flex headerSecback w-full">
        <div>
          <p className="text-[28px] sm:text-[38px] xl:text-[48px] font-robotoSlab text-white ml-[10px] sm:ml-[50px] xl:ml-[100px]  pt-[25px] lg:pt-[35px]">
            About us
          </p>
          <p className="ml-[10px] sm:ml-[50px] xl:ml-[100px] text-[16px] sm:text-[20px] xl:text-[28px] text-white font-poppins">
            Pre-create next generation shopfloors
          </p>
          <p className="ml-[10px] sm:ml-[50px] xl:ml-[100px] text-[16px] sm:text-[20px] xl:text-[28px] text-white font-poppins">
            At DesignX
          </p>
        </div>
        <img src={whiteArrow} alt="" className="w-[209px] h-[192px] mt-[30px] ml-[60px]"/>
      </div>
    </div>
  );
};

export default HeaderAbout;
