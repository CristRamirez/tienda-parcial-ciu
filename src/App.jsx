import { Routes, Route } from 'react-router-dom';
import Productos from './pages/Productos.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<div>Inicio</div>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<div>Detalle</div>} />
          <Route path="/carrito" element={<div>Carrito</div>} />
          <Route path="/contacto" element={<div>Contacto</div>} />
          <Route path="/nosotros" element={<div>Nosotros</div>} />
          <Route path="*" element={<div>Inicio</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
