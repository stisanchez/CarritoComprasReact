import CarouselMarcas from '../Components/Common/CarouselMarcas'
import BannerPublicitario from '../Components/Common/BannerPublicitario';
import Beneficios from '../Components/Common/Beneficio';
import '../styles/Home.css'

export const Home = () => {
const storedUser = JSON.parse(localStorage.getItem('user'));
  const userName = storedUser?.name || 'Invitado';

  return (
    <div className='divHome'>
      <div className="bienvenida">
        <h2>¡Bienvenido, {userName}! 👋</h2>
      </div>
      <BannerPublicitario />
      <CarouselMarcas />
      <Beneficios />
    </div>
  );
}
