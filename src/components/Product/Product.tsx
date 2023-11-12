import React from "react";
import { useParams } from "react-router-dom";
import Composition from "../Composition/Composition";
import HowItWorks from "../HowItWorks/HowItWorks";
import Ingredients from "../Ingredients/Ingredients";
import Other from "../Other/Other";
import ProductGrid from "../ProductGrid/ProductGrid";
import Usage from "../Usage/Usage";
import { items } from "../../utils/constants/items";
import "./Product.css";

const Product = () => {
  const { itemUrl } = useParams();
  const item = items.find((i) => i.url === itemUrl)!;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product">
      <ProductGrid item={item} />
      <HowItWorks item={item.howItWorks} name={item.name} />
      <Usage item={item.usage} />
      <Ingredients item={item.ingredients} />
      <Composition item={item.composition} />
      <Other />
    </main>
  );
};

export default Product;
