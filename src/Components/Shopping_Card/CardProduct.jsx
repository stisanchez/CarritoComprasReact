import { InputNumber } from 'primereact/inputnumber';
import { useContext } from 'react';
import DataContext from '../Context/DataContext';
import { Button } from 'primereact/button';
import { ImagenComponent } from '../Common/ImagenComponent';
import { Tag } from 'primereact/tag';

export const CardProduct = ({ id, nombre, cantidad, precioUnitario, imagen, descuento, valorDescuento, garantia, valorTotal }) => {

    const { cambiarCantidad, eliminarDelCarrito, carritoFinal } = useContext(DataContext);

    const save = () => {
        // Handle default action (e.g., save)
    }

    return (
        <>
            <div className='card-carrito-detalle'>
                <div>
                    <ImagenComponent
                        ruta={imagen}
                        className='imagen-carrito' />
                </div>
                <div>
                    <p style={{ fontSize: "16px" }}>{nombre}</p>
                    <p style={{ fontSize: "12px" }}>Warranty: {garantia}</p>
                </div>
                <div className='fila-cantidad-articulos'>
                    <InputNumber value={cantidad} onValueChange={(e) => cambiarCantidad(e.value, id, precioUnitario, descuento)} mode="decimal" showButtons min={0} max={100} className='cantidad-items-carrito' />
                </div>
                <div>
                    <p style={{ fontSize: "16px" }}>Unit price: $ {precioUnitario.toFixed(2)}</p>
                    <p style={{ fontSize: "12px" }}> Discount:({descuento} %) =  ${valorDescuento.toFixed(2)}</p>
                </div>
                <div>
                    <p style={{ fontSize: "16px" }}>Total: ${valorTotal.toFixed(2)}</p>

                </div>
                <div>
                    <Tag icon="pi pi-times" severity="danger" className='tag-delete-car' value="" onClick={() => eliminarDelCarrito(id)} ></Tag>
                </div>
            </div>

        </>
    )
}
