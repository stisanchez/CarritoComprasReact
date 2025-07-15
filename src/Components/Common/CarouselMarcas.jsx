import React, { useRef } from 'react';
import { Carousel } from 'primereact/carousel';

const logos = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/43/HP_logo_2008.svg', alt: 'HP' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://yaweco.de/wp-content/uploads/2019/10/logo1-Kopie.png', alt: 'Yaweko' },
    { src: 'https://www.vectorkhazana.com/assets/images/products/Fila_Drip.png', alt: 'FILA' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH7zrNGmrpTvcXN1SC7jqA1QCZr0bTN8v_w&s', alt: 'ABYSS' },
    { src: 'https://www.cdnlogo.com/logos/b/91/bic.svg', alt: 'BIC' },
    { src: 'https://i.pinimg.com/736x/7c/bc/28/7cbc287168d985ce8a00d1abe4127914.jpg', alt: 'DEWALT'},
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALwxK5Y3lH5aMT8lgW3ZYstLXvnyprVQGyQ&s', alt: 'ZKTeco'}
];

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
                <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-img"
                    style={{ height: '80px', objectFit: 'contain' }}
                />
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
                autoplayInterval={2500}
                circular
                showIndicators={false}
                showNavigators={false}
            />
        </div>
    );
};

export default LogoCarousel;