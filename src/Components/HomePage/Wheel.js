import React from 'react'
import wheelArea from '../assets/images/wheel.svg'
// import rect from '../assets/images/sideRect.svg'

const Wheel = () => {
  return (
    <div className='w-full h-[900px] sm:h-[1100px] md:h-[1350px] lg:h-auto bg-[#CAE8FF] mt-[119px]'>
      <div className='block lg:flex'>
        <img src={wheelArea} alt="" className='w-[80%] lg:w-[45%] ml-[60px] md:ml-[0px] mt-[0%]'/>
        <div className='backDesign h-[350px]sm:h-[200px] md:h-[300px] 2xl:h-[450px] mt-[110px] ml-[30px] mr-[50px]'>
        {/* <img src={rect} alt="" className='w-[95%] mt-[8%] md:mt-[35%]' /> */}
        <div className='w-[80%] md:w-[60%] lg:w-[85%] 2xl:w-[650px] mx-[40px] py-[20px] lg:py-[0] lg:my-[20px]'>
          <p className='text-[25px] md:text-[30px] lg:text-[25px] 2xl:text-[40px] text-[#323232] font-robotoSlab font-semibold uppercase text-justify'>Unveil an ultra-modern shop floor with high-tech digital process</p>
          <p className='text-[#657385] text-[14px] md:text-[16px] lg:text-[14px] 2xl:text-[20px] font-poppins'>Unveil an ultra-modern shop floor with high-tech digital process</p>
          <p className='text-[#657385] text-[14px] md:text-[16px] lg:text-[14px] 2xl:text-[20px] font-poppins'>Get the most innovative digitalization solutions</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Wheel
