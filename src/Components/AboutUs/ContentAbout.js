import React from "react";
import about1 from "../assets/images/about1.svg";
import about2 from "../assets/images/About2.svg";
import Marquee from "react-fast-marquee";
import Hero from "../assets/images/hero.svg";
import Unilever from "../assets/images/unilever.svg";
import Gsk from "../assets/images/gsk.svg";
import Lotus from "../assets/images/lotus.svg";
import Suzuki from "../assets/images/suzuki.svg";

const ContentAbout = () => {
  return (
    <div className="mt-[70px] mx-[100px]">
      <div className="block lg:grid lg:grid-cols-2 gap-4 mb-[10px] lg:mb-[20px]">
        <div className="text-justify">
          <p className="text-[#1B1A20] font-poppins text-[28px] font-medium">
            Bring the revolutionary change to shop floors
          </p>
          <p className="text-[#657385] text-base lg:text-[18px] ">
            Without a functional plan, managing shop floors is like solving
            Chinese arithmetic equations. Not exaggerating, but from equipment
            breaks to human errors; mistakes & slipups keep arising, and hence
            it becomes more challenging to manage manually by the workforce.
          </p>
          <p className="text-[#657385] text-base lg:text-[18px]">
            But with DesignX as your digital partner, you can light a fire &
            bring a revolutionary change to your shop floor. Automate your
            manufacturing hub and mark your beginning in pre-creating the
            future. Adopt the latest optimization strategies with an
            ultra-modern platform - DFOS (Digital Factory Operating System).
          </p>
        </div>
        <div>
          <img src={about1} alt="" className="w-[614px] ml-0 lg:ml-[80px]" />
        </div>
        <div>
          <img src={about2} alt="" className="w-[616px] mt-[65px]" />
        </div>
        <div className="ml-0 lg:ml-[80px]">
          <p className="text-[#1B1A20] font-poppins text-[28px] mt-[50px] lg:mt-[80px] font-medium">
            Switch to Smart Shopfloors with DFOS
          </p>
          <p className="text-[#657385] text-base lg:text-[18px] text-justify">
            DFOS is built to help you switch to the next generation of shop
            floors. It is a powerful combination of iBPM, RPA, IIOT, and AI.
            With our platform, you can entirely automate your shop floor and
            solve every complex problem.
          </p>
          <p className="text-[#657385] text-base lg:text-[18px] text-justify">
            We understand that digitization is not a one-size-fits-all solution.
            Every organization has some unique needs and challenges, and DFOS
            strives to understand those needs and creates tailored solutions
            that fit perfectly.
          </p>
          <p className="text-[#657385] text-base lg:text-[18px] text-justify">
            So, take the plunge to step into smart manufacturing. <span className="text-[#0027D6]">Read More</span>
          </p>
        </div>
      </div>
      <div className="text-center mt-[112px] font-robotoSlab text-xl sm:text-3xl lg:text-5xl font-semibold text-[#1B1A20]">
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
    </div>
  );
};

export default ContentAbout;
