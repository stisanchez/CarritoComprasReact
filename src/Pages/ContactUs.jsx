import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const ContactUs = () => {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <>

      <div className='form-container'>
        <div style={{ display: 'flex' }}>
          <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
            <Badge severity="danger"></Badge>
          </i><h2>Si tiene alguna consulta, no dude en contactarnos</h2>
        </div>
        <FloatLabel>
          <InputText id="username" value={nombre} onChange={(e) => setValue(e.target.value)} className='textbox-contactUs' />
          <label htmlFor="username">Nombre completo</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="correo" value={correo} onChange={(e) => setValue(e.target.value)} className='textbox-contactUs' />
          <label htmlFor="correo">Correo electrónico</label>
        </FloatLabel>

        <FloatLabel>
          <InputText id="telefono" value={telefono} onChange={(e) => setValue(e.target.value)} className='textbox-contactUs' />
          <label htmlFor="telefono">Teléfono</label>
        </FloatLabel>

        <FloatLabel>
          <InputTextarea autoResize id="mensaje" value={mensaje} onChange={(e) => setValue(e.target.value)} rows={8} cols={30} className='textbox-contactUs' />
          <label htmlFor="mensaje">Username</label>
        </FloatLabel>

        <div className='contenedor-botones-contactUs'>
          <Button label="Cancelar" link onClick={() => window.open('https://react.dev', '_blank')} />
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
            Enviar
          </a>
        </div>
      </div>


    </>
  )
}
