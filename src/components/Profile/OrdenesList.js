import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const OrdenesList = ({ordenes}) => {
  return (
    <TableBody>
                  {ordenes.map((orden) => (
                    <TableRow
                           key={orden.id}
                           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                           <TableCell component="th" scope="row">
                             {orden.id}
                           </TableCell>
                           {/* <TableCell align="right">{orden.cuentaCantidad}</TableCell> */}
                           <TableCell align="right">{orden.total}</TableCell>
                      {/* <TableCell align="right">{orden.fecha}</TableCell> */}
                    </TableRow>
          ))}
        </TableBody>
  )
}
