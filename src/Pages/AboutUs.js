import React from 'react'
import ContentAbout from '../Components/AboutUs/ContentAbout'
import Header from '../Components/Header'
import HeaderAbout from '../Components/AboutUs/HeaderAbout'
import Vision from '../Components/AboutUs/Vision'
const AboutUs = () => {
  return (
    <div>
      <Header/>
      <div className="mt-[70px]">
        <HeaderAbout/>
        <ContentAbout/>
        <Vision/>
      </div>
    </div>
  )
}

export default AboutUs
