import { Container, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slides = [
      { img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600', titulo: 'Sentí los colores', texto: 'Indumentaria oficial y artículos del hincha.' },
      { img: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=1600', titulo: 'Camisetas 2026', texto: 'Titular, suplente y retro. Llevá la nueva.' },
      { img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600', titulo: 'Para la tribuna', texto: 'Banderas, gorras y todo para el partido.' }
    ];

export default function Inicio() {
    return (
        <>
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
            
            <Container>
                <Carousel className="mb-5 shadow-lg" style={{borderRadius: '8px', overflow: 'hidden'}}>
                    {slides.map((s, i) => (
                        <Carousel.Item key={i} interval={3500}>
                            <img className="d-block w-100" src={s.img} alt={s.titulo} style={{height: '420px', objectFit: 'cover'}} />
                            <Carousel.Caption>
                                <h3>{s.titulo}</h3>
                                <p>{s.texto}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    );
}