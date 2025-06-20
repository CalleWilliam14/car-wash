import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Reserva/BookingForm.css"

const BookingForm = ({ onSubmit, selectedDateTime }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
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
    if (onSubmit) {
      onSubmit({ ...formData, ...selectedDateTime });
    } else {
      navigate('/payment', { state: { bookingData: formData } });
    }
  };

  const goToCalendar = () => {
    navigate('/calendar');
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form-header">
        <h2>Reserva tu Lavado</h2>
        <p>Completa los siguientes datos para continuar con tu reserva</p>
      </div>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nombre Completo"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Número de Teléfono"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo Electrónico"
            required
          />
        </div>

        <div className="form-group">
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione el servicio</option>
            <option value="basico">Lavado Básico</option>
            <option value="premium">Lavado Premium</option>
            <option value="domicilio">Servicio a Domicilio</option>
          </select>
        </div>

        <div className="form-group date-time-group">
          <div className="date-time-display">
            <div className="selected-date">
              <strong>Fecha seleccionada:</strong>
              <span>{selectedDateTime?.date || 'No seleccionada'}</span>
            </div>
            <div className="selected-time">
              <strong>Hora seleccionada:</strong>
              <span>{selectedDateTime?.time || 'No seleccionada'}</span>
            </div>
          </div>
          <button type="button" onClick={goToCalendar} className="btn-change-datetime">
            {selectedDateTime?.date ? 'Cambiar fecha/hora' : 'Seleccionar fecha/hora'}
          </button>
        </div>

        <div className="form-group">
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Comentarios adicionales"
            rows="3"
          />
        </div>

        <button type="submit" className="btn-continue-payment">
          Continuar al Pago
        </button>
      </form>
    </div>
  );
};

export default BookingForm;