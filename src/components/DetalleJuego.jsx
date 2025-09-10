import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import gamesDb from "../constants/gamesDb";

const DetalleJuego = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const juego = gamesDb.find((i) => i.id === parseInt(id));
  const [mainContent, setMainContent] = useState("trailer");

  if (!juego) {
    navigate("/404");
    return;
  }

  return (
    <Container fluid className=" text-light py-4">
      {/* Trailer */}
      <Row className="justify-content-center mb-4">
        {/* Contenedor principal */}
        <Col md={8} className="shadow-lg glass p-5 rounded-3">
          <div className="ratio ratio-16x9">
            {mainContent === "trailer" ? (
              <iframe
                src={juego.trailer}
                title={`Trailer de ${juego.titulo}`}
                allowFullScreen
              ></iframe>
            ) : (
              <Image
                src={mainContent
                }
                alt={`Preview de ${juego.titulo}`}
                rounded
                fluid
                className="shadow-sm"
              />
            )}
            ;
          </div>
        </Col>
        {/* Columna con 3 imágenes */}
        <Col md={3} className="d-flex flex-column gap-3">
            <span className="genero-badge bg-warning text-black text-center">JUEGO BASE</span>

          {juego.previews &&
            juego.previews.map((preview, idx) => (
              <Image
                key={idx}
                src={preview}
                alt={`Gameplay ${idx + 1} de ${juego.titulo}`}
                rounded
                fluid
                className="shadow-sm"
                onMouseEnter={() => setMainContent(preview)}
                onMouseLeave={() => setMainContent("trailer")}
              />
            ))}
          
        </Col>
      </Row>
      <Row className="justify-content-center">
        {/* Info principal */}
        <Col md={8}>
          <h1 className="mb-3">{juego.titulo}</h1>
          <p>{juego.descripcion}</p>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className=" genero-badge bg-primary">{juego.genero}</span>
            <span className="genero-badge bg-secondary">Un jugador</span>
          </div>
        </Col>

        {/* Sidebar */}
        <Col md={3}>
          <Card text="light" className="tarjeta-detalle mb-3">
            <Card.Img variant="top" src={juego.img} />
            <Card.Body>
              <h4 className="mb-3">{juego.precio} US$</h4>
              <Button
                variant="primary"
                className="w-100 mb-2"
                onClick={() => (window.location.href = "/404")}
              >
                Comprar ahora
              </Button>
              <Button variant="outline-light" className="w-100 mb-2">
                Añadir al carrito
              </Button>
              <Button variant="outline-light" className="w-100">
                A la lista de deseos
              </Button>
            </Card.Body>
          </Card>

          <Card bg="dark" text="light" className="p-3">
            <p>
              <strong>Desarrolladora:</strong> {juego.desarrolladora}
            </p>
            <p>
              <strong>Editora:</strong> {juego.editora}
            </p>
            <p>
              <strong>Fecha de lanzamiento:</strong> {juego.lanzamiento}
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleJuego;
