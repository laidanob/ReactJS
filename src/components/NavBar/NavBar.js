import React from 'react'
import { Link } from 'react-router-dom';
import { CartWidget } from '../User&CartWidget/CartWidget';
import logo from '../../logoWhite.png'
import {FaGithub } from 'react-icons/fa';
import { UserWidget } from '../User&CartWidget/UserWidget';

export const NavBar = () => {
   
  return (
    
      <nav className="navBruno" >
        <li><Link to="/" className="nav-link"><img alt="logoRabbitFotolibros" id="logo" src={logo}/></Link></li>
      <li><Link to="/" className="nav-link">Rabbit</Link></li>
      <li><Link to="/productos" className="nav-link">productos</Link></li>
      <div id="finalBar">
      <li><Link to="cart" className="nav-link"><CartWidget/></Link></li>
      <li><Link to="profile" className="nav-link"><UserWidget/></Link></li>
      <li><a href="https://github.com/laidanob/ReactJS/tree/withFetch" className="nav-link"><FaGithub/></a></li>
      </div>
    </nav>
    )
}
