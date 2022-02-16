import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/config';
import {collection, Timestamp,addDoc} from "firebase/firestore"


export const Checkout = () => {
    const {carrito, totalCompra} = useContext(CartContext)
    const [idTrans, setIdTrans] = useState()
    const ordenFire = collection(db,"ordenes")
    const handleEnviar = () => {
        const orden = {
            usuario: {nombre: "Bruno",
            Telefono: 15273732,
            Email: "bruno.laidano@gmail.com"},
            items: carrito,
            total: totalCompra(),
            fecha: Timestamp.fromDate(new Date())
        }

        console.log(orden)
        
        addDoc(ordenFire,orden)
                .then((respuesta) => {setIdTrans(respuesta.id)}) 
    }
    
    

  return <div id="contacto">
      <h1>Resumen de la compra</h1>
        <p>ID DE LA COMPRA: {idTrans}</p>
      <button onClick={handleEnviar}>Enviar</button>
  </div>;
};
