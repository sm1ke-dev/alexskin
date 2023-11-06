import React from "react";
import { useParams } from "react-router-dom";
import Composition from "../Composition/Composition";
import HowItWorks from "../HowItWorks/HowItWorks";
import Ingredients from "../Ingredients/Ingredients";
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
      <Ingredients />
      <Composition />
    </main>
  );
};

export default Product;
