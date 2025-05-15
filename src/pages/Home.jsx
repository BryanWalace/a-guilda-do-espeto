import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>🍢 A Guilda do Espeto</h1>
        <p>Sinta-se em casa! Confirme sua presenca nos eventos!!!</p>
        <Link to="/eventos">
          <button className="home-button">Participar</button>
        </Link>
      </div>
    </div>
  );
}
