import { Fieldset } from 'primereact/fieldset';
import CarouselComponent from '../Components/Common/CarouselComponent';
import { Tag } from 'primereact/tag';
import carouselClients from '../Data/clients.json';

export const AboutUs = () => {

  const itemTemplate = (item) => {
    return (
      <div className="carousel-clients-item">
        <img src={item.logo} alt={item.name} className='image-client-carousel' />
      </div>
    );
  };

  return (
    <>
      <div className='container-about-us'>
        <Fieldset legend="Nuestra misión" className='fieldset-about-us' toggleable>
          <p className="m-0">
            <b> Ofrecer la mejor experiencia de compra en línea: </b>
            Esto implica facilitar la búsqueda, selección y compra de productos de manera sencilla y satisfactoria para el cliente.
          </p>
          <p className="m-0">
            <b>Proveer acceso a productos únicos y de alta calidad: </b>
            La tienda podría enfocarse en ofrecer artículos difíciles de encontrar en otros lugares o que destacan por su excelente calidad.
          </p>
          <p className="m-0">
            <b>Facilitar el acceso a la moda sostenible y ética: </b>
            Si la tienda se especializa en productos ecológicos o de comercio justo, su misión podría reflejar este compromiso.
          </p>
        </Fieldset>

        <Fieldset legend="Nuestra visión" className='fieldset-about-us' toggleable>
          <p className="m-0">
            <b> Ser la tienda en línea más grande y confiable del sector: </b>
            Esta visión apunta a la expansión y al reconocimiento del mercado.
          </p>
          <p className="m-0">
            <b>Liderar la innovación en la experiencia de compra online: </b>
            La tienda podría aspirar a ser pionera en nuevas tecnologías y tendencias en el comercio electrónico.
          </p>
          <p className="m-0">
            <b>Crear una comunidad vibrante alrededor de la marca: </b>
            La tienda podría enfocarse en construir relaciones sólidas con sus clientes y fomentar la interacción entre ellos.
          </p>
        </Fieldset>

        <Fieldset legend="Nuestros valores" className='fieldset-about-us' toggleable>
          <p className="m-0">
            Creatividad, inspiración, calidad, accesibilidad, atención personalizada
          </p>
        </Fieldset>

        <div className='contenedor-nuestros-clientes'>
          <div className='carousel-clientes'>
            <h1 style={{textAlign:"center"}}>Nuestro principales proveedores</h1>
            <CarouselComponent
              carouselItems={carouselClients}
              itemTemplate={itemTemplate}
              time={355000}
            />
          </div>
        </div>


      </div>

    </>
  )
}
