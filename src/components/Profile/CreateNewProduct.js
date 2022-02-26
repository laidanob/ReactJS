import { collection,addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase/config';
import {NewProductForm} from "../Profile/NewProductForm"




export const FormNewProduct = () => {
    const productsRef = collection(db, "productos")

    

    const objetoNewProductVacio = {
        nombre: "",
        precio: 0,
        stock: 0,
        desc: "",
        categoria: "",
        img: "https://firebasestorage.googleapis.com/v0/b/rabbit-store.appspot.com/o/imagenTest.jpg?alt=media&token=ee8b6fd0-dce5-4520-ab4a-6b4e01b78dfb"
    }
   
    const [newProduct, setNewProduct] = useState(objetoNewProductVacio)
    
   
    const handleEnviar = (values,{resetForm}) =>{
        addDoc(productsRef,values)
                .then((respuesta) => {console.log(respuesta)})
        console.log(values)
        resetForm() 
        setNewProduct(values)
       
    }
           
  return (
        <div className="container">
            <h2>Agregar Un producto</h2>
            <NewProductForm initialValues={objetoNewProductVacio} handleEnviar={handleEnviar}/>
        </div>
  )
}
