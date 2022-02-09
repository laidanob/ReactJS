import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


export const CartItem = ({prod}) => {
  
  const {removerDelCarrito} = useContext(CartContext)
  return <div id="itemCarrito">

  < div key={prod.id}>
  <h2>{prod.nombre}</h2>
  <p>{prod.cuentaCantidad} Unidades</p>
  <p>Valor Unidad ${prod.precio}</p>
  <p>Valor Total${prod.total}</p>

 
  <div>
      <button onClick={() => {removerDelCarrito(prod.id)}}>remover</button>
  </div>
  </div>
</div>

};