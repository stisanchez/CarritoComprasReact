import { useEffect, useMemo, useState } from "react";
import DataContext from "./DataContext";
import { RouterProvider } from "react-router-dom";
import router from "../Router/router";

export const MyContextProvider = () => {

  const [carrito, setCarrito] = useState([]);

 const setCarrito_Function = (nuevoProducto) => {
     setCarrito(previtem => [...previtem, nuevoProducto]);
   };

  useEffect(() => {
    console.log('Context CARRITO', carrito);
    sessionStorage.setItem('car', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <DataContext.Provider value={{ usuario: "Nombre Usuario", cantidadCarrito: carrito.length, setCarrito_Function, carrito }}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  )
}
