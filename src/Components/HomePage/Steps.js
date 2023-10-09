import React, { useState } from "react";
import prevbutton from "../assets/images/backButton.svg";
import nextbutton from "../assets/images/nextButton.svg";
import Marquee from "react-fast-marquee";
import Hero from "../assets/images/hero.svg";
import Unilever from "../assets/images/unilever.svg";
import Gsk from "../assets/images/gsk.svg";
import Lotus from "../assets/images/lotus.svg";
import Suzuki from "../assets/images/suzuki.svg";
import CountUp from "react-countup";

const TotalSteps = 5;
// const StepsPerPage = 3;/
const stepData = [
  {
    stepHead: "Step 1",
    stepDesc: "Identify the shopfloor operation for digitization"
  },
  {
    stepHead: "Step 1",
    stepDesc: "Identify the shopfloor operation for digitization"
  },
  {
    stepHead: "Step 2",
    stepDesc: "Identify the shopfloor operation for digitization"
  },
  {
    stepHead: "Step 3",
    stepDesc: "Identify the shopfloor operation for digitization"
  },
  {
    stepHead: "Step 4",
    stepDesc: "Identify the shopfloor operation for digitization"
  },
  {
    stepHead: "Step 5",
    stepDesc: "Identify the shopfloor operation for digitization"
  }
]

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TotalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderSteps = () => {
    const stepComponents = [];

    if (currentStep <= 3) {
      for (let i = 1; i <= 3; i++) {
        stepComponents.push(
          <li className={`step ${i === currentStep ?"firstList bg-[#E9E9E9] w-[372px] h-[183px] rounded-[10px] mt-[10px] py-[50px] px-[26px]":"w-[372px] h-[183px]  rounded-[10px] mt-[10px] py-[50px] px-[26px]"}`} key={i}>
            <div
              className={`step ${i === currentStep ? "text-[#151515] text-[22px] font-medium " : "text-white text-[22px] font-medium"}`}
            >
              {stepData[i].stepHead}
              <div className={`step ${i === currentStep ? "text-[#657385] font-poppins text-lg " : "text-white font-poppins text-lg font-normal"}`}>
                {stepData[i].stepDesc}
              </div>
            </div>
          </li>
        );
      }
    } else {
      for (let i = currentStep - 2; i <= currentStep; i++) {
        stepComponents.push(
          <li className={`step ${i === currentStep ?"firstList bg-[#E9E9E9] w-[372px] h-[183px] rounded-[10px] mt-[10px] py-[50px] px-[26px]":"w-[372px] h-[183px]  rounded-[10px] mt-[10px] py-[50px] px-[26px]"}`} key={i}>
            <div

              className={`step ${i === currentStep ? "text-[#151515] text-[22px] font-medium " : "text-white text-[22px] font-medium"}`}
            >
              {stepData[i].stepHead}
              <div className={`step ${i === currentStep ? "text-[#657385] font-poppins text-lg " : "text-white font-poppins text-lg font-normal"}`}>
                {stepData[i].stepDesc} 
              </div>
            </div>
          </li>
        );
      }
    }

    return stepComponents;
  };


  return (
    <div>
      <div className="steps w-full h-[148px] mt-[-80px] items-center pl-[65px] bg-[#3490dc]">
        <ul className="flex ">
          {renderSteps()}
        </ul>
        <div className="flex ml-[6%]">
        <img src={prevbutton} alt="" onClick={handlePrev} disabled={currentStep === 1} className="cursor-pointer"/>
        <img src={nextbutton} alt="" onClick={handleNext} disabled={currentStep === TotalSteps} className="cursor-pointer ml-[20%]"/>
        </div>
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
