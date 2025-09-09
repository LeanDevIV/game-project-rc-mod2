import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY; // ⚠️ pon tu clave en .env.local
  const city = "San Miguel de Tucuman";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},AR&units=metric&lang=es&appid=${API_KEY}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("No se pudo obtener el clima");

        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("Error cargando el clima");
      }
    };

    if (API_KEY) {
      fetchWeather();
    } else {
      setError("Falta la API Key");
    }
  }, [API_KEY]);

  return (
    <footer className="footer-glass py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Columna 1 */}
          <div className="col-md-4 mb-3">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "90px", height: "40px" }}
            />
            <p>
              Tu portal ideal para noticias, reseñas y la mejor experiencia al
              comprar videojuegos.
            </p>
          </div>

          {/* Columna 2: Clima */}
          <div className="col-md-4 mb-3">
            <h5>🌤 Clima en {city}</h5>
            {error && <p>{error}</p>}
            {weather && (
              <p>
                {Math.round(weather.main.temp)}°C ·{" "}
                {weather.weather[0].description}
              </p>
            )}
          </div>

          {/* Columna 3 */}
          <div className="col-md-4 mb-3">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={{ color: "#9bd4ff" }}>
                  Noticias
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#9bd4ff" }}>
                  Reseñas
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#9bd4ff" }}>
                  Foro
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#9bd4ff" }}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center">
          <small>&copy; 2025 VentoGaming. Todos los derechos reservados.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
