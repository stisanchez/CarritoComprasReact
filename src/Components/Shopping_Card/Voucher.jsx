import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import doneImage from '../../Images/done.png'
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../Context/DataContext';
import CreateOrder_db from '../Utils/CreateOrder';

export const Voucher = () => {

  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();
  const { voucher, setVoucher } = useContext(DataContext);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const usuario = storedUser?.name || 'Invitado';

  function createOrder_Number(length) {
    var result = '';
    var chars = '0123456789';
    for (var i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  useEffect(() => {
    const orderN = createOrder_Number(10);
    setOrderNumber(orderN);
    //SE CREA ORDEN
    CreateOrder_db(orderN, usuario, "", voucher);
    setVoucher(null);
  }, []);

  const header = <div>
    <Image src={doneImage} alt="Succesfull" className='imagen-voucher' />
  </div>

  const footer = <span className='buttons-voucher'>
    <Button label="Seguir comprando" icon="pi pi-check-circle" style={{ marginRight: '.25em' }} onClick={() => navigate('/catalog')} />
  </span>;

  return (
    <>
      <div>
        <div>

        </div>
        <Card footer={footer} header={header} className='card-container-voucher'>
          Su pedido ha sido procesado de manera correcta.
          <p>Número de pedido:<b> PED-{orderNumber}</b> </p>
          <p>Si tiene alguna duda con respecto a su pedido, puedes comunicarte con nosotros a través de nuestras redes sociales</p>
          <div className='socialmedia-icons-voucher'>
            <i className="pi pi-whatsapp socialmedia-icon"></i>
            <i className="pi pi-twitter socialmedia-icon"></i>
            <i className="pi pi-telegram socialmedia-icon"></i>
            <i className="pi pi-instagram socialmedia-icon"></i>
            <i className="pi pi-facebook socialmedia-icon"></i>
          </div>
        </Card>
      </div>

    </>
  )
}
