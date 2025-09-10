import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";
import logoNav from "../assets/logo.png";
import AuthModal from "../mod/AuthModal";
import { useUser } from "../context/UserContext";
import { FaSignOutAlt } from "react-icons/fa";

// --------------
function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  return (
    <Navbar expand="lg" className="glass-darker" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logoNav}
            alt="Logo"
            style={{ width: "90px", height: "40px" }}
          />
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
                  <Nav.Link as={NavLink} to="/cart">
                    🛒 Carrito
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/admin" disabled>
                    Administración
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/cart" disabled>
                    🛒 Carrito
                  </Nav.Link>
                  <Nav.Link className="ms-5">
                    Estás como <strong>invitado</strong>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Nav>
          {user ? (
            <>
              <Nav>
                <Nav.Link disabled> Hola, {user.nombre}🫡</Nav.Link>
              </Nav>
              <Button
                size="md"
                className="ms-2"
                variant="outline-danger"
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
              >
                <FaSignOutAlt className="me-2" />
              </Button>
            </>
          ) : (
            <AuthModal />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
