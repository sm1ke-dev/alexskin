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

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
