import React, { useContext } from 'react'
import GetAll_Products from '../Components/Utils/GetProducts'
import { ImagenComponent } from './../Components/Common/ImagenComponent';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import DataContext from '../Components/Context/DataContext';
import CardProductsBig from '../Components/Products/CardProductsBig';

export const Catalog = () => {
  const { products } = GetAll_Products();
  return (
    <>
      <div className='contenedor-products-list'>
        {
          products.map(product => (

              <CardProductsBig 
                key={product.id}
                product = {product}
              />
          ))
        }
      </div>
    </>
  )
}
