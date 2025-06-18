import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">LOGO</div>
    <ul className="navbar-links">
      <li><a href="#galeria">Galería</a></li>
      <li><a href="#servicios">Servicios</a></li>
      <li><a href="#antes-despues">Antes y Después</a></li>
      <li><a href="#equipo">Nuestro Equipo</a></li>
      <li><a href="#proceso">Proceso</a></li>
    </ul>
    <div className="navbar-actions">
      <button className="btn-outline">Iniciar Sesión</button>
      <button className="btn-primary">Contacto</button>
    </div>
  </nav>
);

export default Navbar; 