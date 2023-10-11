import React from "react";
import dfosLand from "../assets/images/dfosLand.svg";
import digitalProcess from "../assets/images/digitalProcess.svg";
import digitalTwin from "../assets/images/digitalTwin.svg";
import hectos from '../assets/images/hectos.svg'
const ProductContOne = () => {
  return (
    <div className="mt-[70px] mx-[100px]">
      <div className="grid grid-cols-2 gap-4 mb-[20px]">
        <div className="text-justify">
          <p className="text-[#1B1A20] font-poppins text-[28px] font-medium">
            What is DFOS?
          </p>
          <p className="text-[#657385] text-[18px]">
            DFOS, or Digital Factory Operating System, is a SaaS-based product
            to design, analyse, automate, and measure shop floor processes. In
            simple words, DFOS is a DIY platform that can help you connect
            different shop floor processes via automation and digitalization. It
            eliminates human errors and saves time, which helps to expand the
            business. Furthermore, it solves the three biggest problems of the
            manufacturing industry, including Production losses, Quality
            rejection, and Safety hazards. So, streamline your manufacturing
            process with DFOS.
          </p>
          <p className="text-[#657385] text-[18px]">
            Presently, DFOS measures and analyses data in three different ways:
            the transfer of data from paper to DFOS, machines to DFOS, you to
            DFOS.
          </p>
        </div>
        <div>
          <img
            src={dfosLand}
            alt=""
            className="w-[614px] h-[391px] ml-[80px]"
          />
        </div>
        <div>
          <img
            src={digitalProcess}
            alt=""
            className="w-[616px] h-[349px] mt-[65px]"
          />
        </div>
        <div className=" ml-[80px]">
          <p className="text-[#1B1A20] font-poppins text-[28px] mt-[146px] font-medium">
            Digital Process
          </p>
          <p className="text-[#657385] text-[18px] text-justify">
            No more information storage costs, as by incorporating DFOS at your
            manufacturing unit, you can easily go paperless. Keeping virtual
            records amplifies your productivity, minimises the chances of data
            loss and human errors, and reduces costs. Focusing on the KPIs
            becomes easier as one can eliminate unnecessary documents and
            papers. In addition, there is a huge impact on carbon footprints
          </p>
        </div>
        <div>
          <p className="text-[#1B1A20] font-poppins text-[28px] mt-[146px] font-medium">
            IIOT
          </p>
          <p className="text-[#657385] text-[18px] text-justify">
            With the assistance of DFOS’s product, Hectos, all your data from
            machines can be automated. We provide you with an IOT gateway,
            Hectos, which is a device that connects all the machines installed
            on your shop floor. This single device can connect sensors,
            controllers, actuators, databases, cloud systems, SCADA systems, and
            so forth on your shop floor. So, allow this device to make your shop
            floor automated in one go! <span className="text-[#0027D6]">Read More</span>
          </p>
        </div>
        <div>
          <img
            src={hectos}
            alt=""
            className="w-[616px] h-[349px] mt-[65px] ml-[80px]"
          />
        </div>
        <div>
          <img
            src={digitalTwin}
            alt=""
            className="w-[616px] h-[349px] mt-[65px]"
          />
        </div>
        <div className=" ml-[80px]">
          <p className="text-[#1B1A20] font-poppins text-[28px] mt-[146px] font-medium">
            Digital Twin
          </p>
          <p className="text-[#657385] text-[18px] text-justify">
            We built a 3D digital twin of your complete shopfloor, which helps
            you check the functioning even when you aren’t around. Manage your
            manufacturing hub from anywhere around the globe with your
            smartphone on the DFOS mobile application. So, you can visit your
            manufacturing plant anytime with our digital twin. <span className="text-[#0027D6]">Read More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductContOne;
