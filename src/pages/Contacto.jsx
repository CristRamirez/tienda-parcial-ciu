import { Container, Row, Col } from 'react-bootstrap';
import FormularioCompra from '../components/FormularioCompra.jsx';
import { useCarrito } from '../context/CarritoContext.jsx';

export default function Contacto() {
  const { items, total, cantidadTotal } = useCarrito();

  return (
    <Container className="py-4">
      <h2 className="titulo-seccion">Finalizar compra</h2>
      <Row className="g-4">
        <Col lg={7}>
          <FormularioCompra />
        </Col>
        <Col lg={5}>
          <div className="resumen-carrito">
            <h4>Detalle del pedido</h4>
            <hr />
            {items.length === 0
              ? <p className="text-muted">Aún no agregaste productos al carrito.</p>
              : items.map(i => (
                  <div key={i.id} className="d-flex justify-content-between mb-2">
                    <span>{i.nombre} × {i.cantidad}</span>
                    <strong>${(i.precio * i.cantidad).toLocaleString('es-AR')}</strong>
                  </div>
                ))
            }
            <hr />
            <div className="d-flex justify-content-between">
              <span>Productos:</span><strong>{cantidadTotal}</strong>
            </div>
            <div className="d-flex justify-content-between fs-5">
              <span>Total:</span>
              <strong>${total.toLocaleString('es-AR')}</strong>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
