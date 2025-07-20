
import carouselItems from '../Data/promotions.json';
import CarouselComponent from '../Components/Common/CarouselComponent';
import { Tag } from 'primereact/tag';
export const Promotions = () => {

  const itemTemplate = (item) => {
    return (
      <div className="carousel-item-xxxxxx">
        <img src={item.image} alt={item.title} className='image-carousel' />
        <h2 className='h2-title-promotion'>{item.title}</h2>
        <p className='p-promotion-description'>{item.description}</p>
        <Tag severity="warning" value={item.details}></Tag>
      </div>
    );
  };

  return (
    <div className='carousel-container'>

      <CarouselComponent
        carouselItems={carouselItems}
        itemTemplate={itemTemplate}
        time={3000}
        className='contenedor-carrusel'
      />
    </div>
  )
}
