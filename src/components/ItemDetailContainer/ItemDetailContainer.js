import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router';
import { traerProductos } from '../helpers/traerproductos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {Loader } from '../Loader/Loader'

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(false)
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  
  
  useEffect(() => {

        traerProductos()
            .then((respuesta) => {
                setProducto( respuesta.find(producto => producto.id === id) )
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
        { loading ? <Loader/> : <> <ItemDetail {...producto} stock={10} initial={1}/> </>}
       
       <form>

            

       </form>
    </div>;
};
