
import { useParams,useNavigate } from "react-router-dom"
export function ServicioDetalle({servicios}) {
    const { id } = useParams();
    const navigate=useNavigate();
 
    function haciaAtras(){
        navigate(-1)
    }
    
    const servicio = servicios.find((servicio) => servicio.id.toString() === id);


    return (
        <section>
            <h1>Detalle del servicio</h1>
            <h2>{servicio.id}</h2>
            <h3>{servicio.nombre}</h3>
            <h4>${servicio.precio}</h4>
            <button onClick={haciaAtras}>Regresar</button>
        </section>

    )
}