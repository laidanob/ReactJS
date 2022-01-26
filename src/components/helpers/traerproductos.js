import { productos } from "../productos/productos"

export const traerProductos = (optionalEnd) => {
    optionalEnd === undefined && (optionalEnd = "")

    return fetch(`https://61f065b3732d93001778ea4a.mockapi.io/contenedores/contenedor${optionalEnd}`)
    .then(respuesta => {
        return respuesta.json()
    })
    }