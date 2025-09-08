import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const defaultGames = [
  {
    title: "Baldur's Gate 3",
    description: "RPG épico lleno de decisiones y aventuras.",
    img: "https://i.pinimg.com/736x/5b/ab/fe/5babfec49ab95a4da577134321be4e41.jpg",
    previews: [
      "https://i.pinimg.com/1200x/ef/5b/38/ef5b3811931796fd422faaf4aae17570.jpg",
      "https://i.pinimg.com/1200x/53/ec/49/53ec49ccbd661cc0b1cdd3dd13b9e781.jpg",
      "https://i.pinimg.com/1200x/6d/9e/3a/6d9e3ae87814f74aaac58d7b6db58700.jpg",
    ],
    url: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    store: "Steam",
  },
  {
    title: "Dragon's Dogma II",
    description: "Una aventura épica llena de dragones y acción.",
    img: "https://i.pinimg.com/1200x/62/60/4f/62604ff1b96dc70a2b9b6f92e9eefcfe.jpg",
    previews: [
      "https://i.pinimg.com/1200x/cc/c3/95/ccc395139fa01bc09c6c425d9f4a0a79.jpg",
      "https://i.pinimg.com/1200x/42/6c/9d/426c9d04dfc6c1fb0132343acbadbb78.jpg",
      "https://i.pinimg.com/1200x/a9/5c/28/a95c28ff372b60a90339db2451de2e08.jpg",
    ],
    url: "https://store.steampowered.com/app/2054970/Dragons_Dogma_2/",
    store: "Steam",
  },
  {
    title: "Red Dead Redemption 2",
    description:
      "Una epopeya del viejo oeste con narrativa profunda, mundo abierto inmersivo y personajes inolvidables.",
    img: "https://i.pinimg.com/736x/7c/02/42/7c024249ce814af78fe074578e8dc22a.jpg",
    previews: [
      "https://example.com/rdr2-preview1.jpg",
      "https://example.com/rdr2-preview2.jpg",
      "https://example.com/rdr2-preview3.jpg",
    ],
    url: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    store: "Steam",
  },
];

const HeroSection = () => {
  const [games] = useState(defaultGames);
  const [selectedGame, setSelectedGame] = useState(defaultGames[0]);
  const [mainImage, setMainImage] = useState(selectedGame.img);

  useEffect(() => {
    setMainImage(selectedGame.img);
  }, [selectedGame]);

  return (
    <Container fluid className="text-light p-4">
      <Row className="align-items-center glass-dark ">
        {/* Imagen grande */}
        <Col md={8}>
          <Image
            className="hero-image"
            src={mainImage}
            alt={selectedGame.title}
            fluid
            rounded
            style={{
              maxHeight: "70vh",
              objectFit: "cover",
              width: "100%",
              objectPosition: "center",
            }}
          />
        </Col>

        {/* Info y previews */}
        <Col md={4}>
          <h2 className="text-light text-shadow">{selectedGame.title}</h2>
          <p>{selectedGame.description}</p>

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
                onClick={() => setMainImage(preview)}
              />
            ))}
          </div>

          <Button
            variant="primary"
            onClick={() => window.open(selectedGame.url, "_blank")}
          >
            Comprar en {selectedGame.store}
          </Button>

          <div className="glass-dark  mt-4">
            {games.map((game, idx) => (
              <Button
                key={idx}
                variant={
                  game.title === selectedGame.title
                    ? "warning"
                    : "outline-danger"
                }
                size="md"
                className="me-2 mt-2"
                onClick={() => setSelectedGame(game)}
              >
                {game.title}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
