import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './../../Pages/Layout';
import { NotFound } from './../../Pages/NotFound';
import { Home } from './../../Pages/Home';
import { AboutUs } from './../../Pages/AboutUs';
import { Catalog } from './../../Pages/Catalog';
import { Promotions } from './../../Pages/Promotions';
import { Shopping_Cart } from './../../Pages/Shopping_Cart';
import { ContactUs } from './../../Pages/ContactUs';

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
                path: 'promotions',
                element: <Promotions />,
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
        ],
    },

])

export default router;