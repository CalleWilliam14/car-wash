import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page">
      <div className="container">
        <div className="confirmation-content">
          {/* Success Icon */}
          <div className="success-icon">📧</div>
          
          {/* Main Message */}
          <div className="confirmation-header">
            <h1>¡Confirmación Enviada!</h1>
            <p className="confirmation-subtitle">
              Hemos enviado un correo electrónico de confirmación con los detalles de tu reserva.
            </p>
            <p className="confirmation-note">
              Revisa tu bandeja de entrada para ver todos los detalles.
            </p>
          </div>

          {/* Booking Details Card */}
          <div className="booking-details-card">
            <h2>Detalles de tu Reserva</h2>
            
            <div className="details-grid">
              <div className="detail-section">
                <div className="detail-header">
                  <span className="detail-icon">🚗</span>
                  <h4>Servicio Seleccionado</h4>
                </div>
                <div className="detail-badge">Lavado Básico</div>
                <p className="detail-description">Lavado exterior e interior completo</p>
              </div>
              
              <div className="detail-section">
                <div className="detail-header">
                  <span className="detail-icon">📍</span>
                  <h4>Ubicación</h4>
                </div>
                <div className="detail-badge">Carwash Express - Centro</div>
                <p className="detail-description">Av. Principal 123, Ciudad</p>
              </div>
              
              <div className="detail-section">
                <div className="detail-header">
                  <span className="detail-icon">📅</span>
                  <h4>Fecha y Hora</h4>
                </div>
                <div className="detail-badge">Lunes, 10 de Octubre, 2025</div>
                <p className="detail-description">10:00 AM</p>
              </div>
              
              <div className="detail-section">
                <div className="detail-header">
                  <span className="detail-icon">👤</span>
                  <h4>Información de Contacto</h4>
                </div>
                <div className="detail-badge">Carlos Rodríguez</div>
                <p className="detail-description">carlos.rodriguez@gmail.com</p>
              </div>
            </div>
            
            {/* Reservation Number */}
            <div className="reservation-info">
              <div className="reservation-number">
                <div className="reservation-label">
                  <strong>Número de Reserva:</strong>
                </div>
                <div className="reservation-code">#CWE-2025-00754</div>
              </div>
              <div className="reservation-actions">
                <button className="btn-calendar">Ver Calendario</button>
                <button className="btn-edit">Editar Reserva</button>
              </div>
            </div>
          </div>

          {/* Next Steps Card */}
          <div className="next-steps-card">
            <h3>¿Qué sigue?</h3>
            <p className="next-steps-intro">
              Tu reserva ha sido confirmada y está lista para el día programado. 
              Aquí hay algunos consejos para prepararte:
            </p>
            
            <div className="steps-list">
              <div className="step-item">
                <span className="step-icon">⏰</span>
                <span>Llega 10 minutos antes de la cita programada</span>
              </div>
              <div className="step-item">
                <span className="step-icon">🗑️</span>
                <span>Retira objetos personales y de valor de tu vehículo</span>
              </div>
              <div className="step-item">
                <span className="step-icon">📱</span>
                <span>Trae tu número de reserva para agilizar el proceso</span>
              </div>
            </div>
            
              <button 
                className="btn-availability" 
                onClick={() => navigate('/calendar')}
              >
                Ir al Calendario de Disponibilidad
              </button>
          </div>

          {/* Thank You Message */}
          <div className="thank-you">
            <p>Gracias por confiar en CarWash Pro.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;