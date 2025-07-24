import React, { useEffect, useState } from 'react';
//import { Chart } from 'primereact/chart';

import GetAll_Orders from '../Components/Utils/GetOrders';
import { LinesChart } from '../Components/Stadistics/LinesChart';

export const Stadistics = () => {
  const { orders } = GetAll_Orders();
  const temp = [];   //Get Any pre-stored items
  orders.map((ord) => {ord.detail.map((det) => {temp.push(det);})});

  return (
    <div>
      <LinesChart orders = {temp}/>
    </div>
  )
}