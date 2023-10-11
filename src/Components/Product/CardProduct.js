import React from 'react'
import card1 from '../assets/images/cardElement1.svg'
import card2 from '../assets/images/cardElement2.svg'
import card3 from '../assets/images/cardElement3.svg'


const CardProduct = () => {
  return (
    <div className='mt-[80px] ml-[102px]'>
      <p className='text-[#323232] font-robotoSlab text-[42px]'>Our Approach</p>

      <div className='flex'>
      <img src={card1} alt="" />
      <img src={card2} alt="" />
      <img src={card3} alt="" />
      </div>
    </div>
  )
}

export default CardProduct

