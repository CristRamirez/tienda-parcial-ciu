import { Container, Row, Col } from 'react-bootstrap';
import { productos } from '../data/productos.js';
import ProductoCard from '../components/ProductoCard.jsx';

export default function Productos() {
  return (
    <Container className="py-4">
      <h2 className="titulo-seccion">Catálogo Xeneize</h2>
      <Row className="g-4">
        {productos.map(p => (
          <Col key={p.id} sm={6} md={4} lg={3}>
            <ProductoCard producto={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
