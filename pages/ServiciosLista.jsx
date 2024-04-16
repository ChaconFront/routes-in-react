import { Link } from "react-router-dom"
export function ServiciosLista({servicios}){

    return (
        <>
        <h2>Conoce nuestros Servicios</h2>
            <ul>
            {servicios.map((el)=>(
            <li key={el.id}>
                <Link to={`/servicios/${el.id}`}>{el.nombre}</Link>
            </li>))}
            </ul>
        </>
    )
}