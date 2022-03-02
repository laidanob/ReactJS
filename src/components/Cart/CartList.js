import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CartItem} from './CartItem';

export const CartList = ({carrito}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Cant.</TableCell>
            <TableCell align="right">Precio U.</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {carrito.map((prod) => (<CartItem key={prod.id} prod={prod}/>))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
