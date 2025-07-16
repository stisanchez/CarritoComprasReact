import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import { Badge } from 'primereact/badge';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const CardSummary = ({ listaItems }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const precioTotal_Items = listaItems.reduce((acc, item) => acc + parseFloat(item.precioFinalArticulo), 0);
    const taxes = (precioTotal_Items) * (0.13);
    const totalyze = precioTotal_Items + taxes;
    const count_Arts = listaItems.reduce((acc, item) => acc + parseFloat(item.cantidad), 0);

    const shippingMethods = [
        { label: '--Selection an option--', value: '0' },
        { label: 'Standard delivery $8', value: '8' },
        { label: 'Prime delivery $12', value: '12' },
        { label: 'Pick up in store $2', value: '2' },
    ];

    const onOptionChange = (e) => {
        setSelectedOption(e.value);
    };

    useEffect(() => {
    }, [selectedOption]);

    return (
        <div>
            <div className='container-summary'>

                <Card title="Summary" subTitle="" className='card-summary'>
                    <div className='fila-summary'>
                        <div>Items</div>
                        <div> <Badge value={count_Arts} /></div>
                    </div>
                    <div className='fila-summary'>
                        <div>Subtotal</div>
                        <div> ${precioTotal_Items.toFixed(2)}</div>
                    </div>
                    <div className='fila-summary'>
                        <div>Taxes</div>
                        <div>${taxes.toFixed(2)}</div>
                    </div>
                    <div className='fila-summary'>
                        <div>Shipping</div>
                        <div>
                            <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={shippingMethods} optionLabel="label"
                                editable placeholder="Shipping option" className="w-full md:w-14rem dropdwon-payment" />
                        </div>
                    </div>

                    <div className='fila-summary fila-summary-total'>
                        <div>Total</div>
                        <div className='total-summary-label'> ${parseFloat(selectedOption) > 0 ? (totalyze + parseFloat(selectedOption)).toFixed(2) : totalyze.toFixed(2)}</div>
                    </div>
                    <div>
                        <Button label="Checkout" icon="pi pi-credit-card" className='button-proceed-payment' />
                    </div>
                </Card>


            </div>


        </div>
    )
}
