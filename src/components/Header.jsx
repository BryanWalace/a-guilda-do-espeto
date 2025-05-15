import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#ff6600", padding: "1rem", color: "white" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem", color: "white", textDecoration: "none" }}>Início</Link>
        <Link to="/eventos" style={{ color: "white", textDecoration: "none" }}>Eventos</Link>
      </nav>
    </header>
  );
}