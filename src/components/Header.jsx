// Dependencias
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,

} from "react-bootstrap";

import { NavLink } from "react-router";
import AuthModal from "../mod/AuthModal";
import { useUser } from "../context/UserContext";
// import useStorage from "../utils/LocalStorage";

// --------------
function Header() {
const {user,setUser}=useUser();
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Rolling Games</Navbar.Brand>
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

            <Nav.Link as={NavLink} to="/admin" disabled>
              Administración
            </Nav.Link>
            <Nav className="ms-auto">
              {user ? (
                <>
                  <Nav.Link disabled>Hola, {user.email}</Nav.Link>
                  <Button onClick={()=>setUser(null)}>Cerrar sesión</Button>
                </>
              ) : (
                <Nav.Link variant="" className="ms-5">
                  Estás como <strong>invitado</strong>
                </Nav.Link>
              )}
            </Nav>
           
          </Nav>
          {<AuthModal></AuthModal>}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
