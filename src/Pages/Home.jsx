import CarouselMarcas from '../Components/Common/CarouselMarcas'
import BannerPublicitario from '../Components/Common/BannerPublicitario';
import Beneficios from '../Components/Common/Beneficio';
import '../styles/Home.css'

export const Home = () => {


  return (
    <div className='divHome'>
      <BannerPublicitario />
      <CarouselMarcas />
      <Beneficios />
    </div>
  );
}
