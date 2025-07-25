import { Button } from 'primereact/button';
import { MegaMenu } from 'primereact/megamenu';
import 'primeicons/primeicons.css';
import '../styles/layout.css';
import '../styles/Panels.css';
import { Image } from 'primereact/image';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { useContext } from 'react';
import DataContext from '../Components/Context/DataContext';
import LogoEmpresa from '../Images/logo-empresa.png';

export const Layout = () => {
  const { cantidadCarrito, usuario,setUsuario } = useContext(DataContext);
  const navigate = useNavigate();

  console.log('usuario_Layout:', usuario);

  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userName = storedUser?.name;

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUsuario('');
    navigate('/login');
  };

  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', template: () => <Link to="/home" className='link-menu'><Button label="Home" icon="pi pi-home" className='button-menu-link' /></Link> },
    { label: 'Catalog', icon: 'pi pi-fw pi-th-large', template: () => <Link to="/catalog" className='link-menu'><Button label="Catálogo" icon="pi pi-shop" className='button-menu-link' /></Link> },
    { label: 'Contáctenos', icon: 'pi pi-fw pi-telegram', template: () => <Link to="/contactUs" className='link-menu'><Button label="Contáctenos" icon="pi pi-telegram" className='button-menu-link' /></Link> },
    { label: 'Acerca de nostros', icon: 'pi pi-fw pi-building-columns', template: () => <Link to="/about" className='link-menu'><Button label="Acerca de nosotros" icon="pi pi-warehouse" className='button-menu-link' /></Link> },
    { label: 'Carrito de compras', icon: 'pi pi-fw pi-cart-plus', template: () => <Link to="/shoppingCart" className='link-menu'><Button label="Carrito de compras" icon="pi pi-shopping-cart" className='button-menu-link' /></Link> },
    usuario && { label: 'Estadisticas', icon: 'pi pi-fw pi-cart-plus', template: () => <Link to="/stadistics" className='link-menu'><Button label="Estadisticas" icon="pi pi-chart-line" className='button-menu-link' /></Link> },
  ];

  // Agregar item de usuario o login según estado
  if (userName) {
    items.push({
      label: `Hola, ${userName}`,
      icon: 'pi pi-fw pi-user',
      template: () => (
        <Button
          label={`Cerrar sesión`}
          icon="pi pi-sign-out"
          className="button-menu-link"
          onClick={handleLogout}
        />
      )
    });
  } else {
    items.push({
      label: 'Login',
      icon: 'pi pi-fw pi-user',
      template: () => (
        <Link to="/login" className='link-menu'>
          <Button label="Login" icon="pi pi-fw pi-user" className='button-menu-link' />
        </Link>
      )
    });
  }

  return (
    <>
      <div>
        <div className="menu-layout">
          <div className='divLogo'>
            <Image src={LogoEmpresa} alt="Zkotia Store" className='imagen-logo-layout' />
          </div>
          <div className='divNavBar'>
            <MegaMenu className='NavBar' model={items} orientation="horizontal" />
          </div>
          <div className='divCarrito'>
            <i className="pi pi-cart-plus p-overlay-badge contenedor-carrito" style={{ fontSize: '2rem' }}>
              <Badge value={cantidadCarrito}></Badge>
            </i>
          </div>
        </div>
        <div>
          <Card>
            <Outlet />
          </Card>
        </div>
      </div>
    </>
  );
};