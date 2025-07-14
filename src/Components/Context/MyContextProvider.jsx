import { useEffect, useMemo, useState } from "react";
import DataContext from "./DataContext";
import { RouterProvider } from "react-router-dom";
import router from "../Router/router";

export const MyContextProvider = () => {

  const [carritoFinal, setCarritoFinal] = useState([]);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const setCarrito_Function = (nuevoProducto) => {
    const validarRepetido = carritoFinal.filter((item) => item.id_item === nuevoProducto.id);
    if (validarRepetido.length <= 0) {
      const itemAgregado = { id_item: nuevoProducto.id, descripcion: nuevoProducto.title, cantidad: 1, precio: nuevoProducto.price, precioFinalArticulo: 0 }
      setCarritoFinal(previtem => [...previtem, itemAgregado]);
      return true;
    } else {
      return false;
    }
  };

  const cambiarCantidad = (nuevaCantidad, id) => {
    setCarritoFinal(prevItems =>
      prevItems.map(item =>
        item.id_item === id ? { ...item, cantidad: nuevaCantidad, precioFinalArticulo: parseFloat(nuevaCantidad) * parseFloat(item.precio) } : item
      )
    );
  }

  const eliminarDelCarrito = (id) => {
     setItemIdToDelete(id);
  }

  useEffect(() => {
    setCarritoFinal((prevItems) => prevItems.filter(item => item.id_item !== itemIdToDelete));
    setItemIdToDelete(null);
    console.log('setCarritoFinal: ', carritoFinal);
  }, [itemIdToDelete]);  

  useEffect(() => {
        sessionStorage.setItem('car', JSON.stringify(carritoFinal));
  }, [carritoFinal]);

  return (
    <DataContext.Provider value={{ usuario: "Nombre Usuario", cantidadCarrito: carritoFinal.length, setCarrito_Function, carritoFinal, cambiarCantidad, eliminarDelCarrito }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  )
}
