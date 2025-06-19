import React, { useState } from 'react';

const services = [
  'Todos los servicios',
  'Lavado Premium',
  'Detallado Interior',
  'Pulido y Encerado',
  'Limpieza Especializada',
];

const examples = [
  {
    title: 'Lavado Premium - SUV Mercedes',
    before: '',
    after: '',
    desc: 'Transformación de SUV Mercedes con nuestro servicio premium.',
    service: 'Lavado Premium',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Detallado Interior - Sedan BMW',
    before: '',
    after: '',
    desc: 'Interior de BMW restaurado a estado de fábrica.',
    service: 'Detallado Interior',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Pulido y Encerado - Deportivo Audi',
    before: '',
    after: '',
    desc: 'Brillo y protección para Audi deportivo.',
    service: 'Pulido y Encerado',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Limpieza de Llantas - Camioneta Ford',
    before: '',
    after: '',
    desc: 'Llantas y rines impecables en Ford Pickup.',
    service: 'Limpieza Especializada',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
  },
];

const categories = [
  { label: 'Lavado Básico', icon: 'bi-droplet' },
  { label: 'Lavado Premium', icon: 'bi-stars' },
  { label: 'Detallado Interior', icon: 'bi-person-arms-up' },
  { label: 'Pulido y Encerado', icon: 'bi-brush' },
];

const BeforeAfterPage = () => {
  const [view, setView] = useState('mosaico');
  const [service, setService] = useState('Todos los servicios');
  const [page, setPage] = useState(1);
  const filtered = service === 'Todos los servicios' ? examples : examples.filter(e => e.service === service);
  const pageSize = 4;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="bg-white min-vh-100 py-5">
      <div className="container">
        <h2 className="fw-bold mb-2">Antes y Después</h2>
        <div className="text-secondary mb-4">
          Explore nuestra galería de transformaciones donde mostramos el estado de los vehículos antes y después de nuestros servicios de lavado. Cada imagen muestra el impacto visual de nuestro trabajo profesional.
        </div>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className={`btn ${view === 'mosaico' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setView('mosaico')}>Vista Mosaico</button>
          <button className={`btn ${view === 'carrusel' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setView('carrusel')}>Vista Carrusel</button>
        </div>
        <div className="d-flex justify-content-end align-items-center gap-2 mb-3">
          <span className="text-secondary small">Filtrar por servicio:</span>
          <select className="form-select form-select-sm" style={{width: 180}} value={service} onChange={e => { setService(e.target.value); setPage(1); }}>
            {services.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="row g-4 mb-4">
          {paginated.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              <i className="bi bi-image fs-1 mb-2"></i>
              <div>No hay transformaciones para este servicio.</div>
            </div>
          )}
          {paginated.map((ex, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column">
                  <div className="fw-bold mb-2">{ex.title}</div>
                  <div className="mb-2">
                    {ex.img && <img src={ex.img} alt={ex.title} className="img-fluid rounded mb-2" style={{maxHeight: 180, objectFit: 'cover'}} />}
                  </div>
                  <div className="text-secondary small mb-2">{ex.desc}</div>
                  <div className="d-flex justify-content-between align-items-end mt-auto">
                    <span className="text-secondary small">Servicio: <span className="fw-semibold">{ex.service}</span></span>
                    <button className="btn btn-dark btn-sm">Ver más detalles</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav className="d-flex justify-content-center mb-4">
          <ul className="pagination pagination-sm mb-0">
            <li className={`page-item${page === 1 ? ' disabled' : ''}`}><button className="page-link" onClick={() => setPage(page - 1)}>&lt;</button></li>
            {[...Array(totalPages)].map((_, i) => (
              <li className={`page-item${page === i + 1 ? ' active' : ''}`} key={i}>
                <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item${page === totalPages ? ' disabled' : ''}`}><button className="page-link" onClick={() => setPage(page + 1)}>&gt;</button></li>
          </ul>
        </nav>
        <div className="card bg-light border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="fw-bold fs-5 mb-2">¿Quieres ver más transformaciones?</div>
            <div className="text-secondary mb-3">Explora nuestras galerías por categoría de servicio para descubrir más ejemplos impresionantes del trabajo que realizamos.</div>
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {categories.map((cat, idx) => (
                <button className="btn btn-dark d-flex align-items-center gap-2" key={idx}>
                  <i className={`bi ${cat.icon} fs-5`}></i> {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterPage; 