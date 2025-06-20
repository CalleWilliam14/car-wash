import React from 'react';
import { Link } from 'react-router-dom';

const HorariosDeAtencionPage = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
            <li className="breadcrumb-item"><Link to="/ubicacion">Ubicación</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Horarios de Atención</li>
          </ol>
        </nav>

        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Horarios y Ubicación</h1>
            <p className="lead text-muted">Planifica tu visita a AquaShine</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-3"><i className="bi bi-clock-fill me-2 text-primary"></i>Horarios de Atención</h4>
                <div className="mb-4">
                  <h6 className="fw-semibold">Horario Regular</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">Lunes <span>8:00 – 20:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Martes <span>8:00 – 20:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Miércoles <span>8:00 – 20:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Jueves <span>8:00 – 20:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Viernes <span>8:00 – 20:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Sábado <span>8:00 – 20:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">Domingo <span>8:00 – 12:00</span></li>
                  </ul>
                </div>
                <div className="mb-3">
                  <h6 className="fw-semibold">Horarios Especiales</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">Feriados Nacionales <span>10:00 – 18:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">24 y 31 de Diciembre <span>8:00 – 14:00</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center text-danger">25 de Diciembre <span>Cerrado</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center text-danger">1 de Enero <span>Cerrado</span></li>
                  </ul>
                </div>
                <p className="text-muted small mt-3"><i className="bi bi-info-circle me-2"></i>El último servicio se admite 30 minutos antes del cierre.</p>
              </div>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-body p-4">
                    <h4 className="card-title fw-bold mb-3"><i className="bi bi-geo-alt-fill me-2 text-primary"></i>Dirección</h4>
                    <p className="mb-1">Avenida Principal 123</p>
                    <p className="mb-1">Colonia Centro</p>
                    <p className="mb-3">Ciudad de Cochabamba, CP 12345, Bolivia</p>
                    <div className="d-flex gap-2">
                        <Link to="/detalles" className="btn btn-primary"><i className="bi bi-sign-turn-right-fill me-2"></i>Cómo llegar</Link>
                        <Link to="/detalles" className="btn btn-outline-secondary">Detalles de ubicación</Link>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body p-4">
                    <h4 className="card-title fw-bold mb-3"><i className="bi bi-info-circle-fill me-2 text-primary"></i>Información Adicional</h4>
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <h6 className="fw-semibold"><i className="bi bi-p-square-fill me-2"></i>Estacionamiento</h6>
                            <p className="small text-muted">Contamos con estacionamiento gratuito para clientes con capacidad para 20 vehículos.</p>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <h6 className="fw-semibold"><i className="bi bi-credit-card-fill me-2"></i>Métodos de Pago</h6>
                            <p className="small text-muted">Aceptamos efectivo, tarjetas de crédito/débito y pagos móviles (Apple Pay, Google Pay).</p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="fw-semibold"><i className="bi bi-universal-access me-2"></i>Accesibilidad</h6>
                            <p className="small text-muted">Nuestras instalaciones cuentan con acceso para personas con movilidad reducida.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
                <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3 d-flex justify-content-between align-items-center">
                        <span><i className="bi bi-map-fill me-2 text-primary"></i>Mapa de Ubicación</span>
                        <a href="#" className="small">Ver mapa completo</a>
                    </h5>
                    <div className="ratio ratio-1x1 mb-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.475411789727!2d-66.1569996851226!3d-17.38942398807841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373e0b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sPlaza%20Col%C3%B3n!5e0!3m2!1ses!2sbo!4v1622659324502!5m2!1ses!2sbo"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Mapa de Ubicación"
                        ></iframe>
                    </div>
                    <p className="small text-muted"><i className="bi bi-geo-alt-fill me-2"></i>A 5 minutos de la Plaza Central y 10 minutos del Centro Comercial Las Américas.</p>
                </div>
            </div>

            <div className="card shadow-sm mb-4">
                <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3 d-flex justify-content-between align-items-center">
                        <span><i className="bi bi-images me-2 text-primary"></i>Nuestras Instalaciones</span>
                        <Link to="/galeria" className="small">Ver todas las fotos <i className="bi bi-arrow-right-short"></i></Link>
                    </h5>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-puZiOWrRKNjm9OTojmbPouXt7GeqThPOQ&s" alt="Instalaciones CarWash" className="img-fluid rounded" />
                </div>
            </div>

            <div className="card shadow-sm bg-dark text-white text-center">
                <div className="card-body p-4">
                    <h5 className="card-title fw-bold">¿Tienes alguna pregunta?</h5>
                    <p className="text-white-50">Nuestro equipo está disponible para ayudarte con cualquier consulta.</p>
                    <div className="d-grid gap-2">
                        <button className="btn btn-warning fw-semibold"><i className="bi bi-telephone-outbound-fill me-2"></i>Llamar ahora</button>
                        <button className="btn btn-outline-light"><i className="bi bi-envelope-fill me-2"></i>Enviar mensaje</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorariosDeAtencionPage; 