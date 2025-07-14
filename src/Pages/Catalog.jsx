import React, { useContext, useRef } from 'react'
import GetAll_Products from '../Components/Utils/GetProducts'
import { ImagenComponent } from './../Components/Common/ImagenComponent';
import { Button } from 'primereact/button';
import DataContext from '../Components/Context/DataContext';
import { Toast } from 'primereact/toast';

export const Catalog = () => {
  const { products } = GetAll_Products();
  const { setCarrito_Function } = useContext(DataContext);

  const toast = useRef(null);

  const mensajeItemRetido = () => {
    toast.current.show({ severity: 'error', summary: 'Articulo repetido', detail: 'El artículo ya se encuentra en el carrito, puede gestionarlo en la sección del menú "Carrito de compras" ', life: 3000 });
  };

  const agregadoACarrito = () => {
    toast.current.show({ severity: 'success', summary: 'Articulo agregado', detail: 'Articulo agregado ', life: 1000 });
  };

  return (
    <>
      <div className='contenedor-products-list'>
        {
          products.map(product => (
            <div key={product.id} className='contenedor-cards'>
              <div className="card-product-catalog">
                <div className='contenedor-imagen-catalog'>
                  <ImagenComponent ruta={product.image} className={'imagen-component'}></ImagenComponent>
                </div>
                <div className="card-product-catalog-body">
                  <h2 className="card-product-catalog-title">{product.title.slice(0, 60)}</h2>
                  <p className="card-product-catalog-text">{product.description}</p>
                  <Toast ref={toast} position="top-left" />
                  <div className='contenedor-boton-agregar-carrito'>
                    <Button label="Agregar a carrito" icon="pi pi-cart-plus" iconPos="right" onClick={() => !setCarrito_Function(product) ? mensajeItemRetido(): agregadoACarrito()} />
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
