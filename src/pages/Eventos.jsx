import React from "react";
import "../styles/eventos.css";

export default function Eventos() {
  const eventos = [
    "Festa Julina",
    "Noite do Espeto Vegano",
    "Rodízio de Espetinhos",
    "Happy Hour da Guilda",
    "Festival de Cervejas Artesanais",
    "Show de Música ao Vivo",
    "Sábado Temático",
    "Churrasco dos Guildados",
    "Competição de Espetos"
  ];

  return (
    <div className="eventos-container">
      <h1 className="eventos-title">Eventos</h1>

      <div className="eventos-grid">
        {eventos.map((evento, index) => (
          <div key={index} className="evento-card">
            <h2>{evento}</h2>
            <p>Descrição rápida do evento {index + 1}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
