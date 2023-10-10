import React from 'react'
import Header from '../Components/Header'
import HeaderSec from '../Components/Product/HeaderSec'
import ProductContOne from '../Components/Product/ProductContOne'
import Scroller from '../Components/Product/Scroller'
const Product = () => {
  return (
    <div>
      <Header/>
      <div className='mt-[70px]'>
      <HeaderSec/>
      <ProductContOne/>
      <Scroller/>
      </div>
    </div>
  )
}

export default Product
