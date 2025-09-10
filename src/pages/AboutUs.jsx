import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import infoAboutUs from "../db/infoAboutUs";

function AboutUs() {
  return (
    <>
      <h2 className="text-center my-4" style={{ color: "#efebe7ff" }}>
        ¡Conoce a nuestro equipo!
      </h2>

      <Row xs={1} md={3} className="g-4 mx-4">
        {infoAboutUs.map((data, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card
              className="text-dark  shadow-lg"
              style={{
                width: "18rem",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
              }}
            >
              <Card.Img
                variant="top"
                src={data.imagen}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body
                style={{
                  background:
                    "linear-gradient(45deg, #a3a3a7ff 0%, #121254ff 50%, #000823ff 100%)",
                }}
              >
                <Card.Title
                  className="text-light"
                  style={{ fontWeight: "bold", fontSize: "1.3rem" }}
                >
                  {data.nombre}
                </Card.Title>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button
                    href={data.github}
                    target="_blank"
                    variant="outline-dark"
                    className="rounded-circle p-2"
                  >
                    <FaGithub size={24} />
                  </Button>
                  <Button
                    href={data.linkedIn}
                    target="_blank"
                    variant="outline-primary"
                    className="rounded-circle p-2"
                  >
                    <FaLinkedin size={24} />
                  </Button>
                  <Button
                    href={`mailto:${data.correo}`}
                    target="_blank"
                    variant="outline-danger"
                    className="rounded-circle p-2"
                  >
                    <MdEmail size={24} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AboutUs;
