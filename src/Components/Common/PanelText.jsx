import React from 'react'

export default function PanelText({Titulo, contenido}) {
  return (
    <div className='divPanelText'>
        <h1>{Titulo}</h1>
        <p>{contenido}</p>
    </div>
  )
}
