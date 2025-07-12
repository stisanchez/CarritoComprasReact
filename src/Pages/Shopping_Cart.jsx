import React, { useContext, useEffect } from 'react'
import DataContext from '../Components/Context/DataContext';
import { CardProduct } from '../Components/Shopping_Card/CardProduct';
import { Button } from 'primereact/button';

export const Shopping_Cart = () => {

  const { usuario, carrito } = useContext(DataContext);

  console.log('Shop usuario:', usuario);
  console.log('Shop carrito:', carrito);

  const storedName = sessionStorage.getItem('car');
  const carList = JSON.parse(storedName);
  console.log('Shop storedName:', JSON.parse(storedName));
  console.log('Shop carList:', carList);

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
              key={item.id}
              nombre={item.title}
              cantidad={1}
              precioUnitario={item.price}
            />
          ))
        }

      </div>
      <div className='contenedor-botones-shoppingCar'>
        <Button label="Cancelar" link onClick={() => window.open('https://react.dev', '_blank')} />
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
          Procesar compra
        </a>
      </div>

    </>

  )
}
