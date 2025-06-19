import React from 'react';
import logo from '../../assets/logo1.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm sticky-top">
    <div className="container">
      <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
        <img src={logo} alt="Logo" height={54} className="me-2" style={{objectFit: 'contain'}} />
        AquaShine
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link" href="#galeria"><i className="bi bi-images me-1"></i>Galería</a></li>
          <li className="nav-item"><a className="nav-link" href="#servicios"><i className="bi bi-tools me-1"></i>Servicios</a></li>
          <li className="nav-item"><a className="nav-link" href="#antes-despues"><i className="bi bi-arrow-repeat me-1"></i>Antes y Después</a></li>
          <li className="nav-item"><a className="nav-link" href="#equipo"><i className="bi bi-people me-1"></i>Nuestro Equipo</a></li>
          <li className="nav-item"><a className="nav-link" href="#proceso"><i className="bi bi-gear me-1"></i>Proceso</a></li>
        </ul>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light fw-semibold" type="button">
            <i className="bi bi-box-arrow-in-right me-1"></i>Iniciar Sesión
          </button>
          <button className="btn btn-warning fw-semibold" type="button">
            <i className="bi bi-envelope me-1"></i>Contacto
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar; 