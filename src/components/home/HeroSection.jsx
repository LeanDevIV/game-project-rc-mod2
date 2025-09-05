import React, { useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";

const defaultGames = [
  {
    title: "MX vs ATV Legends",
    description: "Juego de motocross con acción extrema.",
    img: "https://i.pinimg.com/1200x/2e/b9/9b/2eb99b0c3f42770852838477326645e2.jpg",
    url: "https://store.steampowered.com/app/1315220/MX_vs_ATV_Legends/",
    interval: 1000,
    store: "Steam",
  },
  {
    title: "Rocket League",
    description: "Fútbol con autos, pura adrenalina.",
    img: "https://i.pinimg.com/1200x/76/a8/c0/76a8c047633ace2f4e17412c5e1c44c4.jpg",
    url: "https://store.epicgames.com/en-US/p/rocket-league",
    interval: 1500,
    store: "Epic Games",
  },
  {
    title: "Football Manager 25",
    description: "Gestión total de tu equipo favorito.",
    img: "https://i.pinimg.com/1200x/03/0c/ed/030cedc84dad4f8c751ee774db742a2f.jpg",
    url: "https://store.steampowered.com/app/231670/Football_Manager_2025/",
    interval: 2000,
    store: "Steam",
  },
  {
    title: "WWE 2K25",
    description: "El simulador de lucha libre más famoso.",
    img: "https://i.pinimg.com/1200x/de/37/82/de3782b27c2b2f15a9d0838c2a206c63.jpg",
    url: "https://store.steampowered.com/app/2410910/WWE_2K25/",
    interval: 1000,
    store: "Steam",
  },
  {
    title: "NBA 2K25",
    description: "El baloncesto como nunca antes.",
    img: "https://i.pinimg.com/1200x/52/fa/8d/52fa8d0abe45ea147225c1635da13ed2.jpg",
    url: "https://store.steampowered.com/app/2410920/NBA_2K25/",
    interval: 1200,
    store: "Steam",
  },
  {
    title: "Tony Hawk's Pro Skater 3+4",
    description: "La leyenda del skate regresa en HD.",
    img: "https://i.pinimg.com/1200x/56/d3/57/56d357bf16d6281d20e23ebdff1cd46b.jpg",
    url: "https://www.tonyhawkthegame.com/",
    interval: 1400,
    store: "Sitio oficial",
  },
  {
    title: "Final Fantasy VII Remake",
    description: "Una de las mejores historias RPG.",
    img: "https://i.pinimg.com/736x/41/4b/c1/414bc1196f486ee795d1831e5a30766b.jpg",
    url: "https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/",
    interval: 1600,
    store: "Steam",
  },
  {
    title: "Persona 3 Reload",
    description: "Revive el clásico con gráficos modernos.",
    img: "https://i.pinimg.com/1200x/f7/89/7f/f7897f22ccbcf3c2bb0fc9831f833b7d.jpg",
    url: "https://store.steampowered.com/app/2161700/Persona_3_Reload/",
    interval: 1800,
    store: "Steam",
  },
  {
    title: "The Elder Scrolls IV: Oblivion",
    description: "Un RPG clásico de mundo abierto.",
    img: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/oblivion-remastered-best-pc-graphics-settings.jpg",
    url: "https://store.steampowered.com/app/22330/The_Elder_Scrolls_IV_Oblivion_Game_of_the_Year_Edition/",
    interval: 2000,
    store: "Steam",
  },
  {
    title: "Dragon's Dogma II",
    description: "Aventura épica llena de dragones.",
    img: "https://i.pinimg.com/1200x/7b/78/74/7b787426d4e9e291786e0a0356f8aa0d.jpg",
    url: "https://store.steampowered.com/app/2054970/Dragons_Dogma_2/",
    interval: 2200,
    store: "Steam",
  },
];

const HeroSection = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const storedGames = localStorage.getItem("gamesDb");
    if (storedGames) {
      setGames(JSON.parse(storedGames));
    } else {
      setGames(defaultGames);
      localStorage.setItem("gamesDb", JSON.stringify(defaultGames));
    }
  }, []);

  return (
    <>
    {/* carrousel */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px" }}>
        <Carousel indicators controls pause="hover">
          {defaultGames.map((game, index) => (
            <Carousel.Item key={index} interval={game.interval}>
              <img
                src={game.img}
                alt={game.title}
                style={{
                  display: "block",
                  width: "100%",
                  maxHeight: "60vh",
                  objectFit: "cover",
                  borderRadius: "10px",
                  justifyContent: "center",
                }}
              />
              <Carousel.Caption
                style={{
                  backgroundColor: "rgba(0,0,0,0.6)",
                  padding: "15px",
                  borderRadius: "10px",
                  bottom: "20px",
                }}
              >
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                <Button
                  variant="primary"
                  onClick={() => window.open(game.url, "_blank")}
                >
                  Comprar en {game.store || "Tienda"}
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    {/* catalogo */}
     <div>
    {games.map((game, index) => (
      <p key={index}>{game.titulo}</p>
    ))}
  </div>
    </>
  );
};

export default HeroSection;
