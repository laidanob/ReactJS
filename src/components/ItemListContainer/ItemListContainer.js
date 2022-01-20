import { Container } from "react-bootstrap"

import { traerProductos } from "../helpers/traerproductos"
import { ItemList } from "../ItemList/ItemList"
import React, {useEffect,useState} from "react"

export const ItemListContainer = ({bienvenida}) => {
    const [productos, setProductos] = useState([])
   
     
    useEffect(() => {

        traerProductos()
        .then((respuesta) => {
            setProductos(respuesta)
        })
        .catch((error) => {
            alert(error)
        })
        .finally(() => {
            console.log("carga terminada")
        })
    
    
    },[])
    
    return (
        <Container>
            <h1>{bienvenida}</h1>
            <ItemList productos={productos}/>
            
        </Container>
        )






}