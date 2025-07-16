import React, { useContext, useEffect } from 'react'
import DataContext from '../Components/Context/DataContext';
import { CardProduct } from '../Components/Shopping_Card/CardProduct';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CardSummary } from '../Components/Shopping_Card/CardSummary';

export const Shopping_Cart = () => {
  const { usuario } = useContext(DataContext);

  const storedName = sessionStorage.getItem('car');
  const carList = JSON.parse(storedName);
  console.log('carList: ', carList);
  const datosTotalesCompra = { subtotal: 100, iva: 13, totalCompra: 113 }
  return (
    <>
      <div>
        <h2>Usuario: {usuario}</h2>
        
      </div>

      <div className='contenedor-pagina-carrito'>
        <div className='seccion-carrito-detalle'>
          {
            carList.map(item => (
              <CardProduct
                key={item.id_item}
                id={item.id_item}
                nombre={item.descripcion}
                cantidad={item.cantidad}
                precioUnitario={item.precio}
                descuento={item.descuento}
                imagen={item.imagen}
                garantia={item.garantia}
                valorDescuento={item.valorDescuento}
                valorTotal={item.precioFinalArticulo}
              />
            ))
          }
        </div>
        <div className='seccion-carrito-resumen'>
          <CardSummary
            listaItems={carList}
          />
        </div>
      </div>

      <div className='contenedor-botones-shoppingCar'>
        <Button label="Cancelar" link onClick={() => window.open('https://react.dev', '_blank')} />
      </div>
    </>

  )
}
