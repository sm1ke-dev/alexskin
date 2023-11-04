import React from "react";
import { useParams } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Product.css";

const Product = () => {
  const { itemId } = useParams();

  return (
    <main className="product">
      <ProductGrid />
      <HowItWorks />
    </main>
  );
};

export default Product;
