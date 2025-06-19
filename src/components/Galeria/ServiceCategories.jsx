import React from 'react';
import './ServiceCategories.css';

const services = [
  {
    title: 'Lavado Básico',
    desc: 'Nuestro servicio de lavado exterior completo con espuma activa y secado a mano.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Detallado Premium',
    desc: 'Servicio completo de detallado con pulido, encerado y protección de pintura de larga duración.',
    img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Limpieza Interior',
    desc: 'Limpieza profunda de interiores con aspirado, tratamiento de tapicería y desinfección.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
];

const ServiceCategories = () => (
  <section className="service-categories">
    <h2>Categorías de Servicios</h2>
    <p className="service-categories-desc">
      Explore nuestras diferentes categorías de servicios y vea ejemplos de nuestro trabajo en cada especialidad.
    </p>
    <div className="service-cards">
      {services.map((service, idx) => (
        <div className="service-card" key={idx}>
          <img src={service.img} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
          <button className="btn-dark">Ver Galería</button>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceCategories; 