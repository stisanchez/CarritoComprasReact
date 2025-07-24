import React, { useEffect, useState } from 'react';

import GetAll_Orders from '../Components/Utils/GetOrders';
import { LinesChart } from '../Components/Stadistics/LinesChart';

export const Stadistics = () => {
  const { orders } = GetAll_Orders();
  const temp = [];
  orders.map((ord) => { ord.detail.map((det) => { temp.push(det); }) });

  const _productos = [...new Set(temp.map(product => product.descripcion))];
  const _numero = [...new Set(temp.map(item => item.id_item))];

  return (
    <>
      <LinesChart categorias={_productos} numero={_numero} tituloGrafico={"Productos más comprados"} />
    </>
  )
}