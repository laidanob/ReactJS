import React, { useEffect, useState } from "react";
import Boton from "react-bootstrap/Button";

export const ItemCount = ({stock, initial, cantidad, setCantidad, onAdd}) => {
  
  let [botonRestarDeshabilitado, setbotonRestarDeshabilitado] = useState(false);
  let [botonSumarDeshabilitado, setbotonSumarDeshabilitado] = useState(false);
  


 

  useEffect(() => {
      cantidad  <= 1
      ? setbotonRestarDeshabilitado(true)
      : setbotonRestarDeshabilitado(false);
      cantidad  === stock
      ? setbotonSumarDeshabilitado(true)
      : setbotonSumarDeshabilitado(false)

  }, [cantidad ,stock]);
  
  
  const sumarClicks = () => {
    setCantidad(cantidad + 1);
  };

  const restarClicks = () => {
    setCantidad(cantidad - 1);
  };
 

  return (
      <div className="count">
        <div className="botonesMasMenos">
          
            {/* <Boton   disabled={botonRestarDeshabilitado} variant={botonRestarDeshabilitado ? "secondary" : "primary"} onClick={restarClicks}>-</Boton> */}
            <Boton onClick={restarClicks}>-</Boton>
          
          
            <p>{cantidad}</p>
         

            {/* <Boton disabled={botonSumarDeshabilitado} variant={botonSumarDeshabilitado ? "secondary" : "primary"} onClick={sumarClicks}>+</Boton> */}
            <Boton onClick={sumarClicks}>+</Boton>
          
        </div>
          
        <div  className="">
          <Boton onClick={onAdd}>Agregar productos</Boton>
        </div>
      </div>
  );
};