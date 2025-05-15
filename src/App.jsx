import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import "./style.css";

export default function App() {
  return (
    <Router>
      <Header />
      
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}