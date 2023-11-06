import React from "react";
import "./Composition.css";
import pic from "../../images/composition-pic.png";

const Composition = () => {
  return (
    <section className="composition">
      <h2 className="composition__title">Состав</h2>
      <p className="composition__text">
        Aqua, Caprylic/Capric Triglyceride, Glyceryl Stearate, Stearic Acid,
        Butylene Glycol, Caffeine, Paullinia Cupana Seed Extract, Ptychopetalum
        Olacoides Bark Extract, Glycerin, Acetyl Tetrapeptide-5, Propanediol,
        Piperonyl Glucose, Amorphophallus Konjac Root Powder, Lanolin, Olea
        Europaea (Olive) Fruit Oil, Desamido Collagen, Sodium Hyaluronate,
        Niacinamide, Calcium Pantothenate, Sodium Ascorbyl Phosphate, Tocopheryl
        Acetate, Pyridoxine HCl, Maltodextrin, Sodium Starch Octenylsuccinate,
        Silica, Palmaria Palmata Extract, Macadamia Ternifolia Seed Oil,
        Propylene Glycol, PEG-40 Hydrogenated Castor Oil, Magnezium Ascorbil
        Phosphate, Actinidia Chinensis Fruit Extract, Sorbitol, Panax Ginseng
        Root Extract, Aloe Barbadensis Leaf Extract, Bioflavonoids, Brassica
        Oleracea Italica (Broccoli) Extract, Daucus Carota Sativa Root Extract,
        Panthenol, Citrus Aurantium Bergamia Fruit Oil, Laminaria Digitata
        Extract, Citrus Aurantium Dulcis (Orange) Fruit Extract, Cymbidium
        Grandiflorum Flower Extract, Jasminum Officinale Flower Extract,
        Hydrolyzed Wheat Protein, Zea Mays Kernel Extract, Glycine Soja Protein,
        Hydrolyzed Oat Protein, Ascorbyl Glucoside, Ammonium
        Acryloyldimethyltaurate/VP Copolymer, Triethanolamine, Citric Acid,
        Diazolidinyl Urea, Iodopropynyl Butylcarbamate, Disodium EDTA, Parfum,
        Limonene, Linalool.
      </p>
      <div className="composition__pic-wrapper">
        <img src={pic} alt="pic" className="composition__pic" />
      </div>
    </section>
  );
};

export default Composition;
