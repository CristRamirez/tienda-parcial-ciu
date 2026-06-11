import { useState } from 'react';
import { Container, Row, Col, Button, Modal, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext.jsx';
import CarritoItem from '../components/CarritoItem.jsx';

export default function Carrito() {
  const { items, total, cantidadTotal, vaciar } = useCarrito();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const confirmar = () => {
    setMostrarModal(false);
    setCompraFinalizada(true);
    vaciar();
  };

  if (compraFinalizada) {
    return (
      <Container className="py-5">
        <Alert variant="success">
          <Alert.Heading>¡Compra confirmada!</Alert.Heading>
          <p>Gracias por elegir La Mitad Más Uno. Recibirás un mail con el detalle de tu pedido. ¡Dale Boca!</p>
          <Button as={Link} to="/productos" className="btn-principal">Seguir comprando</Button>
        </Alert>
      </Container>
    );
  }

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
              <Button className="btn-principal" size="lg" onClick={() => setMostrarModal(true)}>
                Confirmar compra
              </Button>
              <Button as={Link} to="/contacto" className="btn-secundario">
                Completar datos
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Vas a confirmar la compra de <strong>{cantidadTotal} productos</strong> por un total de <strong>${total.toLocaleString('es-AR')}</strong>.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>Cancelar</Button>
          <Button className="btn-principal" onClick={confirmar}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
