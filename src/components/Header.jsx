// Dependencias
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router";
import logoNav from "../assets/logo.png";
import AuthModal from "../mod/AuthModal";
import { useUser } from "../context/UserContext";
// import useStorage from "../utils/LocalStorage";

// --------------
function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logoNav} alt="Logo" style={{ width: "90px", height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/favoritos">
              Favoritos
            </Nav.Link>

            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link as={NavLink} to="/admin">
                    Administración
                  </Nav.Link>
                  <Nav.Link disabled>Hola, {user.email}</Nav.Link>
                  <Button
                  
                    onClick={() => {
                      setUser(null);
                      navigate("/");
                    }}
                  >
                    Cerrar sesión
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/admin" disabled>
                    Administración
                  </Nav.Link>
                  <Nav.Link variant="" className="ms-5">
                    Estás como <strong>invitado</strong>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Nav>
          {<AuthModal></AuthModal>}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
