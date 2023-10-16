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
    stepDesc: "Identify the shopfloor operation for digitization",
  },
  {
    stepHead: "Step 1",
    stepDesc: "Identify the shopfloor operation for digitization",
  },
  {
    stepHead: "Step 2",
    stepDesc: "Select the workflow from process library of DFOS™",
  },
  {
    stepHead: "Step 3",
    stepDesc: "Customise the workflow as per requirement",
  },
  {
    stepHead: "Step 4",
    stepDesc: "Check and perform the workflow created",
  },
  {
    stepHead: "Step 5",
    stepDesc: "Add wings to your digital transformation journey",
  },
];

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
          <li
            className={`step ${
              i === currentStep
                ? "firstList bg-[#E9E9E9] w-[280px] md:w-[200px] xl:w-[350px] h-[128px] xl:h-[183px] rounded-[10px] mt-[10px] py-[20px] xl:py-[50px] px-[26px]"
                : "w-[280px] md:w-[200px] xl:w-[350px] h-[128px] xl:h-[183px] rounded-[10px] mt-[10px] py-[20px] xl:py-[50px] px-[26px]"
            }`}
            key={i}
          >
            <div
              className={`step ${
                i === currentStep
                  ? "text-[#151515] text-[16px] xl:text-[22px] font-medium "
                  : "text-white text-[16px] xl:text-[22px] font-medium"
              }`}
            >
              {stepData[i].stepHead}
              <div
                className={`step ${
                  i === currentStep
                    ? "text-[#657385] font-poppins text-sm xl:text-lg "
                    : "text-white font-poppins text-sm xl:text-lg font-normal"
                }`}
              >
                {stepData[i].stepDesc}
              </div>
            </div>
          </li>
        );
      }
    } else {
      for (let i = currentStep - 2; i <= currentStep; i++) {
        stepComponents.push(
          <li
            className={`step ${
              i === currentStep
                ? "firstList bg-[#E9E9E9] w-[280px] md:w-[200px] xl:w-[350px] h-[128px] xl:h-[183px] rounded-[10px] mt-[10px] py-[20px] xl:py-[50px] px-[26px]"
                : "w-[280px] md:w-[200px] xl:w-[350px] h-[128px] xl:h-[183px] rounded-[10px] mt-[10px] py-[20px] xl:py-[50px] px-[26px]"
            }`}
            key={i}
          >
            <div
              className={`step ${
                i === currentStep
                  ? "text-[#151515] text-[16px] xl:text-[22px] font-medium "
                  : "text-white text-[16px] xl:text-[22px] font-medium"
              }`}
            >
              {stepData[i].stepHead}
              <div
                className={`step ${
                  i === currentStep
                    ? "text-[#657385] font-poppins text-sm xl:text-lg "
                    : "text-white font-poppins text-sm xl:text-lg font-normal"
                }`}
              >
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
      <div className="steps block md:flex w-full md:h-[106px] xl:h-[148px] mt-[-80px] items-center pl-[15%] sm:pl-[25%] pt-[10px] pb-[10px] md:pl-[50px]">
        <ul className="block md:flex pl-[0px] sm:pl-8">{renderSteps()}</ul>
        <div className="flex ml-[22%] md:ml-[2%] 2xl:ml-[6%]">
          <img
            src={prevbutton}
            alt=""
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="cursor-pointer w-[30px] lg:w-[44px] h-[30px] lg:h-[44px]"
          />
          <img
            src={nextbutton}
            alt=""
            onClick={handleNext}
            disabled={currentStep === TotalSteps}
            className="cursor-pointer ml-[20%] w-[30px] lg:w-[44px] h-[30px] lg:h-[44px]"
          />
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
      <div className="backNo block lg:flex justify-around w-full px-[50px] h-[350px] md:h-auto p-[60px] md:p-[50px] mt-[100px]">
        <div className="text-white font-poppins text-xl text-center md:text-[28px] xl:text-[38px]">
          <CountUp start={0} end={350} delay={1} />
          <span>+</span>
          <p className="text-[16px] sm:text-[20px] xl:text-[28px] lg:w-[100%] relative p-2">
            Manufacturing Plants
          </p>
        </div>
        <div className="text-white font-poppins text-center text-xl md:text-[28px] xl:text-[38px]">
          <CountUp start={0} end={40} delay={1} />
          <span>+</span>
          <p className="text-[16px] sm:text-[20px] xl:text-[28px] relative p-2">
            Customers
          </p>
        </div>
        <div className="text-white font-poppins text-center text-xl md:text-[28px] xl:text-[38px]">
          <CountUp start={0} end={1550} delay={1} />
          <span>+</span>
          <p className="text-[16px] sm:text-[20px] xl:text-[28px] relative p-2">
            Project Excluded
          </p>
        </div>
      </div>

      <div className="text-center mt-[112px] font-robotoSlab text-xl sm:text-3xl lg:text-5xl font-semibold text-[#1B1A20]">
        Transform your
        <span className="text-[#0027D6]"> shop floor</span> in one go!
      </div>
    </div>
  );
};

export default Steps;


