import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-bg" />
    <div className="hero-content">
      <h1>Galería Fotográfica de Autolavado Premium</h1>
      <p>Explore nuestra colección de imágenes que muestran la transformación de vehículos a través de nuestros servicios profesionales de limpieza y detallado.</p>
      <div className="hero-actions">
        <button className="btn-primary">Ver Galería</button>
        <button className="btn-outline">Agendar Servicio</button>
      </div>
    </div>
  </section>
);

export default Hero; 