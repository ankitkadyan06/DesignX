import React from "react";
import dummyProfile from "../assets/images/dummyProfile.svg";
import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";
import linkedin from "../assets/images/linkedin.svg";

const FounderDetails = () => {
  return (
    <div className="flex ml-[100px] mb-[20px]">
      <div className="w-[40%]">
        <p className="text-[#1B1A20] font-poppins text-[48px] font-medium">
          <span className=" underline underline-offset-8 decoration-[#0088FF]">
            Meet Our Prominent
          </span>{" "}
          <span className=" underline underline-offset-8 decoration-[#0027D6]">
            {" "}
            Innovators
          </span>
        </p>
        <div className="foundersDet pt-[63px] pl-[51px]">
          <p className="text-[#1B1A20] text-[28px] font-poppins font-medium">
            Rajat Srivastav, CEO
          </p>
          <p className="text-[#657385] text-[20px] font-poppins">
            An enthusiast entrepreneur & visionary with an aim to digitalize and
            automate the manufacturing industry, combat wastages & up
            efficiencies.
          </p>
        </div>
      </div>
      <div className="w-[22%] bg-[#CAE8FF] rounded-[5px] ml-[100px]">
        <img
          src={dummyProfile}
          alt=""
          className="w-[220px] h-[220px] ml-[46px] mt-[30px]"
        />
        <p className="text-center text-[#1B1A20] text-[28px] font-poppins font-medium mt-[20px]">
          Rajat Srivastav
        </p>
        <p className="text-center text-[#5D5D5D] text-[24px] font-poppins">
          CEO
        </p>
        <div className="flex justify-around">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
      <div className="w-[22%] rounded-[5px] ml-[100px]">
        <img
          src={dummyProfile}
          alt=""
          className="w-[220px] h-[220px] ml-[46px] mt-[30px]"
        />
        <p className="text-center text-[#1B1A20] text-[28px] font-poppins font-medium mt-[20px]">
        Nishant Srivastav
        </p>
        <p className="text-center text-[#5D5D5D] text-[24px] font-poppins">
        CTO
        </p>
        <div className="flex justify-around">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FounderDetails;
