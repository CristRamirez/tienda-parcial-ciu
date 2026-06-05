import { Card } from 'react-bootstrap';

export default function ProductoCard({ producto }) {
  const sinStock = producto.stock === 0;

  return (
    <Card className="producto-card position-relative">
      {producto.etiqueta && <span className="etiqueta">{producto.etiqueta}</span>}
      <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
      <Card.Body className="d-flex flex-column">
        <div className="categoria mb-1">{producto.categoria}</div>
        <Card.Title className="mt-2">{producto.nombre}</Card.Title>
        <small className="text-muted mb-2">Marca: {producto.autor}</small>
        <Card.Text className="flex-grow-1">{producto.descripcion}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="precio">${producto.precio.toLocaleString('es-AR')}</span>
          {sinStock
            ? <span className="sin-stock">Sin stock</span>
            : <small>Stock: {producto.stock}</small>}
        </div>
      </Card.Body>
    </Card>
  );
}
