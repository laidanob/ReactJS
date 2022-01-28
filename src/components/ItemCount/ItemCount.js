import React, { useEffect, useState } from "react";
import {Col } from "react-bootstrap";
import Boton from "react-bootstrap/Button";
import { Notificacion } from "../Notificacion/Notificacion";

export const ItemCount = ({stock, initial, onAdd}) => {
  let [cuentaClicks, setCuentaClicks] = useState(initial);
  let [botonRestarDeshabilitado, setbotonRestarDeshabilitado] = useState(false);
  let [botonSumarDeshabilitado, setbotonSumarDeshabilitado] = useState(false);
  let [mostrarNoti, setMostrarNoti] = useState(false);
  
 

  useEffect(() => {
    

    cuentaClicks <= 1
      ? setbotonRestarDeshabilitado(true)
      : setbotonRestarDeshabilitado(false);
    cuentaClicks === stock
      ? setbotonSumarDeshabilitado(true)
      : setbotonSumarDeshabilitado(false);
    setMostrarNoti(false)

  }, [cuentaClicks,stock]);
  
  
  
  const sumarClicks = () => {
    setCuentaClicks(cuentaClicks + 1);
  };

  const restarClicks = () => {
    setCuentaClicks(cuentaClicks - 1);
  };

  return (
      <div className="count">
        <div className="botonesMasMenos">
          
            <Boton   disabled={botonRestarDeshabilitado} variant={botonRestarDeshabilitado ? "secondary" : "primary"} onClick={restarClicks}>-</Boton>
         
          
          
            <p>{cuentaClicks}</p>
         

          
            <Boton disabled={botonSumarDeshabilitado} variant={botonSumarDeshabilitado ? "secondary" : "primary"} onClick={sumarClicks}>+</Boton>
          
        </div>
          
        <div  className="">
          <Boton onClick={onAdd}>Agregar productos</Boton>
        </div>

        {mostrarNoti && <Notificacion valor={true} titulo="Carrito" mensaje={`Agregaste ${cuentaClicks} productos`} />}
      </div>
  );
};