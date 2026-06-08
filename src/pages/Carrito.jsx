import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext.jsx';
import CarritoItem from '../components/CarritoItem.jsx';

export default function Carrito() {
  const { items, total, cantidadTotal, vaciar } = useCarrito();

  if (items.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2 className="titulo-seccion">Tu carrito</h2>
        <p className="text-muted">Tu carrito está vacío.</p>
        <Button as={Link} to="/productos" className="btn-principal">Ver catálogo</Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="titulo-seccion">Tu carrito ({cantidadTotal} productos)</h2>
      <Row>
        <Col lg={8}>
          {items.map(item => <CarritoItem key={item.id} item={item} />)}
          <Button variant="outline-danger" onClick={vaciar}>Vaciar carrito</Button>
        </Col>
        <Col lg={4}>
          <div className="resumen-carrito">
            <h4>Resumen</h4>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Productos:</span><strong>{cantidadTotal}</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Envío:</span><strong>Gratis</strong>
            </div>
            <hr />
            <div className="d-flex justify-content-between fs-4">
              <span>Total:</span>
              <strong>${total.toLocaleString('es-AR')}</strong>
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button as={Link} to="/contacto" className="btn-secundario">
                Completar datos
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
