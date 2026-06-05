import { createContext, useContext, useState } from 'react';

    const CarritoContext = createContext();

    export function CarritoProvider({ children }) {
      const [items, setItems] = useState([]);

      const agregar = (producto) => {
        setItems(prev => {
          const existente = prev.find(i => i.id === producto.id);
          if (existente) {
            if (existente.cantidad >= producto.stock) return prev;
            return prev.map(i =>
              i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
            );
          }
          return [...prev, { ...producto, cantidad: 1 }];
        });
      };

      const aumentar = (id) => {
        setItems(prev => prev.map(i =>
          i.id === id && i.cantidad < i.stock
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        ));
      };

      const disminuir = (id) => {
        setItems(prev => prev
          .map(i => i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i)
          .filter(i => i.cantidad > 0)
        );
      };

      const eliminar = (id) => {
        setItems(prev => prev.filter(i => i.id !== id));
      };

      const vaciar = () => setItems([]);

      const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
      const cantidadTotal = items.reduce((acc, i) => acc + i.cantidad, 0);

      return (
        <CarritoContext.Provider value={{
          items, agregar, aumentar, disminuir, eliminar, vaciar, total, cantidadTotal
        }}>
          {children}
        </CarritoContext.Provider>
      );
    }

    export const useCarrito = () => useContext(CarritoContext);