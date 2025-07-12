import { Fieldset } from 'primereact/fieldset';
import CarouselComponent from '../Components/Common/CarouselComponent';
import { Tag } from 'primereact/tag';
import carouselClients from '../Data/clients.json';
import PanelText from '../Components/Common/PanelText';
import PanelTextImage from '../Components/Common/PanelTextImage';
import PanelImageText from '../Components/Common/PanelImageText';
import Mision from './../Images/Mision.jpg'
import Vision from './../Images/Vision.jpg'
import Valores from './../Images/Valores.png'

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

      <PanelText 
        Titulo={"¿Quiénes Somos?"}
        contenido={"En nuestra tienda de ropa en línea creemos que la moda va más allá de las prendas: es una forma de expresión, una actitud y un estilo de vida. Por eso, nos guiamos por una misión clara, una visión inspiradora y valores firmes que definen todo lo que hacemos."}
      />
      <PanelImageText
      titulo="Misión"
      contenido="Brindar a nuestros clientes una experiencia de compra en línea sencilla, segura y satisfactoria, ofreciendo ropa moderna, accesible y de calidad para todos los estilos y ocasiones. Nos comprometemos a combinar moda, comodidad y servicio al cliente para superar las expectativas de quienes nos eligen."
      imagen={Mision}
      />

      <PanelTextImage
      titulo="Visión"
      contenido="Ser la tienda de ropa en línea líder en el mercado hispanoamericano, reconocida por su innovación, estilo, compromiso con la sostenibilidad y atención personalizada, conectando personas con su mejor versión a través de la moda."
      imagen={Vision}
      />

      <PanelImageText
      titulo="Valores"
      contenido="Calidad, Innovación, Atención al cliente, Diversidad e inclusión, Promovemos estilos que celebran todas las tallas, edades, géneros y culturas. Responsabilidad social y ambiental, Confianza, Pasión por la moda."
      imagen={Valores}
      />

      {/* <div className='container-about-us'>
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
      </div>*/}

    </>
  )
}
