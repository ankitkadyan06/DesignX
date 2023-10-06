import React from 'react'
import Header from '../Components/Header'
import ContentFirst from '../Components/HomePage/ContentFirst'
// import Steps from '../Components/HomePage/Steps'
const HomePage = () => {
  return (
    <div>
      <Header/>
      <div className='mt-[70px]'>
        <ContentFirst/>
        {/* <Steps/> */}
      </div>
    </div>
  )
}

export default HomePage
