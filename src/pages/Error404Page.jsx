import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error404Page.css";

export default function NotFound404() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="sky" />

      <div className="content">
        <div>
          <h1 className="title">404 — Nivel no encontrado</h1>
          <p className="subtitle">
            La partida se perdió en el mapa. ¿Quieres regresar al menú
            principal?
          </p>
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </button>

          <div className="ground">
            <div
              className="hero"
              role="img"
              aria-label="Personaje pixelado caminando"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  fill="#fff"
                  opacity="0.18"
                />
                <path
                  d="M7 15c1.5-2 3.5-2 5 0"
                  stroke="#0b1020"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="road" />
            <div className="gamepad">
              <div className="pad">
                <div className="pad-butt" />
                <div className="pad-butt" />
                <div className="pad-butt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
