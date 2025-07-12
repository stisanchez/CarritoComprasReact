import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { MegaMenu } from 'primereact/megamenu';
import 'primeicons/primeicons.css';
import '../styles/layout.css'
import { Image } from 'primereact/image';
import { Link, Outlet, redirect } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { useContext } from 'react';
import DataContext from '../Components/Context/DataContext';

export const Layout = () => {

  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', template: () => <Link to="/home" className='link-menu'><Button label="Home" icon="pi pi-home" className='button-menu-link'/></Link> },       
    { label: 'Catalog', icon: 'pi pi-fw pi-th-large',template: () => <Link to="/catalog" className='link-menu'><Button label="Catálogo" icon="pi pi-shop" className='button-menu-link'/></Link> },
    { label: 'Promotions', icon: 'pi pi-fw pi-gift',template: () => <Link to="/promotions" className='link-menu'><Button label="Promociones" icon="pi pi-megaphone" className='button-menu-link'/></Link> },
    { label: 'Contáctenos', icon: 'pi pi-fw pi-telegram',template: () => <Link to="/contactUs" className='link-menu'><Button label="Contáctenos" icon="pi pi-telegram"  className='button-menu-link'/></Link> },
    { label: 'Acerca de nostros', icon: 'pi pi-fw pi-building-columns',template: () => <Link to="/about" className='link-menu'><Button label="Acerca de nosotros" icon="pi pi-warehouse" className='button-menu-link'/></Link> },
    { label: 'Carrito de compras', icon: 'pi pi-fw pi-cart-plus',template: () => <Link to="/shoppingCart" className='link-menu'><Button label="Carrito de compras" icon="pi pi-shopping-cart"  className='button-menu-link'/></Link> }
  ];

  const { usuario, cantidadCarrito } = useContext(DataContext);

  return (

    <>
      <div>
        <div className="menu-layout">
          <div className='divLogo'>
            <Image src='https://png.pngtree.com/png-clipart/20190613/original/pngtree-logo-company-design-png-image_3588263.jpg' alt="Image" width="60" className='imagen-logo-layout' />
          </div>
          <div className='divNavBar'>
            <MegaMenu className='NavBar' model={items} orientation="horizontal" />
          </div>
          <div className='divCarrito'>
              <i className="pi pi-cart-plus p-overlay-badge contenedor-carrito" style={{ fontSize: '2rem' }} >
                <Badge value={cantidadCarrito}></Badge>
              </i>
          </div>
        </div>
        <div>
          <Card title="Sistema de compras en línea">
            <Outlet />
          </Card>

        </div>

      </div>
    </>
  )



}
