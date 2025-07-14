import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export const ContactUs = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: nombre,
      email: correo,
      telefono,
      message: mensaje
    };

    emailjs.send('service_kv1i2vg', 'template_6gk6sh9', templateParams, 'E3_ROVFYcW4-xk8dH')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus("Mensaje enviado correctamente.");
        setNombre("");
        setCorreo("");
        setTelefono("");
        setMensaje("");
      }, (error) => {
        console.log('FAILED...', error);
        setStatus("Ocurrió un error al enviar.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge severity="danger" />
        </i>
        <h2>Si tiene alguna consulta, no dude en contactarnos</h2>
      </div>

      <FloatLabel>
        <InputText id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="textbox-contactUs" />
        <label htmlFor="nombre">Nombre completo</label>
      </FloatLabel>

      <FloatLabel>
        <InputText id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} className="textbox-contactUs" />
        <label htmlFor="correo">Correo electrónico</label>
      </FloatLabel>

      <FloatLabel>
        <InputText id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="textbox-contactUs" />
        <label htmlFor="telefono">Teléfono</label>
      </FloatLabel>

      <FloatLabel>
        <InputTextarea
          autoResize
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={8}
          cols={30}
          className="textbox-contactUs"
        />
        <label htmlFor="mensaje">Mensaje</label>
      </FloatLabel>

      <div className="contenedor-botones-contactUs">
        <Button label="Cancelar" link onClick={() => {
          setNombre("");
          setCorreo("");
          setTelefono("");
          setMensaje("");
        }} />
        <Button label="Enviar" type="submit" />
      </div>

      {status && <p style={{ marginTop: '1rem', color: 'green' }}>{status}</p>}
    </form>
  );
};