import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Alert } from 'react-bootstrap';
import { productos } from '../data/productos.js';
import { useCarrito } from '../context/CarritoContext.jsx';

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregar } = useCarrito();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Producto no encontrado.</Alert>
        <Button as={Link} to="/productos" className="btn-principal">Volver al catálogo</Button>
      </Container>
    );
  }

  const sinStock = producto.stock === 0;

  return (
    <Container className="py-5">
      <Button onClick={() => navigate(-1)} className="btn-secundario mb-4">← Volver</Button>
      <Row className="g-5">
        <Col md={6}>
          <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
        </Col>
        <Col md={6}>
          <Badge bg="secondary" className="mb-2">{producto.categoria}</Badge>
          {producto.etiqueta && <Badge bg="danger" className="ms-2 mb-2">{producto.etiqueta}</Badge>}
          <h1>{producto.nombre}</h1>
          <h5 className="text-muted">{producto.autor}</h5>
          <p className="my-4">{producto.descripcionLarga}</p>
          <div className="detalle-precio mb-3">${producto.precio.toLocaleString('es-AR')}</div>
          <p>
            <strong>Disponibilidad: </strong>
            {sinStock
              ? <span className="sin-stock">Sin stock</span>
              : <span>{producto.stock} unidades disponibles</span>}
          </p>
          <h5 className="mt-4">Características principales</h5>
          <ul>
            <li><strong>Marca:</strong> {producto.autor}</li>
            <li><strong>Categoría:</strong> {producto.categoria}</li>
            <li><strong>Producto:</strong> Original / réplica oficial</li>
            <li><strong>Origen:</strong> Argentina 🇦🇷</li>
            <li><strong>Envío:</strong> A todo el país en 48-72hs</li>
          </ul>
          <div className="d-flex gap-3 mt-4">
            <Button as={Link} to="/productos" className="btn-secundario" size="lg">Volver al catálogo</Button>
            <Button className="btn-principal" size="lg" disabled={sinStock} onClick={() => agregar(producto)}>
              {sinStock ? 'No disponible' : 'Agregar al carrito'}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
