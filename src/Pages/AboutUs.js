import React from 'react'
import ContentAbout from '../Components/AboutUs/ContentAbout'
import Header from '../Components/Header'
import HeaderAbout from '../Components/AboutUs/HeaderAbout'
import Vision from '../Components/AboutUs/Vision'
import FounderDetails from '../Components/AboutUs/FounderDetails'
import Timeline from '../Components/AboutUs/Timeline'
import Footer from '../Components/Footer'
const AboutUs = () => {
  return (
    <div>
      <Header/>
      <div className="mt-[70px]">
        <HeaderAbout/>
        <ContentAbout/>
        <Vision/>
        <FounderDetails/>
        <Timeline/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
