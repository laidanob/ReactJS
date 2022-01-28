import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { traerProductos } from '../helpers/traerproductos';
import { Item } from '../Item/Item';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  let [producto, setProducto] = useState(false)
   
  const {parametroURL} = useParams()
  console.log(parametroURL)
  
  
  useEffect(() => {

        traerProductos()
            .then((respuesta) => {
                setProducto( respuesta.find(producto => producto.id === parametroURL) )
                })
                
            .catch((error) => {
                alert(error)
            })
            .finally(() => {
                console.log("carga terminada")
            })
    },[])
  
    return <div>
        <h1>ITEM DETAIL CONTAINER</h1>
        <hr/>
        <ItemDetail {...producto} />

    </div>;
};
