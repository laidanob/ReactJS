import React from 'react'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../logoWhite.png'

export const NavBar = () => {
    return (
      <nav className="navBruno" >
        <li><Link to="/" className="nav-link"><img id="logo" src={logo}/></Link></li>
      <li><Link to="/" className="nav-link">Rabbit</Link></li>
      <li><Link to="/productos" className="nav-link">productos</Link></li>
      <li><Link to="cart" className="nav-link"><CartWidget/></Link></li>
    
    </nav>
    )
}
