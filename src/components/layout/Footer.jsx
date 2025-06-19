import React from 'react';

const Footer = () => (
  <footer className="bg-light border-top mt-5 pt-4 pb-2">
    <div className="container">
      <div className="row align-items-center mb-2">
        <div className="col-md-6 mb-3 mb-md-0 d-flex gap-3 justify-content-md-start justify-content-center">
          <a href="#" className="text-secondary fs-4"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-secondary fs-4"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-secondary fs-4"><i className="bi bi-twitter-x"></i></a>
          <a href="#" className="text-secondary fs-4"><i className="bi bi-youtube"></i></a>
        </div>
        <div className="col-md-6 d-flex gap-3 justify-content-md-end justify-content-center">
          <a href="#" className="text-decoration-none text-secondary">Privacidad</a>
          <a href="#" className="text-decoration-none text-secondary">Términos de servicio</a>
          <a href="#" className="text-decoration-none text-secondary">Cookie</a>
        </div>
      </div>
      <div className="text-center text-muted small">
        © 2025 AquaShine - Todos los derechos reservados
      </div>
    </div>
  </footer>
);

export default Footer; 