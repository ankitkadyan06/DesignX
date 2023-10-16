import React, { useState } from "react";
import arrowWhite from "../assets/images/whiteArrow.svg";
import preArrow from "../assets/images/previousArrow.svg";
import nextArrow from "../assets/images/nextArrow.svg";
import inverted from "../assets/images/inverted.svg";

const TestimonialSlides = () => {
  const texts = [
    {
      head: "Vinod Mishra",
      orgName: "HUL-ORAI",
      desc: "DesignX is a team of professionals. They always act fast on any issue/support required and the good part is that they update after the issue is resolved. Best of luck for the DesignX team..",
    },
    {
      head: "Rajeev Thakur",
      orgName: "Unilever India Exports Limited",
      desc: "We have been working with DesignX, from last few years .Thanks to Development & Service team of DesignX for such regular service. It’s good to see that DesignX team makes continuous improvements on the job, post deployment, as per the feedback given.",
    },
    {
      head: "Aakanksha",
      orgName: "Unilever",
      desc: "The team was very supportive and understanding of our needs. They went all out to ensure our standard questionnaire in place. They also provided continuous support for any improvements in the app on an ongoing basis. An overall smooth & satisfying experience!",
    },
    {
      head: "Varun",
      orgName: "Unilever, IT",
      desc: "DesignX has enabled a key SC Collaboration platform for Hindustan Unilever, helping re-imagine the complete process from the perspective of premium user experience and top quality functional experience.",
    },
  
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
  };
  

  return (
    <div className="testBack w-full h-[1100px] lg:h-[800px] xl:h-[780px] 2xl:h-[700px] px-[10px]">
      <div className="block lg:grid lg:grid-cols-2">
        <div>
          <img src={arrowWhite} alt="" className="mt-[0px] lg:mt-[30px] ml-[80px] md:ml-[200px] lg:ml-[120px] xl:ml-[240px]" />
          <p className="w-[50%] ml-[102px] text-white font-poppins text-[30px] lg:text-[42px] mt-[29px]">
            What Our Clients Are Saying...
          </p>
          <div className="ml-[102px]">
            <button onClick={handlePrevious}>
              <img src={preArrow} alt="" />
            </button>
            <button onClick={handleNext} className="ml-[32px]">
              <img src={nextArrow} alt="" />
            </button>
          </div>
        </div>
        <div className="mt-[60px] ml-[0px] lg:ml-[-130px]">
          <img src={inverted} alt="" />
          <div className="carousel-container">
            {texts.map((text, index) => {
              // const isCurrent = currentIndex === index;
              const isNext = currentIndex === (index + 1) % texts.length;
              const transitionClass = isNext ? "slide-next" : "";

              return (
                <div
                  className={`slide ${transitionClass}`}
                  key={index}
                  style={{
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  <div className="bg-white p-[10px] rounded">
                    <p className="text-[#1771CB] font-poppins text-[20px] font-medium">{text.head}</p>
                    <p className="text-[#434343] font-poppins text-[16px]">{text.orgName}</p>
                    <p className="text-[#434343] font-poppins text-[18px]">{text.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlides;
