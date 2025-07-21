import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './../../Pages/Layout';
import { NotFound } from './../../Pages/NotFound';
import { Home } from './../../Pages/Home';
import { AboutUs } from './../../Pages/AboutUs';
import { Catalog } from './../../Pages/Catalog';
import { Shopping_Cart } from './../../Pages/Shopping_Cart';
import { ContactUs } from './../../Pages/ContactUs';
import { Voucher } from '../Shopping_Card/Voucher';
import { Login } from '../../Pages/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // Este layout envuelve todas las rutas hijas
        errorElement: <NotFound />, // Renderiza si una ruta hija no se encuentra o hay un error
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
               path: 'home',
                element: <Home />,
            },
            {
                path: 'catalog',
                element: <Catalog />,
            },
            {
                path: 'about', 
                element: <AboutUs />,
            },
            {
                path: 'contactUs', 
                element: <ContactUs />,
            },
            {
                path: 'shoppingCart', 
                element: <Shopping_Cart/>
            },
             {
                path: 'voucher', 
                element: <Voucher/>
            },
            {
                path: 'login', 
                element: <Login/>
            },
        ],
    },

])

export default router;