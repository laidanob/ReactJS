import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/config';
import {collection, Timestamp,addDoc} from "firebase/firestore"
import { useAuth } from '../context/AuthContext';
import { CheckoutExitoso } from './CheckoutExitoso';


export const Checkout = () => {
    const {carrito, totalCompra,vaciarCarrito} = useContext(CartContext)
    const {usuario} = useAuth()
    const [idTrans, setIdTrans] = useState()
    const ordenFire = collection(db,"ordenes")

    const handleEnviar = () => {
        const orden = {
            usuario: {nombre: usuario.displayName,
            Telefono: usuario.phoneNumber,
            Email: usuario.email},
            items: carrito,
            total: totalCompra(),
            fecha: Timestamp.fromDate(new Date())
        }
        
        addDoc(ordenFire,orden)
                .then((respuesta) => {setIdTrans(respuesta.id)}) 
        vaciarCarrito()
    }
    
    

  return <div className='container'>
     {idTrans ? <CheckoutExitoso/>
    :
    <>
    <h1>Revisa que tus datos sean correctos</h1>
        
        <p>Nombre {usuario.displayName}</p>
        <p>Telefono{usuario.phoneNumber}</p>
        <p>Email {usuario.email}</p>
        <p>Vas a hacer una compra por $ {totalCompra()}</p>
        
      <button onClick={handleEnviar}>Confirmar</button>
    </>   
    }
    
      
  </div>;
};
