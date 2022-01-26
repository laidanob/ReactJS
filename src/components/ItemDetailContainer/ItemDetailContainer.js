import React, {useState,useEffect} from 'react';
import { traerProductos } from '../helpers/traerproductos';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  let [producto, setProducto] = useState(false)
    useEffect(() => {

        traerProductos("/1")
        .then((respuesta) => {
            setProducto({ desc: respuesta.desc,
                        img: respuesta.img,
                        precio: respuesta.precio,
                        id: respuesta.id,
            })
            
        })
        .catch((error) => {
            alert(error)
        })
        .finally(() => {
            console.log("carga terminada")
        })
    })
  
    return <div>
        <h1>ITEM DETAIL CONTAINER</h1>
        <hr/>
        <ItemDetail id={producto.id} descripcion={producto.desc} precio={producto.precio} img={producto.img} />

    </div>;
};
