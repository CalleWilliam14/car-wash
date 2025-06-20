import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {};
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    desiredDate: selectedDate || '',
    desiredTime: selectedTime || '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { bookingData: formData } });
  };


  const getServicePrice = (serviceType) => {
    switch (serviceType) {
      case 'basico': return '50 Bs';
      case 'premium': return '110 Bs';
      case 'domicilio': return 'Consultar';
      default: return '-';
    }
  };

  return (
    <div className="booking-page">
      <div className="container">
        <div className="booking-header">
          <h1>Reserva tu Lavado de Auto</h1>
          <p>Completa el formulario a continuación para programar tu servicio</p>
        </div>

        <div className="booking-content">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="fullName">Nombre completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Número de teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+591 XXX XXX XX"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Tipo de servicio</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un servicio</option>
                <option value="basico">Lavado Básico - 50 Bs</option>
                <option value="premium">Lavado Premium - 110 Bs</option>
                <option value="domicilio">Servicio a Domicilio</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="desiredDate">Fecha deseada</label>
                <input
                  type="text"
                  id="desiredDate"
                  name="desiredDate"
                  value={formData.desiredDate}
                  onChange={handleChange}
                  placeholder="DD/MM/AAAA"
                  required
                />
                <small>Ver calendario de disponibilidad</small>
              </div>
              <div className="form-group">
                <label htmlFor="desiredTime">Hora deseada</label>
                <select
                  id="desiredTime"
                  name="desiredTime"
                  value={formData.desiredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una hora</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comentarios adicionales (opcional)</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Indique cualquier información adicional que debamos conocer..."
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => navigate('/')} className="btn-cancel">
                Cancelar
              </button>
              <button type="submit" onClick={() => navigate('/payment')} className="btn-continue">
                Continuar al pago
              </button>
            </div>
          </form>

          {/* Summary Section */}
          <div className="booking-summary">
            <div className="summary-card">
              <h3>Resumen de Reserva</h3>
              <p className="summary-note">
                Completa el formulario para ver el resumen de tu reserva.
              </p>
              
              <div className="summary-details">
                <div className="summary-item">
                  <span>Servicio:</span>
                  <span>{formData.serviceType ? 
                    formData.serviceType.charAt(0).toUpperCase() + formData.serviceType.slice(1) : '-'
                  }</span>
                </div>
                <div className="summary-item">
                  <span>Fecha:</span>
                  <span>{formData.desiredDate || '-'}</span>
                </div>
                <div className="summary-item">
                  <span>Hora:</span>
                  <span>{formData.desiredTime || '-'}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-item total">
                  <span>Total estimado:</span>
                  <span>{getServicePrice(formData.serviceType)}</span>
                </div>
              </div>
            </div>

            <div className="benefits-card">
              <h4>¿Por qué elegirnos?</h4>
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="check">✓</span>
                  <span>Servicio profesional y de alta calidad</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✓</span>
                  <span>Productos ecológicos y seguros</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✓</span>
                  <span>Personal altamente capacitado</span>
                </div>
                <div className="benefit-item">
                  <span className="check">✓</span>
                  <span>Garantía de satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;