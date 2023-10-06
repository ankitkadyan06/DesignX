import React from 'react'
import Header from '../Components/Header'
import ContentFirst from '../Components/HomePage/ContentFirst'
const HomePage = () => {
  return (
    <div>
      <Header/>
      <div className='mt-[70px]'>
        <ContentFirst/>
      </div>
    </div>
  )
}

export default HomePage
