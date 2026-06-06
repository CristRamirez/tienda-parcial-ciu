import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext.jsx';

export default function Navbar() {
  const { cantidadTotal } = useCarrito();
  return (
    <BSNavbar expand="lg" className="navbar-tienda" variant="dark" sticky="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/">⚽ La Mitad Más Uno</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="nav-tienda" />
        <BSNavbar.Collapse id="nav-tienda">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">
              Carrito
              {cantidadTotal > 0 && <span className="badge-carrito">{cantidadTotal}</span>}
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
