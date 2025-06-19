import React from 'react';
import { useNavigate } from 'react-router-dom';

const MapaInteractivoPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-vh-100 py-5">
      <div className="container">
        <h2 className="fw-bold mb-2">Nuestra Ubicación</h2>
        <div className="text-secondary mb-4">Encuentra nuestro centro de lavado de autos fácilmente con nuestro mapa interactivo</div>
        <div className="row g-4 mb-4">
          <div className="col-12 col-lg-8">
            <div className="ratio ratio-16x9 rounded shadow-sm mb-3" style={{minHeight: 320}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.726964899887!2d-63.18054768467744!3d-17.7833192878577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7e2b1e7e2b1%3A0x7e2b1e7e2b1e7e2b!2sCar%20Wash!5e0!3m2!1ses-419!2sbo!4v1687040000000!5m2!1ses-419!2sbo"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Carwash"
              ></iframe>
            </div>
            <div className="d-flex gap-2 mb-3">
              <button className="btn btn-dark" onClick={() => navigate('/detalles')}><i className="bi bi-geo-alt me-1"></i>Cómo llegar</button>
              <button className="btn btn-outline-dark"><i className="bi bi-share me-1"></i>Compartir ubicación</button>
              <button className="btn btn-outline-dark"><i className="bi bi-printer me-1"></i>Imprimir mapa</button>
            </div>
          </div>
          <div className="col-12 col-lg-4 d-flex flex-column gap-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="fw-bold mb-2"><i className="bi bi-info-circle me-2"></i>Información de contacto</div>
                <div className="mb-2"><i className="bi bi-geo-alt me-2"></i><b>Dirección</b><br/>Av. Principal 123, Ciudad<br/><a href="#" onClick={(e) => { e.preventDefault(); navigate('/detalles'); }} className="small">Ver detalles</a></div>
                <div className="mb-2"><i className="bi bi-telephone me-2"></i><b>Teléfono</b><br/>+123 456 7890</div>
                <div><i className="bi bi-clock me-2"></i><b>Horario</b><br/>Lunes a Sábado: 8:00 - 20:00<br/>Domingo: 9:00 - 18:00<br/><a href="#" onClick={(e) => { e.preventDefault(); navigate('/horarios'); }} className="small">Ver horario completo</a></div>
              </div>
            </div>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="fw-bold mb-2"><i className="bi bi-building me-2"></i>Nuestras instalaciones</div>
                <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80" alt="Instalaciones Carwash" className="img-fluid rounded mb-2" />
                <a href="#" className="small d-block mb-2">Ver más fotos</a>
                <ul className="list-unstyled mb-0">
                  <li><i className="bi bi-check-circle text-success me-2"></i>5 bahías de lavado</li>
                  <li><i className="bi bi-wifi text-info me-2"></i>Zona de espera con WiFi</li>
                  <li><i className="bi bi-cup-hot text-warning me-2"></i>Cafetería</li>
                  <li><i className="bi bi-car-front text-primary me-2"></i>Estacionamiento gratuito</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h4 className="fw-bold mb-3">Cómo llegar</h4>
        <div className="row g-3 mb-5">
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="fw-bold mb-2"><i className="bi bi-car-front me-2"></i>En coche</div>
                <div className="text-secondary small">Desde el centro de la ciudad, tome la Avenida Principal dirección norte. Encontrará nuestra local a 2 km a mano derecha, justo después del centro comercial.<br/>Disponemos de estacionamiento gratuito para clientes.</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="fw-bold mb-2"><i className="bi bi-bus-front me-2"></i>En transporte público</div>
                <div className="text-secondary small">Las líneas de autobús 12, 34 y 56 tienen parada a 100 metros de nuestro local (parada "Centro Comercial").<br/>La estación de metro más cercana es "Avenida Central", a 10 minutos a pie.</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="fw-bold mb-2"><i className="bi bi-bicycle me-2"></i>En bicicleta</div>
                <div className="text-secondary small">Hay un carril bici que conecta el centro de la ciudad con nuestra ubicación.<br/>Disponemos de aparcamiento para bicicletas vigilado.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapaInteractivoPage; 