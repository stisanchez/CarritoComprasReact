import React from 'react';
import beneficios from '../Catalog/beneficios.json';

const Beneficios = () => {
  return (
    <div className='divBeneficios'>
      <h1>Beneficios</h1>
      <div className='beneficios-container'>
        {beneficios.map(({ icon, title, description }, index) => (
          <div key={index} className='beneficios-card'>
            <div className='icono'>{icon}</div>
            <h3 className='titulo'>{title}</h3>
            <p className='descripcion'>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficios;