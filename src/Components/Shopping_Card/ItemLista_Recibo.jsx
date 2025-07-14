import React from 'react'
import { Fieldset } from 'primereact/fieldset';

export const ItemLista_Recibo = ({ id, nombreArticulo, precioUnitario, cantidad }) => {
    return (
        <div className='contenedor-item-lista-recibo'>
            <Fieldset legend={nombreArticulo}>
                <p>Cantidad: {cantidad} precio unitario: $ {precioUnitario}, total de la línea: <b>$ {parseFloat(cantidad) * parseFloat(precioUnitario)}</b> </p>
            </Fieldset>
        </div>
    )
}
