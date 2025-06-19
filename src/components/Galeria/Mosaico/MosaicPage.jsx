import React, { useState } from 'react';

const categories = ['Todos', 'Exterior', 'Interior', 'Detallado', 'Antes/Después'];
const images = [
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Interior de lujo',
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Faros restaurados',
    category: 'Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    title: 'Pulido espejo',
    category: 'Detallado',
  },
  {
    src: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
    title: 'Antes: suciedad',
    category: 'Antes/Después',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80',
    title: 'Después: brillo',
    category: 'Antes/Después',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    title: 'Tapicería renovada',
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
    title: 'Lavado exterior',
    category: 'Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Limpieza profunda',
    category: 'Detallado',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Interior familiar',
    category: 'Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    title: 'Pulido profesional',
    category: 'Detallado',
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    title: 'Exterior deportivo',
    category: 'Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80',
    title: 'Antes: manchas',
    category: 'Antes/Después',
  },
  {
    src: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
    title: 'Después: impecable',
    category: 'Antes/Después',
  },
];

const MosaicPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sort, setSort] = useState('recientes');
  const [page, setPage] = useState(1);

  // Filtros y paginación simulados
  const filtered = selectedCategory === 'Todos' ? images : images.filter(img => img.category === selectedCategory);
  const pageSize = 8;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="bg-white min-vh-100 py-5">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <div>
            <h2 className="fw-bold mb-1">Galería de Fotos</h2>
            <div className="text-secondary small mb-2">Explora nuestra colección de fotos de servicios de lavado de autos</div>
            <div className="d-flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-secondary'}`}
                  onClick={() => { setSelectedCategory(cat); setPage(1); }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column align-items-end gap-2">
            <div className="btn-group mb-1" role="group">
              <button className="btn btn-outline-dark" disabled>Vista Principal</button>
              <button className="btn btn-outline-dark" onClick={() => window.location.href = '/carrusel'}>Vista Carrusel</button>
              <button className="btn btn-dark active">Vista Mosaico</button>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-secondary small">Ordenar por:</span>
              <select className="form-select form-select-sm" style={{width: 140}} value={sort} onChange={e => setSort(e.target.value)}>
                <option value="recientes">Más recientes</option>
                <option value="antiguos">Más antiguos</option>
                <option value="alfabetico">A-Z</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row g-4 mb-4">
          {paginated.length === 0 && (
            <div className="col-12 text-center text-muted py-5">
              <i className="bi bi-image fs-1 mb-2"></i>
              <div>No hay imágenes para esta categoría.</div>
            </div>
          )}
          {paginated.map((img, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={idx}>
              <div className="card shadow-sm border-0 w-100 d-flex flex-column">
                <img src={img.src} alt={img.title} className="card-img-top" style={{height: 180, objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                  <h5 className="card-title text-center small fw-bold mb-2">{img.title}</h5>
                  <div className="d-flex gap-2 w-100 justify-content-center">
                    <button className="btn btn-dark btn-sm w-50"><i className="bi bi-eye me-1"></i>Ver</button>
                    <button className="btn btn-outline-secondary btn-sm w-50"><i className="bi bi-bookmark me-1"></i>Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav className="d-flex justify-content-center">
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
      </div>
    </section>
  );
};

export default MosaicPage; 