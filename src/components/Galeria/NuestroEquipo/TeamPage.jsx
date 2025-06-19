import React, { useState } from 'react';

const team = [
  {
    name: 'Carlos Méndez',
    role: 'Aplicación de Cera Profesional',
    desc: 'Carlos demuestra la técnica perfecta para aplicar nuestra cera premium, garantizando un brillo duradero y protección contra los elementos.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    exp: '5 años de experiencia',
    specialty: 'Encerrado Premium',
  },
  {
    name: 'Ana y Miguel',
    role: 'Detallado Interior Completo',
    desc: 'Ana y Miguel trabajan en equipo para restaurar el interior de este vehículo, prestando atención a cada rincón para una limpieza impecable.',
    img: '',
    exp: 'Especialistas en interiores',
    specialty: 'Limpieza Interior',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Pulido de Carrocería',
    desc: 'Roberto utiliza nuestra pulidora de última generación para eliminar imperfecciones y restaurar el brillo original de la pintura.',
    img: '',
    exp: 'Especialista en corrección de pintura',
    specialty: 'Pulido Profesional',
  },
  {
    name: 'Laura Gómez',
    role: 'Aplicación de Repelente de Agua',
    desc: 'Laura aplica nuestro tratamiento hidrofóbico exclusivo que mejora la visibilidad en lluvia y facilita la limpieza de los cristales.',
    img: '',
    exp: '3 años de experiencia',
    specialty: 'Tratamiento Hidrofóbico',
  },
  {
    name: 'Daniel Ortiz',
    role: 'Cuidado Especializado de Rines',
    desc: 'Daniel utiliza productos específicos para limpiar y proteger los rines de aleación, eliminando el polvo de frenos y restaurando su brillo original.',
    img: '',
    exp: 'Especialista en rines y neumáticos',
    specialty: 'Limpieza de Llantas',
  },
  {
    name: 'Equipo Premium',
    role: 'Trabajo en Equipo',
    desc: 'Nuestro equipo completo trabajando en perfecta sincronía para ofrecer nuestro servicio de lavado premium en tiempo récord sin sacrificar la calidad.',
    img: '',
    exp: 'Servicio completo',
    specialty: 'Servicio Premium',
  },
];

const TeamPage = () => {
  const [sort, setSort] = useState('recientes');
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const totalPages = Math.ceil(team.length / pageSize) || 1;
  const paginated = team.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className="bg-white min-vh-100 py-5">
      <div className="container">
        <h2 className="fw-bold mb-2">Nuestro Equipo en Acción</h2>
        <div className="text-secondary mb-4">
          En esta sección, presentamos a nuestro dedicado equipo de profesionales trabajando con pasión y precisión para dejar su vehículo impecable. Cada imagen captura el compromiso y la atención al detalle que caracterizan nuestro servicio.
        </div>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className="btn btn-dark">Ver todas</button>
          <button className="btn btn-outline-dark">Filtrar por servicio</button>
        </div>
        <div className="d-flex justify-content-end align-items-center gap-2 mb-3">
          <span className="text-secondary small">Ordenar por:</span>
          <select className="form-select form-select-sm" style={{width: 140}} value={sort} onChange={e => setSort(e.target.value)}>
            <option value="recientes">Más recientes</option>
            <option value="antiguos">Más antiguos</option>
            <option value="alfabetico">A-Z</option>
          </select>
        </div>
        <div className="row g-4 mb-4">
          {paginated.map((member, idx) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={idx}>
              <div className="card shadow-sm border-0 w-100 d-flex flex-column">
                {member.img && (
                  <div className="position-relative">
                    <img src={member.img} alt={member.role} className="card-img-top" style={{height: 200, objectFit: 'cover'}} />
                    <span className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-3 py-1 small fw-semibold">{member.specialty}</span>
                  </div>
                )}
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <div className="fw-bold mb-1">{member.role}</div>
                    <div className="text-secondary small mb-2">{member.desc}</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end mt-auto">
                    <span className="text-secondary small">{member.name}</span>
                    <span className="text-secondary small">{member.exp}</span>
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
          <div className="card-body d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
            <div>
              <div className="fw-bold fs-5 mb-2">¿Quieres unirte a nuestro equipo?</div>
              <div className="text-secondary">Estamos buscando profesionales apasionados por el cuidado automotriz. Si tienes experiencia o deseas aprender, envíanos tu currículum.</div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-dark">Ver oportunidades</button>
              <button className="btn btn-outline-dark">Contactar RRHH</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage; 