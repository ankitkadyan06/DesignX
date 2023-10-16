import React from 'react'
import Header from '../Components/Header'
import HeroPart from '../Components/Blog/HeroPart'
import BlogPart from '../Components/Blog/BlogPart'

const Blog = () => {
  return (
    <div>
        <Header/>
      <div className="mt-[70px]">
        <HeroPart/>
        <BlogPart/>
      </div>
    </div>
  )
}

export default Blog
