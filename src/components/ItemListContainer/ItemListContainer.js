import { Container } from "react-bootstrap"

import { traerProductos } from "../helpers/traerproductos"
import { ItemList } from "../ItemList/ItemList"
import React, {useEffect,useState} from "react"
import { useParams } from "react-router"

export const ItemListContainer = ({bienvenida}) => {
    const [productos, setProductos] = useState([])
    const {id } = useParams()
    console.log(id)
     
    useEffect(() => {

        traerProductos()
            .then((respuesta) => {
                if (!id){
                setProductos(respuesta)
                }else setProductos(respuesta.filter(item => item.categoria === id))
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() => {
                console.log("carga terminada")
            })
     
    
    },[])
    
    return (
        <div id="productos">
            <h1>{bienvenida}</h1>
            <ItemList productos={productos}/>
            
        </div>
        )






}