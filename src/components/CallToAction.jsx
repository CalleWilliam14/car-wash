import React from 'react';
import './CallToAction.css';

const CallToAction = () => (
  <section className="cta-section">
    <div className="cta-content">
      <h3>¿Listo para transformar su vehículo?</h3>
      <p>
        Descubra la diferencia que nuestros servicios profesionales pueden hacer. Explore nuestra galería completa o contáctenos para programar su cita.
      </p>
      <div className="cta-actions">
        <button className="btn-dark">Explorar Galería</button>
        <button className="btn-outline">Agendar Servicio</button>
      </div>
    </div>
  </section>
);

export default CallToAction; 