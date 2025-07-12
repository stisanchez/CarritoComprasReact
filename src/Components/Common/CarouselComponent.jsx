import { Carousel } from 'primereact/carousel';


const CarouselComponent = ({ carouselItems, itemTemplate, time }) => {

    return (
        <Carousel
            className='carousel-xxxxxxx'
            value={carouselItems}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            circular={true}
            autoplayInterval={time}
        />
    );
};

export default CarouselComponent;