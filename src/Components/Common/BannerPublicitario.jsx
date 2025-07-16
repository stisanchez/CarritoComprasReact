import React from 'react';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function BannerPublicitario() {
    const navigate = useNavigate();

    const images = [
        {
            itemImageSrc: 'https://academia.nubimetrics.com/hubfs/productos-tecnologicos-2.jpg',
            alt: 'Tecnología',
            title: 'Los mejores productos tecnológicos',
            description: 'Explora lo último en smartphones, laptops y más.'
        },
        {
            itemImageSrc: 'https://cookingmenaje.com/wp-content/uploads/2017/12/categoria-articulos-electricos-banner-cooking-menaje-del-hogar-1024x323.jpg',
            alt: 'Cocina',
            title: 'Artículos de cocina de alta calidad',
            description: 'Todo lo que necesitás para cocinar como un chef en casa.'
        },
        {
            itemImageSrc: 'https://cotram.es/wp-content/uploads/2023/10/Equipo-deportivo.webp',
            alt: 'Deportes',
            title: 'Equipamiento deportivo para todos',
            description: 'Encuentra ropa, calzado y accesorios para tus deportes favoritos.'
        },
        {
            itemImageSrc: 'https://fanatica.com.co/wp-content/uploads/2025/05/Banner-fanatica.png',
            alt: 'Moda',
            title: 'Tendencias de moda para cada temporada',
            description: 'Descubrí las últimas novedades en ropa y accesorios.'
        },
        {
            itemImageSrc: 'https://media.admagazine.com/photos/648cd919d6ffbb9c781e28c0/16:9/w_2560%2Cc_limit/renovar-los-muebles-sala.jpg',
            alt: 'Hogar',
            title: 'Decoración y muebles para tu hogar',
            description: 'Transforma tus espacios con estilo y confort.'
        }
    ];

    const itemTemplate = (item) => (
        <div style={{ position: 'relative', width: '100%' }}>
            <img
                src={item.itemImageSrc}
                alt={item.alt}
                style={{
                    width: '100%',
                    height: '80vh',
                    objectFit: 'cover',
                    display: 'block'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '10%',
                    color: 'white',
                    textShadow: '1px 1px 5px black',
                    maxWidth: '600px'
                }}
            >
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.title}</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{item.description}</p>
                <Button
                    label="Ver catálogo"
                    className="p-button-rounded p-button-lg"
                    onClick={() => navigate('/catalog')}
                />
            </div>
        </div>
    );

    return (
        <Galleria
            className='divBannerPublicitario'
            value={images}
            numVisible={2}
            showThumbnails={false}
            showIndicators={false}
            showItemNavigators={true}
            autoPlay
            circular
            item={itemTemplate}
            style={{ width: '100%' }}
        />
    )
}
