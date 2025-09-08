import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import infoAboutUs from "../db/infoAboutUs";

function AboutUs() {
  console.log("INFORABOUTUS: ", infoAboutUs);
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {infoAboutUs.map((data, idx) => (
          <Col key={idx}>
            <Card
              className="text-white"
              bg="dark"
              border="dark"
              style={{ width: "18rem", justifyContent: "space-between" }}
            >
              <Card.Img variant="top" src={data.imagen} />
              <Card.Body>
                <Card.Title>{data.nombre}</Card.Title>

                {/* Instalar bootstrap icons y agregar a los botones */}
                <Button
                  href={data.github}
                  target="_blank"
                  variant="outline-danger"
                >
                  Github
                </Button>
                <Button
                  href={data.correo}
                  target="_blank"
                  variant="outline-secondary"
                >
                  Correo electrònico
                </Button>
                <Button
                  href={data.linkedIn}
                  target="_blank"
                  variant="outline-primary"
                >
                  LinkedIN
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AboutUs;
