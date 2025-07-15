import React, { useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import logos from '../Catalog/marcas.json';

const LogoCarousel = () => {
    const carouselRef = useRef(null);

    const responsiveOptions = [
        { breakpoint: '1024px', numVisible: 4, numScroll: 1 },
        { breakpoint: '768px', numVisible: 3, numScroll: 1 },
        { breakpoint: '560px', numVisible: 2, numScroll: 1 }
    ];

    const logoTemplate = (logo) => {
        return (
            <div className="flex justify-content-center">
                <img src={logo.src} alt={logo.alt} className="logo-img"/>
            </div>
        );
    };

    return (
        <div className="branch-container" onMouseEnter={() => carouselRef.current.stopAutoplay()} onMouseLeave={() => carouselRef.current.startAutoplay()}>

            <h1>Socios comerciales</h1>

            <Carousel
                className='branch-carousel'
                ref={carouselRef}
                value={logos}
                itemTemplate={logoTemplate}
                numVisible={4}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                autoplayInterval={2000}
                circular
                showIndicators={false}
                showNavigators={false}
            />
        </div>
    );
};

export default LogoCarousel;