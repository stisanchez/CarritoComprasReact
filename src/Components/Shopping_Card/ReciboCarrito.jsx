import { useContext, useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import DataContext from '../Context/DataContext';
import { ItemLista_Recibo } from './ItemLista_Recibo';
import { Sidebar } from 'primereact/sidebar';

export const ReciboCarrito = () => {

    const [visible, setVisible] = useState(false);
    const { usuario, carritoFinal } = useContext(DataContext);

    const showDialog = () => {
        setVisible(true);
    };
    const hideDialog = () => {
        setVisible(false);
    };   

    return (
        <div>
            <Button label="Ver el resumen de mi compra" icon="pi pi-check" onClick={showDialog} />
            <Sidebar fullScreen header="Detalle de factura" visible={visible} onHide={hideDialog}>
                <p>{usuario}, este es el detalle de su compra</p>
                {
                    carritoFinal.map(item => (
                        <ItemLista_Recibo
                            key={item.id_item}
                            id={item.id_item}
                            nombreArticulo={item.descripcion}
                            precioUnitario={item.precio}
                            cantidad={item.cantidad}
                        />
                    ))
                }


                <div className='div-resumen-factura'>
                    {/* <p>Subtotal: $ {datosCompra.subtotal}</p>
                    <p>IVA: $ {datosCompra.iva}</p>
                    <p>Total: $ {datosCompra.totalCompra}</p> */}
                </div>

                <div className='contenedor-botones-recibo'>
                    <Button label="Cerrar" onClick={hideDialog} />
                    <Button label="Procesar compra" onClick={() => alert('Procesar')} />
                </div>

            </Sidebar>

        </div>
    )
}
