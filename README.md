# La Mitad Más Uno · Tienda Online

Tienda no oficial de productos del hincha de Boca Juniors. SPA hecha con React + Vite para la materia **Construcción de Interfaces de Usuario** (UNAHUR, 2026).

## Integrantes

- NicolasB
- NicolasD
- Marcos
- Lucas
- Cristian

## Tecnologías

- React 18
- Vite
- React Router DOM 6
- React Bootstrap + Bootstrap 5
- Context API + localStorage

## Cómo correr

```bash
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173)

Build de producción:

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/         Componentes reutilizables
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductoCard.jsx
│   ├── CarritoItem.jsx
│   └── FormularioCompra.jsx
├── pages/              Páginas / rutas
│   ├── Inicio.jsx
│   ├── Productos.jsx
│   ├── DetalleProducto.jsx
│   ├── Carrito.jsx
│   ├── Contacto.jsx
│   └── Nosotros.jsx
├── context/
│   └── CarritoContext.jsx   Estado global del carrito
├── data/
│   └── productos.js         14 productos + categorías
├── App.jsx
├── main.jsx
└── index.css
```

## Rutas

| Path              | Página             |
|-------------------|--------------------|
| `/`               | Inicio (hero + carousel + destacados) |
| `/productos`      | Catálogo con filtros |
| `/producto/:id`   | Detalle de producto |
| `/carrito`        | Carrito de compras |
| `/contacto`       | Formulario de compra |
| `/nosotros`       | Información del emprendimiento |

## Features

- **Catálogo**: buscador por nombre/marca, filtro por categoría, ordenamiento por precio (asc/desc), switch "solo con stock".
- **Detalle de producto**: ruta dinámica `/producto/:id` con `useParams`, descripción larga, stock y botón agregar.
- **Carrito**: persistencia en `localStorage` entre sesiones. Aumentar/disminuir cantidad respetando stock, eliminar item, vaciar carrito.
- **Navbar**: badge con contador de productos del carrito en tiempo real.
- **Confirmación de compra**: modal de confirmación + alerta de éxito.
- **Formulario controlado**: validaciones de nombre, email (regex), teléfono (mín. 6 dígitos), dirección y carrito no vacío.
- **Responsive**: layout adaptado con Bootstrap grid + media queries.

## Decisiones técnicas

- **Context API** para el carrito en vez de Redux: simple, suficiente para este alcance.
- **localStorage** con `useState` lazy initializer + `useEffect` para hidratar/persistir.
- **React Bootstrap** para componentes accesibles (Modal, Carousel, Form) sin reinventar la rueda.
- **useMemo** en el filtrado del catálogo para evitar recalculos innecesarios.

## Trabajo Práctico

Materia: Construcción de Interfaces de Usuario  
Universidad: UNAHUR  
Año: 2026
