import React from "react";
import ContactForm from "../components/ContactForm";
import InfoContacto from "../components/InfoContacto";
import { Col, Container, Row } from "react-bootstrap";

const ContactPage = () => {
  return (
   <Container className="py-5">
      <Row className="justify-content-center align-items-start">
        {/* Columna del formulario */}
        <Col xs={12} md={6} className="p-4">
          <ContactForm />
        </Col>

        {/* Columna de la info */}
        <Col xs={12} md={6} className="p-4">
          <InfoContacto />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
