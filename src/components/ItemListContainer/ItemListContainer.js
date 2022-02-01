import { traerProductos } from "../helpers/traerproductos"
import { ItemList } from "../ItemList/ItemList"
import React, {useContext, useEffect,useState} from "react"
import { useParams } from "react-router"
import { NavProductos } from "../NavProductos/NavProductos"
import { Loader } from "../Loader/Loader"
import { Contexto } from "../context/CartContext"

export const ItemListContainer = ({bienvenida}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {catID } = useParams()

     
   
    
    
    useEffect(() => {

        traerProductos()
            .then((respuesta) => {
                if (!catID){
                setProductos(respuesta)
                }
                else {setProductos(respuesta.filter(item => item.categoria === catID))}
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() => {
               setLoading(false)
            })
     
    
    },[catID])
    
    return (
        <div id="productos">
        <NavProductos/>
        <h1>{bienvenida}</h1>
        
        { loading ? <Loader/> : <ItemList productos={productos}/> }
            
        </div>
        )}






