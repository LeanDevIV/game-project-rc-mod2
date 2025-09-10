import { useNavigate } from "react-router";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./InfoContacto.css";

const InfoContacto = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={8} xl={6}>
          <Card className="glass-card shadow-sm p-2">
            <div className="text-center mb-3">
              <img
                src="/src/assets/logo.png"
                alt="Logo Vento Gaming"
                className="logo-contacto"
              />
            </div>

            <Card.Body>
              <Card.Title className="text-center mb-4 fs-3 fw-bold text-primary">
                Vento Gaming
              </Card.Title>
              <Card.Text className="text-center fs-6 text-secondary">
                Gral paz 576
                <br />
                RollingCode, Piso 8
              </Card.Text>
              <div className="text-center my-3">
                <Button
                  onClick={() => navigate("/Error404Page")}
                  variant="outline-primary"
                  className="btn-glow"
                >
                  Obtener direcciones
                </Button>
              </div>
              <hr />
              <Card.Text className="text-center fs-6 text-secondary">
                <strong>Contacto de negocios:</strong>
                <br />
                <a href="mailto:vento@gamming.com">vento@gamming.com</a>
                <br />
                <a href="tel:+14023708170">402-370-8170</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoContacto;
