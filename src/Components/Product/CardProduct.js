import React from 'react'
import card1 from '../assets/images/cardElement1.svg'
import card2 from '../assets/images/cardElement2.svg'
import card3 from '../assets/images/cardElement3.svg'
import videoFirst from '../assets/images/dummyOne.svg'


const CardProduct = () => {
  return (
    <div className='mt-[80px]'>
      <p className='text-[#323232] font-robotoSlab text-[30px] md:text-[42px] ml-[102px]'>Our Approach</p>

      <div className='block md:grid grid-cols-3 gap-4 mx-[25%] md:mx-[50px]'>
      <img src={card1} alt="" className='w-[70%] md:w-full h-[94%] pt-[10px]' />
      <img src={card2} alt="" className='w-[70%] md:w-full h-[94%] pt-[10px]' />
      <img src={card3} alt="" className='w-[70%] md:w-full h-[94%] pt-[10px]' />
      </div>
      <div className='requestDemo w-[80%] h-[321px] mx-[10%] absolute flex'>
        <img src={videoFirst} alt="" className='' />
        <div className='mt-[30px] lg:mt-[46px] ml-[30px] lg:ml-[69px]'>
          <p className='text-[24px] sm:text-[30px] xl:text-[40px] text-[#1B1A20] font-robotoSlab'>Bridge the unseen gap on shop floors with DFOS</p>
          <button className='bg-[#00A3FD] font-inter text-[18px] text-white rounded-[6px] px-[20px] py-[10px]'>Request a  Demo</button>
        </div>

      </div>
    </div>
  )
}

export default CardProduct

