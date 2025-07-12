import { InputNumber } from 'primereact/inputnumber';
import { SplitButton } from 'primereact/splitbutton';

export const CardProduct = ({ nombre, cantidad, precioUnitario }) => {

    const valorTotal = parseFloat(cantidad) * parseFloat(precioUnitario);

    const items = [
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                // Handle delete action
            }
        },
        {
            label: 'Atualizar',
            icon: 'pi pi-refresh',
            command: () => {
                // Handle update action
            }
        }
    ];

    const save = () => {
        // Handle default action (e.g., save)
    }

    return (
        <>
            <div className="cart-shoppingCar">
                <div className="columna1-car">Producto: {nombre} </div>
                <div className="columna2-car">Cantidad:  
                    <InputNumber value={cantidad} onValueChange={() => setValue1(e.value)} mode="decimal" showButtons min={0} max={100}/></div>
                <div className="columna3-car"><div><p>Precio unitario: ₡{precioUnitario}</p><p>Precio total: ₡{valorTotal}</p></div></div>
                <div className="columnaAcciones-car">
                    <SplitButton label="Acciones" icon="pi pi-bars" onClick={save} model={items} severity="secondary" outlined />
                </div>
            </div>
        </>
    )
}
