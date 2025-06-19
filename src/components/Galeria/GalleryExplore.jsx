import React from 'react';
import './GalleryExplore.css';
import { useNavigate } from 'react-router-dom';

const GalleryExplore = () => {
  const navigate = useNavigate();

  return (
    <section className="gallery-explore">
      <h2>Explore Nuestra Galería</h2>
      <p className="gallery-explore-desc">
        Elija entre diferentes formas de visualizar nuestro trabajo y descubra la calidad de nuestros servicios de autolavado y detallado.
      </p>
      <div className="gallery-explore-cards">
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80" alt="Carrusel" />
          <h3>Vista de Carrusel</h3>
          <p>Navegue por nuestras fotos en un formato de presentación de diapositivas, ideal para apreciar los detalles de cada vehículo y el antes y después de nuestros servicios.</p>
          <button className="btn-dark" onClick={() => navigate('/carrusel')}>Explorar Carrusel</button>
        </div>
        <div className="gallery-card">
          <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80" alt="Mosaico" />
          <h3>Vista de Mosaico</h3>
          <p>Visualice múltiples imágenes a la vez en un formato de cuadrícula, perfecto para comparar diferentes servicios y resultados de manera rápida y eficiente.</p>
          <button className="btn-dark">Explorar Mosaico</button>
        </div>
      </div>
    </section>
  );
};

export default GalleryExplore; 