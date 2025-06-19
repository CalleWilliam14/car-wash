import React from 'react';
import logo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm sticky-top">
    <div className="container">
      <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" height={54} className="me-2" style={{objectFit: 'contain'}} />
        AquaShine
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/"><i className="bi bi-images me-1"></i>Galería</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/categoria"><i className="bi bi-tools me-1"></i>Servicios</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/antesdespues"><i className="bi bi-arrow-repeat me-1"></i>Antes y Después</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/equipo"><i className="bi bi-people me-1"></i>Nuestro Equipo</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/proceso"><i className="bi bi-gear me-1"></i>Proceso</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/ubicacion"><i className="bi bi-geo-alt me-1"></i>Ubicación</Link></li>
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