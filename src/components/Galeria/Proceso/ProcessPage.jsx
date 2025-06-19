import React from 'react';

const steps = [
  {
    title: 'Inspección Inicial',
    desc: 'Evaluamos minuciosamente el estado del vehículo, identificando áreas que requieren atención especial y personalizando el proceso de limpieza según las necesidades específicas.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    subtasks: ['Inspección de carrocería', 'Evaluación de interior', 'Documentación digital'],
  },
  {
    title: 'Pre-lavado y Enjuague',
    desc: 'Aplicamos un pre-lavado espumante para ablandar la suciedad y contaminantes superficiales, seguido de un enjuague para eliminar partículas antes del lavado manual.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    subtasks: ['Aplicación de espuma activa', 'Enjuague a presión controlada', 'Eliminación de contaminantes'],
  },
  {
    title: 'Lavado Manual Detallado',
    desc: 'Realizamos un lavado manual meticuloso utilizando productos premium y técnica de dos cubetas para evitar micro-rayones, prestando especial atención a cada detalle del vehículo.',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
    subtasks: ['Técnica de lavado con microfibra', 'Limpieza especializada de llantas', 'Atención a detalles específicos'],
  },
  {
    title: 'Secado y Preparación',
    desc: 'Utilizamos toallas de microfibra de alta calidad y sopladores de aire para un secado perfecto sin marcas de agua, preparando la superficie para los tratamientos posteriores.',
    img: '',
    subtasks: ['Secado con microfibra premium', 'Secado con soplador de precisión', 'Inspección post secado'],
  },
  {
    title: 'Pulido y Protección',
    desc: 'Aplicamos tratamientos de pulido para eliminar imperfecciones menores y restaurar el brillo original, seguido de cera o sellador que protegen la pintura por meses.',
    img: '',
    subtasks: ['Pulido con máquina orbital', 'Aplicación de cera premium', 'Sellado cerámico avanzado'],
  },
  {
    title: 'Detalles Finales e Inspección',
    desc: 'Concluimos el proceso con una atención meticulosa a los detalles finales como cristales, neumáticos y molduras, seguido de una inspección exhaustiva para garantizar resultados perfectos.',
    img: '',
    subtasks: ['Acondicionamiento de neumáticos', 'Limpieza de cristales', 'Inspección final de calidad'],
  },
];

const ProcessPage = () => (
  <section className="bg-white min-vh-100 py-5">
    <div className="container">
      <h2 className="fw-bold text-center mb-2">Proceso de Limpieza</h2>
      <div className="text-secondary text-center mb-5">
        Descubre paso a paso cómo transformamos tu vehículo con nuestro meticuloso proceso de limpieza profesional
      </div>
      <div className="position-relative">
        <div className="border-start border-3 border-dark position-absolute top-0 start-50 translate-middle-x h-100" style={{zIndex: 0, minHeight: steps.length * 220}}></div>
        <div className="row flex-column align-items-center position-relative" style={{zIndex: 1}}>
          {steps.map((step, idx) => (
            <div className="col-12 col-lg-10 mb-5" key={idx}>
              <div className="card shadow-sm border-0 p-4 mb-2" style={{minHeight: 200}}>
                <div className="row g-3 align-items-center">
                  <div className="col-md-8">
                    <h4 className="fw-bold mb-2"><i className="bi bi-check2-circle me-2 text-success"></i>{step.title}</h4>
                    <div className="mb-3 text-secondary">{step.desc}</div>
                    <div className="d-flex flex-wrap gap-3">
                      {step.subtasks.map((sub, i) => (
                        <span className="badge bg-secondary-subtle text-dark border border-1" key={i}><i className="bi bi-dot me-1"></i>{sub}</span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    {step.img && <img src={step.img} alt={step.title} className="img-fluid rounded shadow-sm" style={{maxHeight: 120, objectFit: 'cover'}} />}
                  </div>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="d-flex justify-content-center align-items-center mb-2" style={{height: 30}}>
                  {/* Línea vertical, sin ícono */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="card bg-dark text-white border-0 shadow-sm my-5">
        <div className="card-body text-center py-4">
          <h4 className="fw-bold mb-2">¿Listo para transformar tu vehículo?</h4>
          <div className="mb-3">Agenda hoy mismo y experimenta nuestro meticuloso proceso de limpieza profesional. Garantizamos resultados excepcionales que harán brillar tu vehículo como nuevo.</div>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <a href="/antesdespues" className="btn btn-outline-light btn-lg px-4"><i className="bi bi-arrow-repeat me-2"></i>Ver Antes y Después</a>
            <a href="/categoria" className="btn btn-warning btn-lg px-4"><i className="bi bi-calendar-check me-2"></i>Agendar Servicio</a>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="fw-bold mb-2">Explora Nuestras Galerías</div>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <a href="/" className="text-decoration-none">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className="bi bi-images fs-1 text-primary mb-2"></i>
                  <div className="fw-bold">Galería Principal</div>
                  <div className="text-secondary small">Explora nuestra colección completa, compara resultados y descubre el detalle de nuestro trabajo.</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/antesdespues" className="text-decoration-none">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className="bi bi-arrow-repeat fs-1 text-success mb-2"></i>
                  <div className="fw-bold">Antes y Después</div>
                  <div className="text-secondary small">Transformaciones sorprendentes de nuestros diferentes servicios.</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a href="/equipo" className="text-decoration-none">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <i className="bi bi-people fs-1 text-info mb-2"></i>
                  <div className="fw-bold">Nuestro Equipo</div>
                  <div className="text-secondary small">Conoce a los profesionales detrás de cada resultado.</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProcessPage; 