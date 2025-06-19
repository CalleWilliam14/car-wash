import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetallesDeLocalizacionPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-light py-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Inicio</a></li>
            <li className="breadcrumb-item"><a href="/ubicacion">Ubicación</a></li>
            <li className="breadcrumb-item active" aria-current="page">Detalles de la Localización</li>
          </ol>
        </nav>
        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">Nuestra Ubicación</h1>
            <p className="lead text-muted">Encuentra toda la información para llegar a nuestras instalaciones.</p>
        </div>
        <div className="row g-5">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-3"><i className="bi bi-geo-alt-fill me-2 text-primary"></i>Dirección y Referencias</h4>
                <div className="mb-3">
                  <h6 className="fw-semibold">Dirección Oficial</h6>
                  <p className="text-secondary">Avenida Constitución #1250, Colonia Centro, 64000 Cercado, Cochabamba, Bolivia</p>
                </div>
                <div className="mb-3">
                  <h6 className="fw-semibold">Contacto Directo</h6>
                  <p className="text-secondary mb-1"><i className="bi bi-telephone-fill me-2"></i>+52 (81) 1234-5678</p>
                  <p className="text-secondary"><i className="bi bi-envelope-fill me-2"></i>contacto@aquashine.bo</p>
                </div>
                <div className="mb-3">
                  <h6 className="fw-semibold">Referencias Cercanas</h6>
                  <ul className="list-unstyled text-secondary">
                    <li><i className="bi bi-signpost-split me-2"></i>A 200 metros del Parque Fundidora, frente a la Plaza Comercial "Las Américas".</li>
                    <li><i className="bi bi-bank me-2"></i>Entre la sucursal bancaria BNB y la farmacia Farmacorp.</li>
                    <li><i className="bi bi-traffic-light me-2"></i>En la esquina del semáforo de Av. Constitución y Calle Potosí.</li>
                    <li><i className="bi bi-bus-front-fill me-2"></i>Parada de autobús "Centro" a 50 metros (Rutas 1, 15 y 27).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-3"><i className="bi bi-sign-turn-right-fill me-2 text-primary"></i>Cómo Llegar</h4>
                 <div className="d-flex mb-3">
                   <div className="flex-shrink-0 me-3">
                     <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                       <i className="bi bi-arrow-down-right-circle"></i>
                     </div>
                   </div>
                   <div className="flex-grow-1">
                     <h6 className="fw-semibold">Desde el norte de la ciudad:</h6>
                     <p className="text-secondary">Tome la Av. Universidad hacia el sur hasta llegar a Av. Constitución. Gira a la derecha y avanza 4 cuadras hasta encontrar nuestro local a mano derecha.</p>
                   </div>
                 </div>
                 <div className="d-flex mb-3">
                   <div className="flex-shrink-0 me-3">
                     <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                       <i className="bi bi-arrow-up-right-circle"></i>
                     </div>
                   </div>
                   <div className="flex-grow-1">
                     <h6 className="fw-semibold">Desde el sur:</h6>
                     <p className="text-secondary">Tome la Av. Morones Prieto hacia el centro, gira a la izquierda en Calle Potosí y avanza hasta Av. Constitución. Nuestro local está en la esquina.</p>
                   </div>
                 </div>
                 <div className="d-flex">
                   <div className="flex-shrink-0 me-3">
                     <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                        <i className="bi bi-bus-front-fill"></i>
                     </div>
                   </div>
                   <div className="flex-grow-1">
                     <h6 className="fw-semibold">En transporte público:</h6>
                     <p className="text-secondary">Toma las rutas 1, 15 o 27 y baja en la parada "Centro". Camina 50 metros hacia el oeste y encontrarás nuestro local.</p>
                   </div>
                 </div>
                 <div className="mt-4 d-flex gap-2">
                    <button className="btn btn-primary"><i className="bi bi-compass me-2"></i>Obtener Indicaciones</button>
                    <button className="btn btn-outline-secondary" onClick={() => navigate('/horarios')}><i className="bi bi-clock-history me-2"></i>Horarios de Atención</button>
                 </div>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold mb-3"><i className="bi bi-p-square-fill me-2 text-primary"></i>Estacionamiento y Accesibilidad</h4>
                <ul className="list-unstyled text-secondary">
                  <li className="mb-2"><i className="bi bi-car-front-fill me-2"></i>Contamos con estacionamiento gratuito para clientes con capacidad para 15 vehículos.</li>
                  <li className="mb-2"><i className="bi bi-universal-access me-2"></i>Instalaciones con accesibilidad para personas con movilidad reducida.</li>
                  <li><i className="bi bi-bicycle me-2"></i>Estacionamiento para bicicletas disponible en la entrada principal.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3"><i className="bi bi-map-fill me-2 text-primary"></i>Mapa de Ubicación</h5>
                <div className="ratio ratio-4x3">
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
                 <div className="d-grid mt-3">
                    <a href="https://www.google.com/maps/dir/?api=1&destination=-17.38942398807841,-66.1569996851226" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <i className="bi bi-pin-map-fill me-2"></i>Ver mapa interactivo
                    </a>
                </div>
              </div>
            </div>
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3"><i className="bi bi-image-fill me-2 text-primary"></i>Nuestra Fachada</h5>
                <img src="https://via.placeholder.com/400x300.png?text=Entrada+AquaShine" alt="Fachada del Car Wash" className="img-fluid rounded mb-2" />
                <p className="text-secondary small">Nuestra fachada es fácilmente reconocible por su moderno diseño y colores corporativos.</p>
              </div>
            </div>
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3"><i className="bi bi-camera-fill me-2 text-primary"></i>Vista desde la Avenida</h5>
                <img src="https://via.placeholder.com/400x300.png?text=Vista+desde+la+calle" alt="Vista desde la avenida" className="img-fluid rounded mb-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesDeLocalizacionPage; 