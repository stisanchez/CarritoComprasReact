import React, { useContext, useEffect } from 'react'
import DataContext from '../Components/Context/DataContext';
import { CardProduct } from '../Components/Shopping_Card/CardProduct';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ReciboCarrito } from '../Components/Shopping_Card/ReciboCarrito';

export const Shopping_Cart = () => {
  const { usuario } = useContext(DataContext);

  const storedName = sessionStorage.getItem('car');
  const carList = JSON.parse(storedName);
  const datosTotalesCompra = { subtotal: 100, iva: 13, totalCompra: 113 }
  return (
    <>
      <div>
        <h2>Usuario: {usuario}</h2>
        <h3>Estos son los artículos que agregaste al carrito, revisa antes de proceder con la compra</h3>
      </div>

      <div className='contenedor-div-carrito'>
        {
          carList.map(item => (
            <CardProduct
              key={item.id_item}
              nombre={item.descripcion}
              cantidad={item.cantidad}
              precioUnitario={item.precio}
              id={item.id_item}
            />
          ))
        }

      </div>
      <div className='contenedor-botones-shoppingCar'>
        <Button label="Cancelar" link onClick={() => window.open('https://react.dev', '_blank')} />
        <ReciboCarrito />
      </div>
    </>

  )
}
