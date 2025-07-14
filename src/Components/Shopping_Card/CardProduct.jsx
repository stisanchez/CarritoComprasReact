import { InputNumber } from 'primereact/inputnumber';
import { useContext } from 'react';
import DataContext from '../Context/DataContext';
import { Button } from 'primereact/button';

export const CardProduct = ({ id, nombre, cantidad, precioUnitario }) => {

    const { cambiarCantidad, eliminarDelCarrito } = useContext(DataContext);

    const valorTotal = parseFloat(cantidad) * parseFloat(precioUnitario);

    const save = () => {
        // Handle default action (e.g., save)
    }

    return (
        <>
            <div className="cart-shoppingCar">
                <div className="columna1-car">Producto: {nombre} </div>
                <div className="columna2-car">Cantidad:
                    <InputNumber value={cantidad} onValueChange={(e) => cambiarCantidad(e.value, id)} mode="decimal" showButtons min={0} max={100} className='cantidad-items-carrito' />
                </div>
                <div className="columna3-car"><div><p>Precio unitario: ₡{precioUnitario}</p><p>Precio total: ₡{valorTotal}</p></div></div>
                <div className="columnaAcciones-car">
                    <Button icon="pi pi-times" aria-label="Filter" severity="danger" onClick={() => eliminarDelCarrito(id)} />
                </div>
            </div>
        </>
    )
}
