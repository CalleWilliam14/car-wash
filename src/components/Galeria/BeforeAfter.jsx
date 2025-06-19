import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const BeforeAfter = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-3">Antes y Después</h2>
        <p className="lead text-center mb-4">
          Vea la transformación de los vehículos con nuestros servicios profesionales de autolavado y detallado.
        </p>
        <div className="row g-4 justify-content-center">
          {examples.map((ex, idx) => (
            <div className="col-12 col-md-6 col-lg-5" key={idx}>
              <div className="card shadow-sm h-100 border-0">
                <div className="row g-0 align-items-center">
                  <div className="col-6 text-center p-2">
                    <span className="badge bg-danger mb-2"><i className="bi bi-arrow-counterclockwise me-1"></i>Antes</span>
                    <img src={ex.before} alt="Antes" className="img-fluid rounded-3 border" style={{height: 100, objectFit: 'cover'}} />
                  </div>
                  <div className="col-6 text-center p-2">
                    <span className="badge bg-success mb-2"><i className="bi bi-arrow-clockwise me-1"></i>Después</span>
                    <img src={ex.after} alt="Después" className="img-fluid rounded-3 border" style={{height: 100, objectFit: 'cover'}} />
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="card-title h6 fw-bold mb-2"><i className="bi bi-stars me-2 text-warning"></i>{ex.title}</h3>
                  <p className="card-text mb-0">{ex.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-dark btn-lg px-4" onClick={() => navigate('/antesdespues')}>
            <i className="bi bi-arrow-right-circle me-2"></i>Ver más transformaciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter; 