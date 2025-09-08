import { useState } from "react";
import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import FormLogin from "../components/auth/FormLogin";
import FormRegister from "../components/auth/FormRegister";
import useStorage from "../utils/LocalStorage";

function AuthModal() {
  const [_, setUser] = useStorage("user", null, "session");
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState("login"); // controla la tab activa

  const handleClose = () => setShow(false);
  const handleShow = (key = "login") => {
    setActiveKey(key); // al abrir podés elegir si arranca en login o registro
    setShow(true);
  };

  return (
    <>
      {/* Botones para abrir el modal desde donde quieras */}
      <Button variant="outline-primary" onClick={() => handleShow("login")}>
        Iniciar sesión
      </Button>{" "}
      <Button
        variant="outline-secondary"
        onClick={() => handleShow("register")}
      >
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
            fill
          >
            <Tab eventKey="login" title="Login">
              <FormLogin
                onLogin={(user) => {
                  setUser(user);
                  handleClose();
                }}
              />
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
