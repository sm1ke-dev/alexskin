import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import About from "../About/About";
import Catalog from "../Catalog/Catalog";
import Community from "../Community/Community";
import Service from "../Service/Service";
import Faq from "../Faq/Faq";
import Partnership from "../Partnership/Partnership";
import Documents from "../Documents/Documents";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import NotFound from "../NotFound/NotFound";

const App: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/alexskin/" element={<Main />} />
        <Route path="/alexskin/about" element={<About />} />
        <Route path="/alexskin/catalog" element={<Catalog />} />
        <Route path="/alexskin/catalog/:itemUrl" element={<Product />} />
        <Route path="/alexskin/community" element={<Community />} />
        <Route path="/alexskin/service" element={<Service />} />
        <Route path="/alexskin/faq" element={<Faq />} />
        <Route path="/alexskin/partnership" element={<Partnership />} />
        <Route path="/alexskin/documents" element={<Documents />} />
        <Route path="/alexskin/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
