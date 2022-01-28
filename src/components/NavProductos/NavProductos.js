import React from 'react';
import { Link } from 'react-router-dom';

export const NavProductos = () => {
  return <div id="navProductos">

<nav>
    <ul>
      <li><Link to="/productos/ContenedorPendrive" className="nav-link">Cont. Pendrive</Link></li>
      <li><Link to="/productos/ContenedorImagenes" className="nav-link">Cont. Imagenes</Link></li>
      <li><Link to="/productos/Pendrive" className="nav-link">Pendrive</Link></li>
      <li><Link to="/productos/Impresiones" className="nav-link">Impresiones</Link></li>
    </ul>
 </nav>

  </div>;
};
