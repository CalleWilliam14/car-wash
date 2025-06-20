import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Lavado Básico',
    desc: 'Nuestro servicio de lavado exterior completo con espuma activa y secado a mano.',
    img: 'https://cdn.buttercms.com/cgmViEalQJa5poDCMf2Q',
    icon: 'bi-droplet',
    badge: 'Popular',
    color: 'primary',
  },
  {
    title: 'Detallado Premium',
    desc: 'Servicio completo de detallado con pulido, encerado y protección de pintura de larga duración.',
    img: 'https://www.amautodetail.com/uploads/1/2/4/0/124006011/1549265266790_1.png',
    icon: 'bi-stars',
    badge: 'Premium',
    color: 'warning',
  },
  {
    title: 'Limpieza Interior',
    desc: 'Limpieza profunda de interiores con aspirado, tratamiento de tapicería y desinfección.',
    img: 'https://www.amautodetail.com/uploads/1/2/4/0/124006011/1549264542768_1.png',
    icon: 'bi-person-arms-up',
    badge: 'Hogar',
    color: 'success',
  },
];

const ServiceCategories = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-3">Categorías de Servicios</h2>
        <p className="lead text-center mb-4">
          Explore nuestras diferentes categorías de servicios y vea ejemplos de nuestro trabajo en cada especialidad.
        </p>
        <div className="row g-4 justify-content-center">
          {services.map((service, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
                <img src={service.img} alt={service.title} className="card-img-top" style={{height: 150, objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title h5 fw-bold mb-2">
                    <i className={`bi ${service.icon} me-2 text-${service.color}`}></i>
                    {service.title}
                    <span className={`badge bg-${service.color} ms-2`}>{service.badge}</span>
                  </h3>
                  <p className="card-text mb-3">{service.desc}</p>
                  <button className={`btn btn-outline-${service.color} mt-auto w-100`} onClick={() => navigate('/categoria')}>
                    <i className="bi bi-images me-2"></i>Ver Galería
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories; 