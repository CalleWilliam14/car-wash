import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-primary bg-gradient py-5">
      <div className="container">
        <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: 600 }}>
          <div className="card-body text-center py-4">
            <h3 className="card-title h4 fw-bold mb-3 text-primary-emphasis">
              <i className="bi bi-lightning-charge-fill me-2 text-warning"></i>¿Listo para transformar su vehículo?
            </h3>
            <p className="card-text mb-4 text-secondary">
              Descubra la diferencia que nuestros servicios profesionales pueden hacer. Explore nuestra galería completa o contáctenos para programar su cita.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <button className="btn btn-success btn-lg px-4">
                <i className="bi bi-images me-2"></i>Explorar Galería
              </button>
              <button
                className="btn btn-outline-primary btn-lg px-4"
                onClick={() => navigate('/reserva')}
              >
                <i className="bi bi-calendar-check me-2"></i>Agendar Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
