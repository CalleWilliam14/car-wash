import React, { useState } from 'react';

const categories = ['Todos', 'Exterior', 'Interior', 'Detallado', 'Antes/Después'];
const images = [
  {
    src: 'https://www.allservy.com/web/image/8120/E5k4rdUMgO.jpg',
    title: 'Interior de lujo',
    category: 'Interior',
  },
  {
    src: 'https://media.istockphoto.com/id/1663629195/es/foto/el-hombre-pule-el-coche-mientras-sostiene-la-microfibra-en-la-mano.jpg?s=612x612&w=0&k=20&c=CPLLWIAUou61DrooWTamT0yDjmh121Fi_wiltzxIEHQ=',
    title: 'Faros restaurados',
    category: 'Exterior',
  },
  {
    src: 'https://bagesdetailing.com/wp-content/uploads/2020/09/car-detailing-1080x675-1.jpg',
    title: 'Pulido espejo',
    category: 'Detallado',
  },
  {
    src: 'https://cdn.prod.website-files.com/6612143a748f5c1dc2bf5e08/6612143a748f5c1dc2bf60ab_Ceramic%20Coating%20Before%20and%20After.webp',
    title: 'Antes: suciedad',
    category: 'Antes/Después',
  },
  {
    src: 'https://marvel-b1-cdn.bc0a.com/f00000000270514/s25180.pcdn.co/wp-content/uploads/2015/08/iStock-30424122.jpg',
    title: 'Después: brillo',
    category: 'Antes/Después',
  },
  {
    src: 'https://carwashmarbella.com/wp-content/uploads/Limpieza-de-coche-tapiceria.jpg',
    title: 'Tapicería renovada',
    category: 'Interior',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpdD-JRiGvQy6Ra4KdVmT7nV5AhOei6U0Nw&s',
    title: 'Lavado exterior',
    category: 'Exterior',
  },
  {
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQa-9INDljYiScm5UdxcDZZnWQpcfzNvUU0a5Id6JsAwUiuHGta0POV7BekbHXUcY_YTbuDvAIXZ_RbLJPCDWo5GjbRk3nxC1ysAHtrD26wk4MaZmvRJw51p01mD5OrZ_46CXA8V6HI-s/s1600/car+wash2J.jpg',
    title: 'Limpieza profunda',
    category: 'Detallado',
  },
  {
    src: 'https://megusta.do/storage/32000/26266/a4c94761fd85aa9262f256dfc1811f3e.jpg',
    title: 'Interior familiar',
    category: 'Interior',
  },
  {
    src: 'https://www.rojassa.com/wp-content/uploads/2018/03/pulido-de-autos.jpg',
    title: 'Pulido profesional',
    category: 'Detallado',
  },
  {
    src: 'https://www.shutterstock.com/shutterstock/videos/1100395861/thumb/1.jpg?ip=x480',
    title: 'Exterior deportivo',
    category: 'Exterior',
  },
  {
    src: 'https://columbiatireauto.com/wp-content/uploads/2021/02/columbia-car-wash-pic.png',
    title: 'Antes: manchas',
    category: 'Antes/Después',
  },
  {
    src: 'https://static.wixstatic.com/media/57adaa_7b4ed3b00e47413f8b4826793a96145b~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/57adaa_7b4ed3b00e47413f8b4826793a96145b~mv2.jpg',
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