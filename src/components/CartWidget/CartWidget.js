import React, { useContext, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';



export const CartWidget = () => {
   const {carrito} = useContext(CartContext)

   console.log("🚀 ~ file: CartWidget.js ~ line 9 ~ CartWidget ~ carrito", carrito)
    const totalCarrito = () => { 
        return carrito.reduce((suma, prod) => suma + prod.cuentaCantidad, 0)
    }
    console.log("totalcarrito",totalCarrito())
     
    useEffect(() => {

       
    },[carrito])
    
    return (
        <div>
            <FaShoppingCart/>
            <span>{totalCarrito()}</span>
        </div>
    )
}
            
