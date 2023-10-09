import React from 'react'
import wheelArea from '../assets/images/wheel.svg'
import rect from '../assets/images/sideRect.svg'

const Wheel = () => {
  return (
    <div className='w-full h-[20%] bg-[#CAE8FF] mt-[119px]'>
      <div className='block lg:grid lg:grid-cols-2 gap-4'>
        <img src={wheelArea} alt="" className='w-[85%] mt-[20%]' />
        <div>
        <img src={rect} alt="" className='w-[95%]  mt-[35%]' />
        <div className='relative z-[1] left-[50px] bottom-[280px] lg:bottom-[250px]  2xl:bottom-[380px] w-[80%]'>
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
