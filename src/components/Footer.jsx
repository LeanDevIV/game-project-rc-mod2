import { Container, Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5 fixed-bottom">
      <Container>
        <Row>
          {/* Columna 1 - Logo */}
          <Col md={4} className="mb-3 mb-md-0 text-center text-md-start">
            <h4 className="fw-bold">MiLogo</h4>
          </Col>

          {/* Columna 2 - Descripción */}
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
          </Col>

          {/* Columna 3 - Botones */}
          <Col md={4} className="text-center text-md-end">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
              <Button variant="primary">Botón 1</Button>
              <Button variant="secondary">Botón 2</Button>
              <Button variant="success">Botón 3</Button>
              <Button variant="warning">Botón 4</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
