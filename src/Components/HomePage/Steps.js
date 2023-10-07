import React, { useState } from 'react';
// import prevbutton from "../assets/images/backButton.svg";
// import nextbutton from "../assets/images/nextButton.svg";
import Marquee from "react-fast-marquee";
import Hero from "../assets/images/hero.svg";
import Unilever from "../assets/images/unilever.svg";
import Gsk from "../assets/images/gsk.svg";
import Lotus from "../assets/images/lotus.svg";
import Suzuki from "../assets/images/suzuki.svg";
import CountUp from "react-countup";

const totalSteps = 5;

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);
 console.log(currentStep);
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  };
  return (
    <div>
     <div className="carousel-container">
      <div className="steps">
        {[...Array(3).keys()].map(index => (
          <div
            key={index + 1}
            className={`step ${index + 1 === currentStep ? 'active' : ''}`}
          >
            {index + currentStep}
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="prev-button" disabled={currentStep === 1}>
        Prev
      </button>
      <button onClick={handleNext} className="next-button" disabled={currentStep === totalSteps}>
        Next
      </button>
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
          <CountUp start={0} end={40} delay={1} />
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

      <div className="text-center mt-[112px] font-robotoSlab text-5xl font-semibold text-[#1B1A20]">
        Transform your
        <span className="text-[#0027D6]"> shop floor</span> in one go!
      </div>
    </div>
  );
};

export default Steps;


{/* <div className="steps w-full h-[148px] mt-[-80px] items-center pl-[65px]">
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
</div> */}