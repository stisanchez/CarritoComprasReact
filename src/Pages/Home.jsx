import CarouselMarcas from '../Components/Common/CarouselMarcas'
import BannerPublicitario from '../Components/Common/BannerPublicitario';
import '../styles/Home.css'

export const Home = () => {


  return (
    <div className='divHome'>
      <BannerPublicitario />
      <CarouselMarcas />
    </div>
  );
}
