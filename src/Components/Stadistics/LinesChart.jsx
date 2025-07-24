import React from 'react'
import { Chart } from 'primereact/chart';

export const LinesChart = ({ orders }) => {
    const _productos = [...new Set(orders.map(product => product.descripcion))];
    const _numeroElementosPorProducto = [...new Set(orders.map(item => item.id_item))];
    console.log('_categorias::::', _productos);
    console.log('_numero::::', _numeroElementosPorProducto);

    const data = {
        labels: _productos,
        datasets: [
            {
                label: 'First Dataset',
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
