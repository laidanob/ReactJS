import React, { useState } from "react";
import Boton from "react-bootstrap/Button";

export const ItemCount = ({stock, initial, cantidad, setCantidad, onAdd}) => {

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
          
        <div  className="">
          <Boton onClick={onAdd}>Agregar productos</Boton>
        </div>
      </div>
  );
};