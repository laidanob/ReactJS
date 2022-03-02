import React, {useState,useEffect} from 'react'
import Noti from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { Row, Col } from "react-bootstrap";

export function Notificacion({valor, titulo,mensaje}) {
    const [show, setShow] = useState(false);
    useEffect( () => {setShow(valor)} ,[valor])

    return (
      <Row>
        <Col xs={6}>
        <ToastContainer className="p-3" position="bottom-end">
          <Noti onClose={() => {valor = false 
            setShow(valor)}}  show={show} delay={3000} autohide>
            <Noti.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{titulo}</strong>
            </Noti.Header>
            <Noti.Body>{mensaje}</Noti.Body>
          </Noti>
          </ToastContainer>
        </Col>
      </Row>
    );
  }
  
