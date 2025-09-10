import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import gamesDb from "../../constants/gamesDb";
import { Link } from "react-router";
import { useFavorites } from "../../context/FavoritesContext";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const HeroSection = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const { addToFavorites } = useFavorites();

  useEffect(() => {
    try {
      const destacados = gamesDb.filter((juego) => juego.destacado === true);
      setGames(destacados);

      if (destacados.length > 0) {
        setSelectedGame(destacados[0]);
        setMainImage(destacados[0].img);
      }
    } catch (error) {
      console.error("Error al cargar los juegos destacados:", error);
    }
  }, []);
  if (!selectedGame) {
    return (
      <Container fluid className="text-light p-4">
        <p>Cargando juegos destacados...</p>
      </Container>
    );
  }

  return (
    <Container fluid className="text-light p-4">
      <Row className="align-items-center glass-dark ">
        {/* Imagen grande */}
        <Col md={8}>
          <Image
            className="hero-image mb-3"
            src={mainImage}
            alt={selectedGame.titulo}
            fluid
            rounded
            style={{
              maxHeight: "65vh",
              objectFit: "contain",
              width: "100%",
              objectPosition: "center",
            }}
          />
        </Col>

        {/* Info y previews */}
        <Col md={4}>
          <h2 className="text-light text-shadow">{selectedGame.titulo}</h2>
          <p>{selectedGame.descripcion}</p>

          <div
            className="glass d-flex gap-2 mb-3"
            onMouseLeave={() => setMainImage(selectedGame.img)}
          >
            {selectedGame.previews.map((preview, i) => (
              <Image
                key={i}
                src={preview}
                alt={`preview-${i}`}
                style={{
                  width: "25%",
                  cursor: "pointer",
                  border: mainImage === preview ? "2px solid #0d6efd" : "none",
                }}
                onMouseEnter={() => setMainImage(preview)}
              />
            ))}
          </div>

          <Link
            className="btn btn-outline-warning"
            to={`/juego/${selectedGame.id}`}
          >
            Ver más detalles
          </Link>
          <Button
            onClick={() => {
              addToFavorites(selectedGame);
              toast.success(`${selectedGame.titulo} añadido a favoritos`);
            }}
            variant="outline-warning"
          >
            <FaStar className="me-2" />
          </Button>

          <div className="glass-dark  mt-4">
            {games.map((game, idx) => (
              <Button
                key={idx}
                variant={
                  game.titulo === selectedGame.titulo
                    ? "warning"
                    : "outline-primary"
                }
                size="md"
                className="me-2 mt-2"
                onClick={() => setSelectedGame(game)}
              >
                {game.titulo}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
