import React from "react";
import ImgOne from "../assets/images/imageOne.svg";
import DashImg from "../assets/images/dashImg.svg";
import { Link } from "react-router-dom";

const ContentSecond = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="block md:grid md:grid-cols-2 gap-4 mt-[60px] pt-[1px] ml-[5px] md:ml-[100px]">
        <img src={ImgOne} alt="" className="w-[615px] h-[307px]" />
        <div className="mt-[34px]">
          <p className="text-[16px] sm:text-[20px] xl:text-[28px] font-poppins font-medium">
            Digital Factory Operating System
            <span className="text-[#0027D6]">(DFOS)</span>
          </p>
          <p className="text-[#657385] text-[10px] sm:text-[12px] xl:text-[18px] font-poppins w-[82%] flex text-justify">
            DFOS is a SaaS-based DIY platform relevant to 2 million+ factories
            worldwide helping to improvise their manufacturing operations. It
            involves the integration of digital technology and data analytics
            into various aspects of manufacturing processes, operations, and
            supply chain.
          </p>
          <Link to='/Product' className=" no-underline"><p className="text-[#0027D6] font-poppins text-[18px] cursor-pointer">
            Learn More
          </p></Link>
        </div>
        <div className="mt-[149px]">
          <p className="font-semiboldtext-[16px] sm:text-[20px] xl:text-[28px] font-inter">
            Create your <span className="text-[#0027D6]">digital </span>journey
          </p>
          <p className="text-[#657385] text-[10px] sm:text-[12px] xl:text-[18px] font-poppins w-[82%] flex text-justify">
            Get real-time analytics, reports & live dashboards which align with
            your business objectives & goals.
          </p>
        </div>
        <img src={DashImg} alt="" className="w-[652px] h-[341px]" />
      </div>
    </div>
  );
};

export default ContentSecond;
