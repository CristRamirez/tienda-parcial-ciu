import { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { productos, categorias } from '../data/productos.js';
import ProductoCard from '../components/ProductoCard.jsx';

export default function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  const productosFiltrados = productos
    .filter(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.autor.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter(p => categoria === 'Todas' || p.categoria === categoria);

  return (
    <Container className="py-4">
      <h2 className="titulo-seccion">Catálogo Xeneize</h2>

      <div className="filtros-bar">
        <Row className="g-3 align-items-end">
          <Col md={6}>
            <Form.Label>Buscar por nombre o marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: camiseta, gorra, mate..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Label>Categoría</Form.Label>
            <Form.Select value={categoria} onChange={e => setCategoria(e.target.value)}>
              {categorias.map(c => <option key={c} value={c}>{c}</option>)}
            </Form.Select>
          </Col>
        </Row>
      </div>
      <p className="text-muted">{productosFiltrados.length} producto(s) encontrado(s)</p>

      {productosFiltrados.length === 0
        ? <Alert variant="info">No se encontraron productos con esos filtros.</Alert>
        : <Row className="g-4">
            {productosFiltrados.map(p => (
              <Col key={p.id} sm={6} md={4} lg={3}>
                <ProductoCard producto={p} />
              </Col>
            ))}
          </Row>
      }
    </Container>
  );
}
