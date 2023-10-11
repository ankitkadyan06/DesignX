import React from "react";
import Header from "../Components/Header";
import HeaderSec from "../Components/Product/HeaderSec";
import ProductContOne from "../Components/Product/ProductContOne";
import Scroller from "../Components/Product/Scroller";
import CardProduct from "../Components/Product/CardProduct";
import Footer from "../Components/Footer";
const Product = () => {
  return (
    <div>
      <Header />
      <div className="mt-[70px]">
        <HeaderSec />
        <ProductContOne />
        <Scroller />
        <CardProduct />
      </div>
      <div className="mt-[10%]">
      <Footer />
      </div>
    </div>
  );
};

export default Product;
