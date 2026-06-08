import { Button } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext.jsx';

export default function CarritoItem({ item }) {
  const { aumentar, disminuir, eliminar } = useCarrito();
  const subtotal = item.precio * item.cantidad;

  return (
    <div className="carrito-item d-flex flex-wrap align-items-center gap-3">
      <img src={item.imagen} alt={item.nombre} />
      <div className="flex-grow-1">
        <h6 className="mb-0">{item.nombre}</h6>
        <small className="text-muted">{item.autor}</small>
        <div>Precio unidad: ${item.precio.toLocaleString('es-AR')}</div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <Button size="sm" variant="outline-secondary" onClick={() => disminuir(item.id)}>−</Button>
        <span style={{minWidth: '24px', textAlign: 'center'}}>{item.cantidad}</span>
        <Button
          size="sm"
          variant="outline-secondary"
          onClick={() => aumentar(item.id)}
          disabled={item.cantidad >= item.stock}
        >+</Button>
      </div>
      <div style={{minWidth: '100px', textAlign: 'right'}}>
        <strong>${subtotal.toLocaleString('es-AR')}</strong>
      </div>
      <Button size="sm" variant="outline-danger" onClick={() => eliminar(item.id)}>
        Eliminar
      </Button>
    </div>
  );
}
