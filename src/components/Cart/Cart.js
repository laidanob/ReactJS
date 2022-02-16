import {useContext, useEffect} from 'react';
import Boton from "react-bootstrap/Button";
import { CartContext } from '../context/CartContext';
import { CartItem } from './CartItem';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {vaciarCarrito, carrito,totalCompra} = useContext(CartContext)
    

  return <div id="contacto" >
      <h1>CARRITO</h1>
      <hr/>
      {carrito.length > 0 ? 
          <>
        {carrito.map(prod => (<CartItem prod= {prod}/>))}
        <hr></hr>
        <p>El total de tu compra es: ${totalCompra()}</p>
        <Link to="/checkout">Terminar mi compra</Link>
        <Boton onClick={vaciarCarrito}>Vaciar Carrito</Boton>
        </>
       :
       <>
       <h2>NO HAY PRODUCTOS EN TU CARRITO</h2>
       <Link to="/productos">ver productos</Link>
       </>
       }  
       
  </div>
}
