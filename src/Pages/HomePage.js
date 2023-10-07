import React from 'react'
import Header from '../Components/Header'
import ContentFirst from '../Components/HomePage/ContentFirst'
import Steps from '../Components/HomePage/Steps'

import ContentSecond from '../Components/HomePage/ContentSecond'
import Wheel from '../Components/HomePage/Wheel'
import TestimonialSlides from '../Components/HomePage/TestimonialSlides'
import Footer from './../Components/Footer';
const HomePage = () => {
  return (
    <div>
      <Header/>
      <div className='mt-[70px]'>
        <ContentFirst/>
        <Steps/>
        <ContentSecond/>
        <Wheel/>
        <TestimonialSlides/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
