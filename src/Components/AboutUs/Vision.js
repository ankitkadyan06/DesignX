import React from 'react'
import mission from '../assets/images/Mission.svg'
import vision from '../assets/images/Vision.svg'
import values from '../assets/images/Values.svg'
import poster from '../assets/images/poster.svg'

const Vision = () => {
  return (
    <div className='mt-[147px] bg-[#EFF6FF] w-full h-[500px] lg:h-[232px] px-[85px] py-[57px] mb-[50px]'>
      <div className='flex'>
        <div className='block lg:grid lg:grid-cols-3 gap-4'>
            <div className='hoverBtn flex ml-[70%] lg:ml-0 pl-[31px] py-[22px]'>
              <img src={mission} alt="" className='w-[78px] h-[78px]' />
              <p className='text-white text-[30px] font-poppins ml-[20px] mt-[15px]'>Mission</p>
            </div>
            <div className='hoverBtn flex ml-[70%] lg:ml-[20px] mt-[20px] lg:mt-0 pl-[31px] py-[22px]'>
              <img src={vision} alt="" className='w-[78px] h-[78px]' />
              <p className='text-white text-[30px] font-poppins ml-[20px] mt-[15px]'>Vision</p>
            </div>
            <div className='hoverBtn flex ml-[70%] lg:ml-[30px] mt-[20px] lg:mt-0 pl-[31px] py-[15px]'>
              <img src={values} alt="" className='w-[78px] h-[78px]' />
              <p className='text-white text-[30px] font-poppins ml-[20px] mt-[20px]'>Values</p>
            </div>
        </div>
        <div className='circleDot hidden lg:block'>
            <img src={poster} alt="" className='relative left-[56px] bottom-[90px] w-[213px] h-[357px]' />
        </div>
      </div>
    </div>
  )
}

export default Vision
