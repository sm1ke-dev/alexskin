import React from "react";
import { useParams } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";
import ProductGrid from "../ProductGrid/ProductGrid";
import Usage from "../Usage/Usage";
import "./Product.css";

const Product = () => {
  const { itemId } = useParams();

  return (
    <main className="product">
      <ProductGrid />
      <HowItWorks />
      <Usage />
    </main>
  );
};

export default Product;
