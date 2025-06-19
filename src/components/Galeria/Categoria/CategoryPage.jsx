import React, { useState } from 'react';

const categories = [
  'Lavado Básico',
  'Lavado Premium',
  'Detallado Completo',
  'Interior',
  'Pulido y Encerado',
];

const images = [
  {
    title: 'Sedan Familiar',
    desc: 'Lavado exterior completo con especial atención a las llantas y parachoques.',
    date: '15 mayo, 2023',
    category: 'Lavado Básico',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'SUV Ejecutivo',
    desc: 'Lavado exterior con limpieza de vidrios y tratamiento especial para rines.',
    date: '2 junio, 2023',
    category: 'Lavado Básico',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Camioneta Pickup',
    desc: 'Lavado completo con especial atención a la caja y zonas con barro.',
    date: '28 mayo, 2023',
    category: 'Lavado Básico',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Hatchback Compacto',
    desc: 'Lavado exterior con especial atención a los detalles de la carrocería.',
    date: '10 junio, 2023',
    category: 'Lavado Básico',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Coupé Deportivo',
    desc: 'Lavado dedicado con productos especiales para pintura metalizada.',
    date: '5 junio, 2023',
    category: 'Lavado Básico',
    img: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Minivan Familiar',
    desc: 'Lavado exterior completo con limpieza de puertas corredizas.',
    date: '20 mayo, 2023',
    category: 'Lavado Básico',
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80',
  },
];

const suggestions = [
  {
    title: 'Lavado Premium',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
  },
];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [sort, setSort] = useState('recientes');
  const [page, setPage] = useState(1);
  const filtered = images.filter(img => img.category === selectedCategory);
  const pageSize = 6;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="bg-white min-vh-100 py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">Galería por Categoría de Servicio</h2>
        <div className="text-secondary text-center mb-4">
          Explore nuestra colección de fotos organizadas por tipo de servicio. Cada categoría muestra los resultados excepcionales que logramos con nuestros diferentes niveles de servicio.
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn-sm ${selectedCategory === cat ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => { setSelectedCategory(cat); setPage(1); }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="mb-4">
          <h4 className="fw-bold mb-1">{selectedCategory}</h4>
          <div className="text-secondary mb-2" style={{maxWidth: 700}}>
            {selectedCategory === 'Lavado Básico' && 'Nuestro servicio de lavado básico incluye limpieza exterior, secado a mano y limpieza básica de llantas. Ideal para mantener su vehículo limpio regularmente.'}
            {selectedCategory === 'Lavado Premium' && 'Incluye limpieza profunda, encerado y detalles premium para un acabado superior.'}
            {selectedCategory === 'Detallado Completo' && 'Servicio integral que abarca limpieza interior y exterior, pulido y protección de pintura.'}
            {selectedCategory === 'Interior' && 'Limpieza y desinfección profunda de tapicería, alfombras y superficies internas.'}
            {selectedCategory === 'Pulido y Encerado' && 'Restauración del brillo y protección de la pintura con productos de alta calidad.'}
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="text-secondary small">Ver como:</span>
            <i className="bi bi-grid-3x3-gap-fill fs-5 text-dark"></i>
            <i className="bi bi-grid-1x2 fs-5 text-secondary"></i>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2 justify-content-end">
            <span className="text-secondary small">Ordenar por:</span>
            <select className="form-select form-select-sm" style={{width: 140}} value={sort} onChange={e => setSort(e.target.value)}>
              <option value="recientes">Más recientes</option>
              <option value="antiguos">Más antiguos</option>
              <option value="alfabetico">A-Z</option>
            </select>
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
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
              <div className="card shadow-sm border-0 w-100 d-flex flex-column">
                <img src={img.img} alt={img.title} className="card-img-top" style={{height: 180, objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="fw-bold mb-1">{img.title}</div>
                    <div className="text-secondary small mb-2">{img.desc}</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-auto">
                    <span className="text-secondary small">{img.date}</span>
                    <button className="btn btn-link btn-sm p-0 text-dark fw-semibold">Ver antes/después <i className="bi bi-arrow-right-short"></i></button>
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
        <div className="mb-4">
          <div className="fw-bold mb-2">Otras categorías que podrían interesarte</div>
          <div className="row g-3">
            {suggestions.map((s, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <div className="position-relative rounded overflow-hidden" style={{height: 120}}>
                  <img src={s.img} alt={s.title} className="w-100 h-100 object-fit-cover" />
                  <span className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-3 py-1 small fw-semibold">{s.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card bg-light border-0 shadow-sm mb-2">
          <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <div className="fw-bold fs-5 mb-2 mb-md-0">¿Quieres ver más resultados?</div>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-dark">Ver Galería Completa</button>
              <button className="btn btn-dark">Agendar Servicio</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage; 