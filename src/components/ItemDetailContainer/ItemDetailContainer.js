import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {Loader } from '../Loader/Loader'
import {doc, getDoc,collection} from "firebase/firestore"
import { db } from "../firebase/config"


export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(false)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  
  
  useEffect(() => {
        const referenciaFire = collection(db, "productos")
       const itemFire = doc(referenciaFire,id)
                console.log(itemFire)
            getDoc(itemFire)
            .then((respuesta)=>{
                setProducto({id: respuesta.id, ...respuesta.data()})
                console.log("producto", producto)
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() => {
                setLoading(false)
            })
    },[id])
  
    return <div>
        <h1>ITEM DETAIL CONTAINER</h1>
        <hr/>
        { loading ? <Loader/> : <> <ItemDetail {...producto} /> </>}
       
       <form>

            

       </form>
    </div>;
};
