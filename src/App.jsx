import { Routes, Route } from 'react-router-dom';
import Productos from './pages/Productos.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx';
import DetalleProducto from './pages/DetalleProducto.jsx';
import Carrito from './pages/Carrito.jsx';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<div>Contacto</div>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
