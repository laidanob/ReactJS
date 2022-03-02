import React from "react";
import Boton from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useNavigate,Link } from 'react-router-dom';

export const ItemCount = ({stock, initial, cantidad, setCantidad, onAdd, estaCarrito}) => {
  const navegar = useNavigate()

  const sumarClicks = () => {
    setCantidad(cantidad + 1);
  };

  const restarClicks = () => {
    setCantidad(cantidad - 1);
  };
 
  return (
      <div className="count">
        <div className="botonesMasMenos">
          
            <Boton className="botonOperador" disabled={cantidad  <= 1} onClick={restarClicks}>-</Boton>
          
            <p>{cantidad}</p>

            <Boton className="botonOperador" disabled={cantidad  === stock} onClick={sumarClicks}>+</Boton>
          
        </div>
        <Box mt={5}>
        <Button sx={{mx:2}} variant="outlined" onClick={() => (navegar("/"))}>Volver </Button>
        {!estaCarrito ? 
            <Button sx={{mx:2}} type="submit" variant="contained"onClick={onAdd}>Agregar producto </Button>
            :
            <Link to="/cart"><Button sx={{mx:2}}variant="contained">Ver Carrito</Button></Link>
          }
            </Box>
       
      </div>
  );
};