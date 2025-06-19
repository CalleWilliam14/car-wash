import React from 'react';
import './TeamSection.css';

const team = [
  {
    name: 'Carlos Méndez',
    role: 'Aplicación de Cera Profesional',
    desc: 'Carlos demuestra la técnica perfecta para aplicar nuestra cera premium, garantizando un brillo duradero y protección contra los elementos.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    exp: '5 años de experiencia',
  },
  {
    name: 'Ana y Miguel',
    role: 'Detallado Interior Completo',
    desc: 'Ana y Miguel trabajan en equipo para restaurar el interior de este vehículo, prestando atención a cada rincón para una limpieza impecable.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    exp: 'Especialistas en interiores',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Pulido de Carrocería',
    desc: 'Roberto utiliza nuestra pulidora de última generación para eliminar imperfecciones y restaurar el brillo original de la pintura.',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    exp: 'Especialista en corrección de pintura',
  },
  {
    name: 'Laura Gómez',
    role: 'Aplicación de Repelente de Agua',
    desc: 'Laura aplica nuestro tratamiento hidrofóbico exclusivo que mejora la visibilidad en lluvia y facilita la limpieza de los cristales.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    exp: '3 años de experiencia',
  },
];

const TeamSection = () => (
  <section className="team-section">
    <h2>Nuestro Equipo en Acción</h2>
    <p className="team-section-desc">
      Presentamos a nuestro dedicado equipo de profesionales trabajando con pasión y precisión para dejar su vehículo impecable.
    </p>
    <div className="team-cards">
      {team.map((member, idx) => (
        <div className="team-card" key={idx}>
          <img src={member.img} alt={member.name} />
          <h3>{member.role}</h3>
          <p className="team-desc">{member.desc}</p>
          <div className="team-meta">
            <span>{member.name}</span>
            <span className="team-exp">{member.exp}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection; 