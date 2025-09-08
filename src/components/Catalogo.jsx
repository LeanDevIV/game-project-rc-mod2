import  gamesDb  from "../constants/gamesDb";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Catalogo = () => {
  // Categorías únicas
  const categorias = [...new Set(gamesDb.map((juego) => juego.genero))];

  return (
    <Container className="my-4">
      {categorias.map((categoria) => {
        const juegosCategoria = gamesDb.filter(
          (juego) => juego.genero === categoria
        );

        return (
          <div key={categoria} className="mb-5">
            <h2 className="text-light mb-3">{categoria}</h2>
            <Row>
              {juegosCategoria.slice(0, 4).map((juego) => (
                <Col key={juego.titulo} xs={12} sm={6} md={3} className="mb-4">
                  <Card bg="dark" text="light" className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={juego.img}
                      alt={juego.titulo}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <Card.Title className="text-center">
                        {juego.titulo}
                      </Card.Title>
                      <Button
                        variant="primary"
                        className="mt-2"
                        onClick={() => alert(`Agregado ${juego.titulo} al carrito`)}
                      >
                        <FaShoppingCart className="me-2" />
                        Añadir al carrito
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default Catalogo;
