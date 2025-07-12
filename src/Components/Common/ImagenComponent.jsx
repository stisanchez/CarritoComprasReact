export const ImagenComponent = ({ruta,className}) => {
    return (
        <div>
            <img src={`${ruta}`} className={className} />
        </div>
    )
}
