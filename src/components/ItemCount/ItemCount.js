import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Boton from "react-bootstrap/Button";
import "./estilo.scss";

export const ItemCount = () => {
  let [cuentaClicks, setCuentaClicks] = useState(0);
  let [botonRestarDeshabilitado, setbotonRestarDeshabilitado] = useState(false);
  let [botonSumarDeshabilitado, setbotonSumarDeshabilitado] = useState(false);

  let stock = 10;

  useEffect(() => {
    cuentaClicks <= 0
      ? setbotonRestarDeshabilitado(true)
      : setbotonRestarDeshabilitado(false);
    cuentaClicks === stock
      ? setbotonSumarDeshabilitado(true)
      : setbotonSumarDeshabilitado(false);
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
        <Row className="justify-content-md-center align-items-center">
          <Col md="auto">
            <Boton
              disabled={botonRestarDeshabilitado}
              variant={botonRestarDeshabilitado ? "secondary" : "primary"}
              onClick={restarClicks}
            >
              -
            </Boton>
          </Col>
          <Col md="1" className=" align-items-center">
            {" "}
            <p>{cuentaClicks}</p>{" "}
          </Col>
          <Col md="auto">
            <Boton
              disabled={botonSumarDeshabilitado}
              variant={botonSumarDeshabilitado ? "secondary" : "primary"}
              onClick={sumarClicks}
            >
              +
            </Boton>
          </Col>
        </Row>
      </Container>
    </>
  );
};
