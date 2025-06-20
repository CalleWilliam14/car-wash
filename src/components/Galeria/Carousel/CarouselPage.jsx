import React, { useState } from 'react';

const images = [
  {
    src: 'https://sergioescobar.cl/wp-content/uploads/2020/12/Deja-tu-auto-como-nuevo.jpg',
    title: 'Pulido Profesional - Audi R8',
    desc: 'Este Audi R8 recibió nuestro tratamiento de pulido profesional de tres etapas, eliminando micro-rayones y devolviendo un acabado espejo a la pintura. El proceso incluye compuesto de corte, pulido fino y sellado cerámico para una protección duradera.',
    date: '15 de octubre, 2023',
    views: 243,
    comments: 18,
    categories: ['Pulido Profesional', 'Autos Deportivos', 'Tratamientos Cerámicos', 'Acabados Premium', 'Antes y Después'],
  },
  {
    src: 'https://media.istockphoto.com/id/1800033825/es/foto/limpiar-a-mano-el-interior-del-coche-con-una-toalla-de-microfibra.jpg?s=612x612&w=0&k=20&c=b_N-yRddmGLcTe3Q3lgFG04oZCzIS_BjlSS-xIqfU7g=',
    title: 'Limpieza Interior - SUV Familiar',
    desc: 'Renovación completa del interior con limpieza profunda de tapicería, tratamiento de cuero y desinfección.',
    date: '10 de octubre, 2023',
    views: 180,
    comments: 12,
    categories: ['Limpieza Interior', 'SUV', 'Familiares'],
  },
  {
    src: 'https://e-carwash.com/wp-content/uploads/2024/03/encerado-1024x683.jpg',
    title: 'Encerado Premium - BMW Serie 3',
    desc: 'Aplicación de cera premium para un brillo intenso y protección contra los elementos.',
    date: '5 de octubre, 2023',
    views: 120,
    comments: 5,
    categories: ['Encerado', 'BMW', 'Acabados Premium'],
  },
  {
    src: 'https://www.perupymes.com/img/noticias/dbede-mark-vii-carwash-blog-1024x512.png',
    title: 'Lavado Exterior - Ford Mustang',
    desc: 'Lavado exterior completo con espuma activa y secado a mano.',
    date: '1 de octubre, 2023',
    views: 98,
    comments: 2,
    categories: ['Lavado Exterior', 'Ford', 'Autos Deportivos'],
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpp7YyHONZqZvKqqsSxuqL0LDyZg7zlrtSQ&s',
    title: 'Tratamiento Cerámico - Tesla Model S',
    desc: 'Protección cerámica avanzada para un acabado duradero y fácil de limpiar.',
    date: '28 de septiembre, 2023',
    views: 210,
    comments: 9,
    categories: ['Tratamientos Cerámicos', 'Tesla', 'Acabados Premium'],
  },
];

const CarouselPage = () => {
  const [current, setCurrent] = useState(2);
  const img = images[current];

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent px-0 mb-2">
            <li className="breadcrumb-item">Inicio</li>
            <li className="breadcrumb-item active" aria-current="page">Vista de Carrusel</li>
          </ol>
        </nav>
        <h2 className="display-5 fw-bold text-center mb-2">Galería de Servicios Premium</h2>
        <p className="lead text-center mb-4">
          Explore nuestra colección de trabajos destacados. Deslice horizontalmente para ver cada imagen en detalle.
        </p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button
            className="btn btn-dark px-4"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
          >Anterior</button>
          <span className="fw-medium">{current + 1} de {images.length} imágenes</span>
          <button
            className="btn btn-dark px-4"
            onClick={() => setCurrent((c) => Math.min(images.length - 1, c + 1))}
            disabled={current === images.length - 1}
          >Siguiente</button>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-2 d-flex justify-content-center align-items-center">
              <img
                src={img.src}
                alt={img.title}
                className="img-fluid rounded-4 w-100"
                style={{ maxHeight: 400, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-0 shadow-sm mb-2">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-2">{img.title}</h5>
                <p className="card-text mb-3">{img.desc}</p>
                <div className="d-flex flex-wrap align-items-center gap-3 text-secondary small">
                  <span>📅 {img.date}</span>
                  <span><i className="bi bi-eye"></i> {img.views}</span>
                  <span><i className="bi bi-chat"></i> {img.comments}</span>
                  <span className="text-primary fw-semibold" style={{ cursor: 'pointer' }}>Compartir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-nowrap overflow-auto gap-3 mb-4 pb-2 justify-content-center">
          {images.map((im, idx) => (
            <div
              key={idx}
              className={`border rounded-3 bg-white shadow-sm p-1 mx-1 ${idx === current ? 'border-primary border-3' : 'border-secondary border-1'}`}
              style={{ width: 70, height: 70, cursor: 'pointer', flex: '0 0 auto', boxShadow: idx === current ? '0 0 0 0.2rem #e6f0ff' : undefined }}
              onClick={() => setCurrent(idx)}
            >
              <img
                src={im.src}
                alt={im.title}
                className="img-fluid rounded-2"
                style={{ width: 64, height: 64, objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="bg-white rounded-3 shadow-sm p-3">
              <div className="fw-semibold mb-2">Categorías Relacionadas</div>
              <div className="d-flex flex-wrap gap-2">
                {img.categories.map((cat, i) => (
                  <span key={i} className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 fs-6">{cat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage; 