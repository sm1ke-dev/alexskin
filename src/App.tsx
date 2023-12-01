import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Community from "./pages/Community/Community";
import Service from "./pages/Service/Service";
import Faq from "./pages/Faq/Faq";
import Partnership from "./pages/Partnership/Partnership";
import Documents from "./pages/Documents/Documents";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
