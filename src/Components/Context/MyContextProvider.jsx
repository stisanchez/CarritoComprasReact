import { useEffect, useMemo, useState } from "react";
import DataContext from "./DataContext";
import { RouterProvider } from "react-router-dom";
import router from "../Router/router";

export const MyContextProvider = () => {

  const [carritoFinal, setCarritoFinal] = useState([]);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [usuario, setUsuario] = useState("");
  const [voucher, setVoucher] = useState([]);
   const [orders, setOrders] = useState([]);

  const setCarrito_Function = (nuevoProducto) => {
    const validarRepetido = carritoFinal.filter((item) => item.id_item === nuevoProducto.id);
    if (validarRepetido.length <= 0) {
      console.log('nuevoProducto: ', nuevoProducto);
      const valorDDD = parseFloat(1) * (parseFloat(nuevoProducto.price) * (parseFloat(nuevoProducto.discountPercentage) / 100));

      const itemAgregado = {
        id_item: nuevoProducto.id, descripcion: nuevoProducto.title, cantidad: 1, precio: nuevoProducto.price,
        imagen: nuevoProducto.thumbnail, descuento: nuevoProducto.discountPercentage, garantia: nuevoProducto.warrantyInformation,
        valorDescuento: valorDDD,
        precioFinalArticulo: parseFloat(nuevoProducto.price) - valorDDD,
      }
      setCarritoFinal(previtem => [...previtem, itemAgregado]);
      return true;
    } else {
      return false;
    }
  };

  const cambiarCantidad = (nuevaCantidad, id, precioUnitario, porcentaje_descuento) => {

    const valorDescuento = parseFloat(nuevaCantidad) * (parseFloat(precioUnitario) * (parseFloat(porcentaje_descuento) / 100));
    const valorTotal = (parseFloat(nuevaCantidad) * parseFloat(precioUnitario)) - (porcentaje_descuento);
    const totalizado = parseFloat(nuevaCantidad) * parseFloat(valorTotal)

    setCarritoFinal(prevItems =>
      prevItems.map(item =>
        item.id_item === id ? {
          ...item, cantidad: nuevaCantidad,
          valorDescuento: valorDescuento,
          precioFinalArticulo: valorTotal,
          precioFinalArticulo: totalizado
        } : item
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
    <DataContext.Provider value={{ usuario, setUsuario, cantidadCarrito: carritoFinal.length, setCarrito_Function, 
    carritoFinal, cambiarCantidad, eliminarDelCarrito, setVoucher, voucher}}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  )
}
