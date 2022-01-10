import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Rabbit Fotolibros</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Tienda</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
  </Navbar>
    )
}
