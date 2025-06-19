import React from 'react';
import './BeforeAfter.css';

const examples = [
  {
    title: 'Detalle Completo - BMW Serie 3',
    before: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    after: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
    desc: 'Transformación completa con nuestro servicio de detallado premium, incluyendo pulido de carrocería y tratamiento cerámico.',
  },
  {
    title: 'Limpieza Interior - SUV Familiar',
    before: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    after: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Renovación completa del interior con limpieza profunda de tapicería, tratamiento de cuero y desinfección.',
  },
];

const BeforeAfter = () => (
  <section className="before-after">
    <h2>Antes y Después</h2>
    <p className="before-after-desc">
      Vea la transformación de los vehículos con nuestros servicios profesionales de autolavado y detallado.
    </p>
    <div className="before-after-cards">
      {examples.map((ex, idx) => (
        <div className="before-after-card" key={idx}>
          <div className="before-after-images">
            <div className="before-img">
              <span>Antes</span>
              <img src={ex.before} alt="Antes" />
            </div>
            <div className="after-img">
              <span>Después</span>
              <img src={ex.after} alt="Después" />
            </div>
          </div>
          <h3>{ex.title}</h3>
          <p>{ex.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BeforeAfter; 