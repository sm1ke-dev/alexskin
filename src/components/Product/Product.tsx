import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Product.css";

const Product = () => {
  const { itemId } = useParams();

  return (
    <main className="product">
      <ProductGrid />
    </main>
  );
};

export default Product;
