import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Boton from "react-bootstrap/Button";
import { Notificacion } from "../Notificacion/Notificacion";
import "./estilo.scss";

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
  }, [cuentaClicks]);
  
  
  
  const sumarClicks = () => {
    setCuentaClicks(cuentaClicks + 1);
  };

  const restarClicks = () => {
    setCuentaClicks(cuentaClicks - 1);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col className="p-0" md="1">
            <Boton   disabled={botonRestarDeshabilitado} variant={botonRestarDeshabilitado ? "secondary" : "primary"} onClick={restarClicks}>-</Boton>
          </Col>
          
          <Col className="p-0" md="1">
            <p>{cuentaClicks}</p>
          </Col>

          <Col className="p-0" md="1">
            <Boton disabled={botonSumarDeshabilitado} variant={botonSumarDeshabilitado ? "secondary" : "primary"} onClick={sumarClicks}>+</Boton>
          </Col>
        </Row>
          <div></div>
        <Row  className="justify-content-md-center">
          <Col className="p-0 size" md="4">
          <Boton 
          onClick={onAdd}>Agregar productos</Boton>
          </Col>
        </Row>

        {mostrarNoti && <Notificacion valor={true} titulo="Carrito" mensaje={`Agregaste ${cuentaClicks} productos`} />}
      </Container>
    </>
  );
};