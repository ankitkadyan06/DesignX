import React, { useState } from "react";
import arrowWhite from "../assets/images/whiteArrow.svg";
import preArrow from "../assets/images/previousArrow.svg";
import nextArrow from "../assets/images/nextArrow.svg";
import inverted from "../assets/images/inverted.svg";

const TestimonialSlides = () => {
  const texts = [
    {
      head: "Horem ipsum dolor sit1 ",
      orgName: "Organization Name",
      desc: "Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet.",
    },
    {
      head: "Horem ipsum dolor sit2 ",
      orgName: "Organization Name",
      desc: "Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet.",
    },
    {
      head: "Horem ipsum dolor sit3 ",
      orgName: "Organization Name",
      desc: "Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet.",
    },
    {
      head: "Horem ipsum dolor sit4 ",
      orgName: "Organization Name",
      desc: "Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet.",
    },
    {
      head: "Horem ipsum dolor sit5 ",
      orgName: "Organization Name",
      desc: "Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet, conghtu ipiscing elit Horem met, adipiscing elit.Horem ipsum dolor sit amet.",
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
    <div className="testBack w-full h-[1100px] lg:h-[834px] px-[10px]">
      <div className="block lg:grid lg:grid-cols-2">
        <div>
          <img src={arrowWhite} alt="" className="mt-[89px] ml-[241px]" />
          <p className="w-[50%] ml-[102px] text-white font-poppins text-[42px] mt-[29px]">
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
        <div className="mt-[100px]">
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
