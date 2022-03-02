import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { CartList } from './CartList';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Cart = () => {
    const {vaciarCarrito, carrito,totalCompra} = useContext(CartContext)
    

  return <div className="container" >
      <h1>CARRITO</h1>
      <hr/>
      {carrito.length > 0 ? 
          <>
        <CartList carrito= {carrito}/>
        <hr></hr>

        <p>El total de tu compra es: ${totalCompra()}</p>
        <Box mt={5}>
        <Button sx={{mx:2}}  variant="outlined" color="error" onClick={vaciarCarrito}>Vaciar Carrito</Button>
        <Link to="/checkout"><Button sx={{mx:2}}  variant="contained" color="success">Terminar mi compra</Button></Link>
        </Box>
        </>
       :
       <>
       <h2>NO HAY PRODUCTOS EN TU CARRITO</h2>
       <hr></hr>
       <Link to="/productos"><Button variant="contained">ver productos</Button></Link>
       </>
       }  
       
  </div>
}
