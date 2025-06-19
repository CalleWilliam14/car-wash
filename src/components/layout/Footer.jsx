import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-social">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </div>
      <div className="footer-links">
        <a href="#">Privacidad</a>
        <a href="#">Términos de servicio</a>
        <a href="#">Cookie</a>
      </div>
    </div>
    <div className="footer-copy">
      © 2025 AquaShine - Todos los derechos reservados
    </div>
  </footer>
);

export default Footer; 