import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Inicio() {
    return (
        <section className="hero">
        <Container>
            <h1>La Mitad Más Uno</h1>
            <div className="subtitulo">⭐ Pasión Xeneize ⭐</div>
            <p>
                Tienda no oficial dedicada al hincha de Boca Juniors. Camisetas, indumentaria,
                accesorios y artículos para llevar los colores azul y oro a todos lados.
                Del Cilindro a la Bombonera, lo tenemos todo.
            </p>
            <Button as={Link} to="/productos" className="btn-hero" size="lg">
                Ver productos
            </Button>
        </Container>
        </section>
    );
}