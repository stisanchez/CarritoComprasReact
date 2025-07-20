import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import { Badge } from 'primereact/badge';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import { Voucher } from './Voucher';
import { Navigate, useNavigate } from 'react-router-dom';

export const CardSummary = ({ listaItems }) => {
    let navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');
    const [visible, setVisible] = useState('');
    const precioTotal_Items = listaItems.reduce((acc, item) => acc + parseFloat(item.precioFinalArticulo), 0);
    const taxes = (precioTotal_Items) * (0.13);
    const totalyze = precioTotal_Items + taxes;
    const count_Arts = listaItems.reduce((acc, item) => acc + parseFloat(item.cantidad), 0);

    const shippingMethods = [
        { label: 'Opción de envío', value: '0' },
        { label: 'Standard $8', value: '8' },
        { label: 'Prime $12', value: '12' },
        { label: 'Recoger en tienda $2', value: '2' },
    ];

    const cardsSaved = [
        { label: 'Método de pago', value: '0' },
        { label: 'VISA *********4520', value: '1' },
        { label: 'VISA *********1230', value: '2' },
        { label: 'MC   *********5678 ', value: '3' }
    ];

    useEffect(() => {
    }, [selectedOption]);

    const accept = () => { navigate('/voucher', { replace: true }); }
    const reject = () => { return; }

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
                                editable placeholder="Opción de envío" className="w-full md:w-14rem dropdwon-payment" />
                        </div>
                    </div>

                    <div className='fila-summary'>
                        <div>Method page</div>
                        <div>
                            <Dropdown value={selectedMethod} onChange={(e) => setSelectedMethod(e.value)} options={cardsSaved} optionLabel="label"
                                editable placeholder="Método de pago" className="w-full md:w-14rem dropdwon-payment" />
                        </div>
                    </div>

                    <div className='fila-summary fila-summary-total'>
                        <div>Total</div>
                        <div className='total-summary-label'> ${parseFloat(selectedOption) > 0 ? (totalyze + parseFloat(selectedOption)).toFixed(2) : totalyze.toFixed(2)}</div>
                    </div>
                    <div>
                        <Button id="button" label="Checkout" icon="pi pi-credit-card" className='button-proceed-payment' onClick={() => setVisible(true)} />
                        <ConfirmPopup target={document.getElementById('button')} visible={visible} onHide={() => setVisible(false)} message="Desea proceder con el pedido?"
                            icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                    </div>
                </Card>
            </div>
        </div>
    )
}
