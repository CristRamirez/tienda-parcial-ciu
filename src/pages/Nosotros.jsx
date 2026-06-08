import { Container, Row, Col } from 'react-bootstrap';

export default function Nosotros() {
    return (
        <Container className="py-5">
            <h2 className="titulo-seccion">Nosotros</h2>
            <Row className="g-4">
                <Col md={6}>
                    <img
                    src="https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800"
                    alt="Boca Juniors"
                    className="img-fluid rounded shadow"
                    style={{border: '4px solid var(--color-secundario)'}}
                    />
                </Col>
                <Col md={6}>
                    <h3 style={{color: 'var(--color-primario)', fontWeight: 900}}>Somos hinchas, como vos</h3>
                    <p>La Mitad Más Uno nació en 2026 con una idea clara: que cualquier hincha pueda
                    tener los colores cerca, sin viajar a la Boutique del Fútbol. Somos fanáticos
                    del Xeneize y trabajamos pensando en el que vive cada partido como una final.</p>
                    <p>Tenemos camisetas titulares, suplentes, ediciones retro, indumentaria de
                    entrenamiento, accesorios para la casa y todo lo que el hincha necesita
                    para ir a la cancha.</p>
                    <h4 className="mt-4" style={{color: 'var(--color-primario)', fontWeight: 900}}>Nuestros valores</h4>
                    <ul>
                    <li><strong>Pasión:</strong> Boca es nuestra vida.</li>
                    <li><strong>Calidad:</strong> Solo productos oficiales o réplicas autorizadas.</li>
                    <li><strong>Atención:</strong> El hincha primero, siempre.</li>
                    <li><strong>Envíos rápidos:</strong> A todo el país en 48-72hs.</li>
                    </ul>
                    <div className="p-3 mt-4" style={{
                    background: 'var(--color-primario)',
                    color: 'var(--color-secundario)',
                    borderRadius: '8px',
                    borderLeft: '5px solid var(--color-secundario)',
                    fontWeight: 900,
                    textAlign: 'center',
                    fontSize: '1.3rem',
                    letterSpacing: '2px'
                    }}>⭐ DALE BOCA ⭐</div>
                </Col>
            </Row>
        </Container>
    );
}