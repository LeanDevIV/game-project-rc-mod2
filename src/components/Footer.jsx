import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

// Opción A (logo en /public): <Image src="/logo.png" ... />
// Opción B (logo importado desde /src/assets):
// import logo from '../assets/logo.png'; y luego <Image src={logo} ... />

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto ">
      <Container className="py-4">
        <Row className="gy-3 align-items-center">
          {/* Columna 1: Logo */}
          <Col xs={12} md={4} className="d-flex align-items-center">
            <Image
              src="/logo.png"       // reemplazá por tu ruta real
              alt="Logo de la marca"
              height={48}
              rounded
            />
          </Col>

          {/* Columna 2: Descripción */}
          <Col xs={12} md={4}>
            <p className="mb-0 small">
              Acá va una descripción breve de tu sitio o negocio (2–3 líneas).
              Contá misión, servicios o un eslogan simple.
            </p>
          </Col>

          {/* Columna 3: Botones a sitios externos */}
          <Col xs={12} md={4} className="d-flex flex-wrap gap-2 justify-content-md-end">
            <Button
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              size="sm"
            >
              Enlace 1
            </Button>
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-light" size="sm">
              Enlace 2
            </Button>
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-light" size="sm">
              Enlace 3
            </Button>
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" variant="outline-light" size="sm">
              Enlace 4
            </Button>
          </Col>
        </Row>

        {/* Línea de derechos / año actual (opcional) */}
        <Row className="pt-3">
          <Col>
            <small className="text-secondary">
              © {new Date().getFullYear()} Tu Marca
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

