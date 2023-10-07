import React from 'react'
import Header from '../Components/Header'
import ContentFirst from '../Components/HomePage/ContentFirst'
import Steps from '../Components/HomePage/Steps'
import Carousel from '../Components/HomePage/Carousel'
import ContentSecond from '../Components/HomePage/ContentSecond'
const HomePage = () => {
  return (
    <div>
      <Header/>
      <div className='mt-[70px]'>
        <ContentFirst/>
        <Steps/>
        <ContentSecond/>
        <Carousel/>
      </div>
    </div>
  )
}

export default HomePage
