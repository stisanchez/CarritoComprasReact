import React from 'react'
import { Chart } from 'primereact/chart';

export const LinesChart = ({ categorias,numero, tituloGrafico }) => {
  
    const data = {
        labels: categorias,
        datasets: [
            {
                label: 'First Dataset',
                data: numero,
                fill: true,
                borderColor: '#6366f1'
            },
        ]
    };
    const options = {
        plugins: {
            title: {
                display: true,
                text: tituloGrafico,
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
