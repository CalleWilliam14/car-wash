import React from 'react';
import { useNavigate } from 'react-router-dom';

const GalleryExplore = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-3">Explora Nuestra Galería</h2>
        <p className="lead text-center mb-4">
          Elija entre diferentes formas de visualizar nuestro trabajo y descubra la calidad de nuestros servicios de autolavado y detallado.
        </p>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card shadow-sm h-100 border-0">
              <img src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80" alt="Carrusel" className="card-img-top" style={{height: 180, objectFit: 'cover'}} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h5 fw-bold mb-2"><i className="bi bi-images me-2 text-primary"></i>Vista de Carrusel <span className="badge bg-primary ms-2">Recomendado</span></h3>
                <p className="card-text mb-3">Navegue por nuestras fotos en un formato de presentación de diapositivas, ideal para apreciar los detalles de cada vehículo y el antes y después de nuestros servicios.</p>
                <button className="btn btn-primary mt-auto w-100" onClick={() => navigate('/carrusel')}>
                  <i className="bi bi-play-circle me-2"></i>Explorar Carrusel
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card shadow-sm h-100 border-0">
              <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80" alt="Mosaico" className="card-img-top" style={{height: 180, objectFit: 'cover'}} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h5 fw-bold mb-2"><i className="bi bi-grid-3x3-gap-fill me-2 text-success"></i>Vista de Mosaico</h3>
                <p className="card-text mb-3">Visualice múltiples imágenes a la vez en un formato de cuadrícula, perfecto para comparar diferentes servicios y resultados de manera rápida y eficiente.</p>
                <button className="btn btn-outline-success mt-auto w-100" onClick={() => navigate('/mosaico')}>
                  <i className="bi bi-grid me-2"></i>Explorar Mosaico
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryExplore; 