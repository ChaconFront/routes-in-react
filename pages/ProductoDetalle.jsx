
import { useParams,useNavigate } from "react-router-dom"
export function ProductoDetalle({productos}) {
    const { id } = useParams();
    const navigate=useNavigate();

/* console.log(useParams()) */
 

    function haciaAtras(){
        navigate(-1)
    }
    
    const producto = productos.find((producto) => producto.id.toString() === id);


    return (
        <section>
            <h1>Detalle del Producto</h1>
            <h2>{producto.id}</h2>
            <h3>{producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            <button onClick={haciaAtras}>Regresar</button>
        </section>

    )
}