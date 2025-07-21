import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router/router.jsx'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { MyContextProvider } from './Components/Context/MyContextProvider.jsx';


createRoot(document.getElementById('root')).render(

    <MyContextProvider>
        <RouterProvider router={router} />
    </MyContextProvider>


)
