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
    if (nuevoProducto) {
      const validarRepetido = carritoFinal?.filter((item) => item.id_item === nuevoProducto.id);
      if (validarRepetido.length <= 0) {
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

    }else{
      setCarritoFinal([]);
    }

  };

  const cambiarCantidad = (nuevaCantidad, id, precioUnitario, porcentaje_descuento) => {

    const valorDescuento = parseFloat(nuevaCantidad) * (parseFloat(precioUnitario) * (parseFloat(porcentaje_descuento) / 100));
    const valorTotal = (parseFloat(nuevaCantidad) * parseFloat(precioUnitario)) - valorDescuento;

    setCarritoFinal(prevItems =>
      prevItems?.map(item =>
        item.id_item === id ? {
          ...item,
          cantidad: nuevaCantidad,
          valorDescuento: valorDescuento,
          precioFinalArticulo: valorTotal
        } : item
      )
    );
  }

  const eliminarDelCarrito = (id) => {
    setItemIdToDelete(id);
  }

  useEffect(() => {
    setCarritoFinal((prevItems) => prevItems?.filter(item => item.id_item !== itemIdToDelete));
    setItemIdToDelete(null);
  }, [itemIdToDelete]);

  useEffect(() => {
    sessionStorage.setItem('car', JSON.stringify(carritoFinal));
  }, [carritoFinal]);

  return (
    <DataContext.Provider value={{
      usuario, setUsuario, cantidadCarrito: carritoFinal.length, setCarrito_Function,
      carritoFinal, cambiarCantidad, eliminarDelCarrito, setVoucher, voucher
    }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  )
}
