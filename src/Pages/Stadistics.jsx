import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';

import GetAll_Orders from '../Components/Utils/GetOrders';

export const Stadistics = () => {
  const { orders } = GetAll_Orders();

  const temp = [];   //Get Any pre-stored items

  orders.map((ord) => {ord.detail.map((det) => {temp.push(det);})});

  //console.log('TEMP', temp);

  const _productos = [...new Set(temp.map(product => product.descripcion))];
  const _numeroElementosPorProducto= [...new Set(temp.map(item => item.id_item))];
  console.log('_categorias::::', _productos);
  console.log('_numero::::', _numeroElementosPorProducto);

  const data = {
    //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    labels: _productos,
    datasets: [
      {
        label: 'First Dataset',
        // data: [65, 59, 80],
        data: _numeroElementosPorProducto,
        fill: true,
        borderColor: '#6366f1'
      },      
    ]
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Productos más comprados',
        font: {
          size: 14
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }

  return (
    <div>
      <Chart type="line" data={data} options={options} className='grafico-estadisticas'/>
    </div>
  )
}