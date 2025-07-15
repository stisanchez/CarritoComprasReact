import React from 'react';
import { Galleria } from 'primereact/galleria';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import bannerPublicitario from '../Catalog/bannerPublicitario.json';

export default function BannerPublicitario() {
    const navigate = useNavigate();

    const itemTemplate = (item) => (
        <div className="divImgBanner">
            <img src={item.itemImageSrc} alt={item.alt} />
            <div className='divResume'>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
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
            value={bannerPublicitario}
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
