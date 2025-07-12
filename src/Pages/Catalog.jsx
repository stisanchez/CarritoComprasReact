import React, { useContext } from 'react'
import GetAll_Products from '../Components/Utils/GetProducts'
import { ImagenComponent } from './../Components/Common/ImagenComponent';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import DataContext from '../Components/Context/DataContext';

export const Catalog = () => {
  const { products } = GetAll_Products();
  const { setCarrito_Function } = useContext(DataContext);

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

                  <div className='contenedor-boton-agregar-carrito'>
                    <Button label="Agregar a carrito" icon="pi pi-cart-plus" iconPos="right" onClick={()=> setCarrito_Function(product)}/>
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
