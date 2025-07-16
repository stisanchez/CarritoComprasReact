import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';

export const CardSummary = ({ listaItems }) => {
 const [selectedOption, setSelectedOption] = useState('');


    const precioTotal_Items = listaItems.reduce((acc, item) => acc + parseFloat(item.precioFinalArticulo), 0);


    const shippingMethods = [
        { label: 'Standard delivery $8', value: '8' },
        { label: 'Prime delivery $12', value: '12' },
        { label: 'Pick up in store $2', value: '2' },
    ];
    const onOptionChange = (e) => {
        setSelectedOption(e.value);
        console.log('selectedOption:',selectedOption);
    };

      useEffect(() => {       
        console.log('selectedOption:',selectedOption);  
      }, [selectedOption]);

    return (
        <div>
            <div style={{ margin: '10px 10px' }}>
                <p>Items: {listaItems.length}</p>
                <p>Total price: {precioTotal_Items.toFixed(2)}</p>
                <span><label>Shipping:</label>
                    <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.value)} options={shippingMethods} optionLabel="label"
                        editable placeholder="Shipping option" className="w-full md:w-14rem dropdwon-payment"/></span>
                <p>TOTAL: $ <b>{ parseFloat(selectedOption) > 0 ?  (precioTotal_Items + parseFloat(selectedOption)).toFixed(2) : precioTotal_Items.toFixed(2)}</b></p>
            </div>


        </div>
    )
}
