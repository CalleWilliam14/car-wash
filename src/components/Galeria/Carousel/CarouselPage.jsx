import React, { useState } from 'react';
import './CarouselPage.css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    title: 'Pulido Profesional - Audi R8',
    desc: 'Este Audi R8 recibió nuestro tratamiento de pulido profesional de tres etapas, eliminando micro-rayones y devolviendo un acabado espejo a la pintura. El proceso incluye compuesto de corte, pulido fino y sellado cerámico para una protección duradera.',
    date: '15 de octubre, 2023',
    views: 243,
    comments: 18,
    categories: ['Pulido Profesional', 'Autos Deportivos', 'Tratamientos Cerámicos', 'Acabados Premium', 'Antes y Después'],
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Limpieza Interior - SUV Familiar',
    desc: 'Renovación completa del interior con limpieza profunda de tapicería, tratamiento de cuero y desinfección.',
    date: '10 de octubre, 2023',
    views: 180,
    comments: 12,
    categories: ['Limpieza Interior', 'SUV', 'Familiares'],
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Encerado Premium - BMW Serie 3',
    desc: 'Aplicación de cera premium para un brillo intenso y protección contra los elementos.',
    date: '5 de octubre, 2023',
    views: 120,
    comments: 5,
    categories: ['Encerado', 'BMW', 'Acabados Premium'],
  },
  {
    src: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=800&q=80',
    title: 'Lavado Exterior - Ford Mustang',
    desc: 'Lavado exterior completo con espuma activa y secado a mano.',
    date: '1 de octubre, 2023',
    views: 98,
    comments: 2,
    categories: ['Lavado Exterior', 'Ford', 'Autos Deportivos'],
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    title: 'Tratamiento Cerámico - Tesla Model S',
    desc: 'Protección cerámica avanzada para un acabado duradero y fácil de limpiar.',
    date: '28 de septiembre, 2023',
    views: 210,
    comments: 9,
    categories: ['Tratamientos Cerámicos', 'Tesla', 'Acabados Premium'],
  },
];

const CarouselPage = () => {
  const [current, setCurrent] = useState(2); // Centrado en la imagen 3 como ejemplo
  const img = images[current];

  return (
    <main className="carousel-page">
      <div className="carousel-breadcrumbs">
        Inicio <span className="breadcrumb-sep">{'>'}</span> <b>Vista de Carrusel</b>
      </div>
      <h2 className="carousel-title">Galería de Servicios Premium</h2>
      <p className="carousel-subtitle">
        Explore nuestra colección de trabajos destacados. Deslice horizontalmente para ver cada imagen en detalle.
      </p>
      <div className="carousel-nav-row">
        <button
          className="carousel-nav-btn"
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
        >Anterior</button>
        <span className="carousel-counter">{current + 1} de {images.length} imágenes</span>
        <button
          className="carousel-nav-btn"
          onClick={() => setCurrent((c) => Math.min(images.length - 1, c + 1))}
          disabled={current === images.length - 1}
        >Siguiente</button>
      </div>
      <div className="carousel-main-img-box">
        <img src={img.src} alt={img.title} className="carousel-main-img" />
      </div>
      <div className="carousel-info-box">
        <div className="carousel-info-title">{img.title}</div>
        <div className="carousel-info-desc">{img.desc}</div>
        <div className="carousel-info-meta">
          <span>📅 {img.date}</span>
          <span>{img.views}</span>
          <span>{img.comments}</span>
          <span className="carousel-share">Compartir</span>
        </div>
      </div>
      <div className="carousel-thumbs-row">
        {images.map((im, idx) => (
          <div
            key={idx}
            className={`carousel-thumb-box${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          >
            <img src={im.src} alt={im.title} className="carousel-thumb-img" />
          </div>
        ))}
      </div>
      <div className="carousel-cats-box">
        <div className="carousel-cats-title">Categorías Relacionadas</div>
        <div className="carousel-cats-row">
          {img.categories.map((cat, i) => (
            <span key={i} className="carousel-cat">{cat}</span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CarouselPage; 