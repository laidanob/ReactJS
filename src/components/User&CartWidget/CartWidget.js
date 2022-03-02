import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';



export const CartWidget = () => {
   const {totalCant} = useContext(CartContext)
    
    return (
        <div>
            <FaShoppingCart/>
            <span>{totalCant()}</span>
        </div>
    )
}
            
