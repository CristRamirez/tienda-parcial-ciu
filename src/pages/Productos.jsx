import { useState, useMemo, useEffect } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { productos, categorias } from '../data/productos.js';
import ProductoCard from '../components/ProductoCard.jsx';

export default function Productos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [orden, setOrden] = useState('default');
  const [soloStock, setSoloStock] = useState(false);

  const productosFiltrados = useMemo(() => {
    let lista = productos.filter(p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.autor.toLowerCase().includes(busqueda.toLowerCase())
    );
    if (categoria !== 'Todas') lista = lista.filter(p => p.categoria === categoria);
    if (soloStock) lista = lista.filter(p => p.stock > 0);
    if (orden === 'asc') lista = [...lista].sort((a, b) => a.precio - b.precio);
    if (orden === 'desc') lista = [...lista].sort((a, b) => b.precio - a.precio);
    return lista;
  }, [busqueda, categoria, orden, soloStock]);

  useEffect(() => { document.title = 'Catálogo - La Mitad Más Uno'; }, []);

  return (
    <Container className="py-4">
      <h2 className="titulo-seccion">Catálogo Xeneize</h2>

      <div className="filtros-bar">
        <Row className="g-3 align-items-end">
          <Col md={4}>
            <Form.Label>Buscar por nombre o marca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: camiseta, gorra, mate..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Categoría</Form.Label>
            <Form.Select value={categoria} onChange={e => setCategoria(e.target.value)}>
              {categorias.map(c => <option key={c} value={c}>{c}</option>)}
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>Ordenar por precio</Form.Label>
            <Form.Select value={orden} onChange={e => setOrden(e.target.value)}>
              <option value="default">Sin orden</option>
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Check
              type="switch"
              label="Solo con stock"
              checked={soloStock}
              onChange={e => setSoloStock(e.target.checked)}
            />
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
