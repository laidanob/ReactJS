import { productos } from "../productos/productos"

export const traerProductos = () => {
    
    return new Promise((resolucion,rechazo) => {
         setTimeout(() => {  
        resolucion(productos)
        }, 1000)
        })
    }