import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

export const CheckoutExitoso = ({nombre, idCompra}) => {
  return (
    <div>
        <Box mt={5}>

        <Link to="/"><Button sx={{mx:2}} variant="outlined"> Seguir Comprando </Button> </Link>
         
        <Link to="/profile"><Button sx={{mx:2}} variant="contained"> Ver mis compras </Button></Link>

        </Box>
    </div>
  )
}
