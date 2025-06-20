import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="position-relative bg-dark" style={{minHeight: 340, height: 540, overflow: 'hidden'}}>
      <img
        src="https://www.lanacion.com.ar/resizer/v2/lavado-de-BS652MZB7JBQ3CGT3CJP6TNVXQ.jpg?auth=b79423526cf1668dd2ac008b5edddf58df5fbd468b1187aae1342c137b527fe3&width=880&height=586&quality=70&smart=true"
        alt="Hero Background"
        className="w-100 h-100 position-absolute top-0 start-0 object-fit-cover"
        style={{zIndex: 1, filter: 'brightness(0.55)'}}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{zIndex: 2}}>
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold mb-3">
            <i className="bi bi-camera2 me-2 text-warning"></i>
            Galería Fotográfica de Autolavado Premium
          </h1>
          <p className="lead mb-4 text-light">
            Explore nuestra colección de imágenes que muestran la transformación de vehículos a través de nuestros servicios profesionales de limpieza y detallado.
          </p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <button className="btn btn-warning btn-lg px-4 fw-semibold">
              <i className="bi bi-images me-2"></i>Ver Galería
            </button>
            <button className="btn btn-outline-light btn-lg px-4 fw-semibold" onClick={() => navigate('/reserva')}>
              <i className="bi bi-calendar-check me-2"></i>Agendar Servicio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
