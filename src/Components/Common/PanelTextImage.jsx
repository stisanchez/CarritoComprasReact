import React from 'react'
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function PanelTextImage({ titulo, contenido, imagen }) {
    return (
        <Splitter className='paneltextImage' style={{ height: '100%' }}>
            <SplitterPanel className="flex align-items-center justify-content-center info-text text-side" size={75} minSize={30}>
                <h2>{titulo}</h2>
                <p>{contenido}</p>
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center image-side" size={25}>
                <img src={imagen} alt="History" />
            </SplitterPanel>
        </Splitter>
    )
}
