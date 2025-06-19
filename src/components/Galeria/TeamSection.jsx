import React from 'react';

const team = [
  {
    name: 'Carlos Méndez',
    role: 'Aplicación de Cera Profesional',
    desc: 'Carlos demuestra la técnica perfecta para aplicar nuestra cera premium, garantizando un brillo duradero y protección contra los elementos.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    exp: '5 años de experiencia',
    icon: 'bi-award',
    badge: 'Experto',
    color: 'primary',
  },
  {
    name: 'Ana y Miguel',
    role: 'Detallado Interior Completo',
    desc: 'Ana y Miguel trabajan en equipo para restaurar el interior de este vehículo, prestando atención a cada rincón para una limpieza impecable.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    exp: 'Especialistas en interiores',
    icon: 'bi-people-fill',
    badge: 'Dúo',
    color: 'success',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Pulido de Carrocería',
    desc: 'Roberto utiliza nuestra pulidora de última generación para eliminar imperfecciones y restaurar el brillo original de la pintura.',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    exp: 'Especialista en corrección de pintura',
    icon: 'bi-brush',
    badge: 'Pintura',
    color: 'warning',
  },
  {
    name: 'Laura Gómez',
    role: 'Aplicación de Repelente de Agua',
    desc: 'Laura aplica nuestro tratamiento hidrofóbico exclusivo que mejora la visibilidad en lluvia y facilita la limpieza de los cristales.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    exp: '3 años de experiencia',
    icon: 'bi-droplet-half',
    badge: 'Hidrofóbico',
    color: 'info',
  },
];

const TeamSection = () => (
  <section className="bg-white py-5">
    <div className="container">
      <h2 className="display-6 fw-bold text-center mb-3">Nuestro Equipo en Acción</h2>
      <p className="lead text-center mb-4">
        Presentamos a nuestro dedicado equipo de profesionales trabajando con pasión y precisión para dejar su vehículo impecable.
      </p>
      <div className="row g-4 justify-content-center">
        {team.map((member, idx) => (
          <div className="col-12 col-md-6 col-lg-3" key={idx}>
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="pt-4">
                <img src={member.img} alt={member.name} className="rounded-circle border border-3 mb-3" style={{width: 90, height: 90, objectFit: 'cover'}} />
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <h3 className="card-title h6 fw-bold mb-1">
                  <i className={`bi ${member.icon} me-2 text-${member.color}`}></i>{member.role}
                </h3>
                <p className="card-text small mb-2">{member.desc}</p>
                <div className="d-flex flex-column align-items-center gap-1 mt-auto">
                  <span className="fw-semibold text-dark">{member.name}</span>
                  <span className="badge bg-secondary small">{member.exp}</span>
                  <span className={`badge bg-${member.color} mt-1`}>{member.badge}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection; 