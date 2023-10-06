import React from "react";
import Demo from "../assets/images/demoView.svg";
import Side from "../assets/images/SideDesign.svg";
import videoFirst from "../assets/images/dummyOne.svg";
// import Arrow from '../assets/images/arrow.svg'
import prevbutton from "../assets/images/backButton.svg";
import nextbutton from "../assets/images/nextButton.svg";
import Marquee from "react-fast-marquee";
import Hero from "../assets/images/hero.svg";
import Unilever from "../assets/images/unilever.svg";
import Gsk from "../assets/images/gsk.svg";
import Lotus from "../assets/images/lotus.svg";
import Suzuki from "../assets/images/suzuki.svg";
import CountUp from "react-countup";
import ImgOne from "../assets/images/imageOne.svg";
import DashImg from '../assets/images/dashImg.svg'

const ContentFirst = () => {
  return (
    <div>
      <div className="block md:grid grid-cols-2 gap-4">
        <div className="ml-[101px] mt-[109px]">
          <p className="text-[#1B1A20] font-poppins text-5xl font-medium leading-[57.6px]">
            Create digital wings for shop floors
          </p>
          <p className="text-[#657385] text-lg font-poppins">
            Appify your manufacturing process and streamline the end-to-end
            manufacturing process.
          </p>
          <div className="mt-[50px] flex">
            <button className="getStarted text-2xl font-poppins font-medium text-white w-[202px] h-[68px] rounded-[12px]">
              Get Started
            </button>
            <div className="flex ml-[53px] cursor-pointer">
              <img src={Demo} alt="" className="w-[58px] h-[58px]" />
              <p className="text-[#1600C9] font-poppins text-[25px] font-semibold ml-[21px] mt-[10px]">
                View Demo
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <img src={Side} alt="" className="ml-[10px]" />
          <img
            src={videoFirst}
            alt=""
            className="relative z-[1] bottom-[150px] ml-[43px] w-[713px] h-[373px]"
          />
        </div>
      </div>
      {/* <span><img src={Arrow} alt="" className="relative z-[-1] bottom-[660px] ml-[500px]" /></span> */}

      {/* steps */}
      <div className="steps w-full h-[148px] mt-[-80px] items-center pl-[65px]">
        <ul className="flex">
          <li className="firstList bg-[#E9E9E9] w-[372px] h-[183px] rounded-[10px] mt-[-17px] py-[50px] px-[26px]">
            <div className="text-[#151515] text-[22px] font-semibold">
              Step 1
            </div>
            <div className="text-[#657385] font-poppins text-lg">
              Identify the shopfloor operation for digitization
            </div>
          </li>
          <li className="w-[372px] h-[183px] rounded-[10px] mt-[-17px] py-[50px] px-[26px]">
            <div className="text-white text-[22px] font-semibold">Step 2</div>
            <div className="text-white font-poppins text-lg font-normal">
              Identify the shopfloor operation for digitization
            </div>
          </li>
          <li className="w-[372px] h-[183px] rounded-[10px] mt-[-17px] py-[50px] px-[26px]">
            <div className="text-white text-[22px] font-semibold">Step 3</div>
            <div className="text-white font-poppins text-lg font-normal">
              Identify the shopfloor operation for digitization
            </div>
          </li>
          <li className="flex ml-[190px]">
            <img src={prevbutton} alt="" className="cursor-pointer" />
            <img src={nextbutton} alt="" className="ml-[34px] cursor-pointer" />
          </li>
        </ul>
      </div>
      <div className="text-center mt-[112px] font-robotoSlab text-5xl font-semibold text-[#1B1A20]">
        Excellence Trusted by
        <span className="text-[#0027D6]"> Global customer</span>
      </div>
      <div className="mt-[119px]">
        <Marquee pauseOnHover speed={50}>
          <div className="image-wrapper">
            <img src={Hero} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={Unilever} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={Gsk} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={Lotus} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={Suzuki} alt="" />
          </div>
          <div className="image-wrapper">
            <img src={Suzuki} alt="" />
          </div>
        </Marquee>
      </div>
      <div className="backNo w-full h-[221px] mt-[118px] flex justify-around pt-[50px]">
        <div className="text-white font-poppins text-[38px]">
          <CountUp start={0} end={350} delay={1} />
          <span>+</span>
          <p className="text-[28px] text-center w-[63%] relative right-[50px]">
            Manufacturing Plants
          </p>
        </div>
        <div className="text-white font-poppins text-[38px]">
          <CountUp start={0} end={40} delay={1}/>
          <span>+</span>
          <p className="text-[28px] text-center relative right-[45px]">
            Customers
          </p>
        </div>
        <div className="text-white font-poppins text-[38px]">
          <CountUp start={0} end={1550} delay={1} />
          <span>+</span>
          <p className="text-[28px] text-center relative right-[50px]">
            Project Excluded
          </p>
        </div>
      </div>
      <div></div>
      <div className="text-center mt-[112px] font-robotoSlab text-5xl font-semibold text-[#1B1A20]">
        Transform your
        <span className="text-[#0027D6]"> shop floor</span> in one go!
      </div>
      <div className="block md:grid grid-cols-2 gap-4 mt-[60px] ml-[100px]">
        <img src={ImgOne} alt="" className="w-[615px] h-[307px]" />
        <div className="mt-[34px]">
          <p className="text-[28px] font-poppins font-medium">
            Digital Factory Operating System
            <span className="text-[#0027D6]">(DFOS)</span>
          </p>
          <p className="text-[#657385] text-[18px] font-poppins w-[82%] flex text-justify">
            DFOS is a SaaS-based DIY platform relevant to 2 million+ factories
            worldwide helping to improvise their manufacturing operations. It
            involves the integration of digital technology and data analytics
            into various aspects of manufacturing processes, operations, and
            supply chain.
          </p>
          <p className="text-[#0027D6] font-poppins text-[18px] cursor-pointer">
            Learn More
          </p>
        </div>
        <div className="mt-[149px]">
          <p className="font-semibold text-[28px] font-inter">
            Create your <span className="text-[#0027D6]">digital </span>journey
          </p>
          <p className="text-[#657385] text-[18px] font-poppins w-[82%] flex text-justify">
            Get real-time analytics, reports & live dashboards which align with
            your business objectives & goals.
          </p>
        </div>
        <img src={DashImg} alt="" className="w-[652px] h-[341px]" />
      </div>
    </div>
  );
};

export default ContentFirst;
