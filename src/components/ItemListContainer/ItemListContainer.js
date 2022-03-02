import { ItemList } from "../ItemList/ItemList"
import React, { useEffect,useState} from "react"
import { useParams } from "react-router"
import { NavProductos } from "../NavProductos/NavProductos"
import { Loader } from "../Loader/Loader"
import {collection, getDocs,query,where} from "firebase/firestore"
import { db } from "../firebase/config"

export const ItemListContainer = ({bienvenida}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {catID } = useParams()

     
   
    
    
    useEffect(() => {
        const productosFire = collection(db , "productos")
        const q = catID ? query(productosFire,where("categoria", "==", catID )) : productosFire
        getDocs(q)
            .then((respuesta) => {
                
                const items = respuesta.docs.map((item) => ({id: item.id, ...item.data()}))
                setProductos(items)
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






