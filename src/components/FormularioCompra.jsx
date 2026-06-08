import { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext.jsx';

const valoresIniciales = {
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  entrega: 'envio',
  mensaje: ''
};

export default function FormularioCompra({ onConfirmar }) {
  const { items, total, vaciar } = useCarrito();
  const [datos, setDatos] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos(prev => ({ ...prev, [name]: value }));
    setErrores(prev => ({ ...prev, [name]: '' }));
  };

  const validar = () => {
    const errs = {};
    if (!datos.nombre.trim()) errs.nombre = 'El nombre es obligatorio.';
    if (!datos.email.trim()) errs.email = 'El email es obligatorio.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) errs.email = 'Email inválido.';
    if (!datos.telefono.trim()) errs.telefono = 'El teléfono es obligatorio.';
    else if (!/^\d{6,}$/.test(datos.telefono.replace(/\s|-/g, ''))) errs.telefono = 'Teléfono inválido.';
    if (!datos.direccion.trim()) errs.direccion = 'La dirección o localidad es obligatoria.';
    if (items.length === 0) errs.carrito = 'El carrito está vacío. Agregá productos antes de confirmar.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validar();
    if (Object.keys(errs).length > 0) {
      setErrores(errs);
      return;
    }
    setEnviado(true);
    if (onConfirmar) onConfirmar({ datos, items, total });
    setDatos(valoresIniciales);
    vaciar();
  };

  if (enviado) {
    return (
      <Alert variant="success" className="form-tienda">
        <Alert.Heading>¡Compra confirmada!</Alert.Heading>
        <p>Gracias por tu compra. Te enviaremos un email con los detalles del pedido y la entrega.</p>
        <Button className="btn-principal" onClick={() => setEnviado(false)}>
          Hacer otra compra
        </Button>
      </Alert>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className="form-tienda" noValidate>
      {errores.carrito && <Alert variant="warning">{errores.carrito}</Alert>}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre y apellido *</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={datos.nombre}
              onChange={handleChange}
              isInvalid={!!errores.nombre}
            />
            <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={datos.email}
              onChange={handleChange}
              isInvalid={!!errores.email}
            />
            <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Teléfono *</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              value={datos.telefono}
              onChange={handleChange}
              isInvalid={!!errores.telefono}
            />
            <Form.Control.Feedback type="invalid">{errores.telefono}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Dirección o localidad *</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={datos.direccion}
              onChange={handleChange}
              isInvalid={!!errores.direccion}
            />
            <Form.Control.Feedback type="invalid">{errores.direccion}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Método de entrega *</Form.Label>
        <Form.Select name="entrega" value={datos.entrega} onChange={handleChange}>
          <option value="envio">Envío a domicilio</option>
          <option value="retiro">Retiro en local</option>
          <option value="punto">Punto de entrega</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mensaje o aclaración (opcional)</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="mensaje"
          value={datos.mensaje}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit" className="btn-principal w-100" size="lg">
        Confirmar compra
      </Button>
    </Form>
  );
}
