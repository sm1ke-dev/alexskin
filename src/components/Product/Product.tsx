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
import ImageModalWindow from "../ImageModalWindow/ImageModalWindow";

const Product: React.FC = () => {
  const { itemUrl } = useParams();
  const item = items.find((i) => i.url === itemUrl)!;
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");

  const openModalWindow = (img: string) => {
    setIsModalOpened(true);
    setModalImage(img);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="product">
        <ProductGrid item={item} onClick={openModalWindow} />
        <HowItWorks item={item.howItWorks} name={item.name} />
        <Usage item={item.usage} />
        <Ingredients item={item.ingredients} />
        <Composition item={item.composition} />
        <Other />
      </main>
      <ImageModalWindow
        isOpen={isModalOpened}
        onClose={setIsModalOpened}
        image={modalImage}
      />
    </>
  );
};

export default Product;
