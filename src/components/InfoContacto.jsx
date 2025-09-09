import React from 'react';
import {useNavigate} from 'react-router'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
const InfoContacto = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4 fs-3 fw-bold">
                Vento Gamming
              </Card.Title>
              <Card.Text className="text-center fs-6">
                Gral paz 576<br />
                RollingCode, Piso 8
              </Card.Text>
              <div className="text-center my-3">
                <Button
                  onClick={navigate("/Error404Page")}
                  variant="outline-primary"
                >
                  Obtener direcciones
                </Button>
              </div>
              <hr />
              <Card.Text className="text-center fs-6">
                <strong>Contacto de negocios:</strong><br />
                <a href="mailto:vento@gamming.com">vento@gamming.com</a><br />
                <a href="tel:+14023708170">402-370-8170</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoContacto