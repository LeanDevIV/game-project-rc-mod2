// 📦 Dependencias
import { useState } from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import FormLogin from "../components/auth/FormLogin";
import FormRegister from "../components/auth/FormRegister";

function AuthModal() {
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState("login"); // 👈 controla la tab activa

  const handleClose = () => setShow(false);
  const handleShow = (key = "login") => {
    setActiveKey(key); // 👈 al abrir podés elegir si arranca en login o registro
    setShow(true);
  };

  return (
    <>
      {/* Botones para abrir el modal desde donde quieras */}
      <Button variant="primary" onClick={() => handleShow("login")}>
        Iniciar sesión
      </Button>{" "}
      <Button variant="secondary" onClick={() => handleShow("register")}>
        Registrarse
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {activeKey === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            className="mb-3 d-flex flex-row"
          >
            <Tab eventKey="login" title="Login">
              <FormLogin />
            </Tab>
            <Tab eventKey="register" title="Registro">
              <FormRegister />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthModal;
