import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export const CartItem = ({prod}) => {
  const {removerDelCarrito} = useContext(CartContext)
  
  
  return (
    <TableRow
    key={prod.id}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell component="th" scope="row">
      {prod.nombre}
    </TableCell>
    <TableCell align="right">{prod.cuentaCantidad}</TableCell>
    <TableCell align="right">{prod.precio}</TableCell>
    <TableCell align="right">{prod.total}</TableCell>
    <TableCell align="right"><button onClick={() => {removerDelCarrito(prod.id)}}>remover</button></TableCell>
  </TableRow>
  );
}










   
