import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const calendar = useMemo(() => {
    const calendarData = [];
    for (let day = 1; day <= 31; day++) {
      const date = new Date(2025, 9, day);
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      let availability = 0;
      if (!isWeekend) {
        availability = ((day * 3) % 7) + 1;
      }

      calendarData.push({
        day,
        date,
        availability,
        isWeekend,
        status: availability > 0 && !isWeekend ? 'available' : 'unavailable'
      });
    }
    return calendarData;
  }, []);

  const handleDateSelect = (day, status) => {
    if (status === 'available') {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      navigate('/booking', { 
        state: { 
          selectedDate: `${selectedDate} de Octubre, 2025`, 
          selectedTime 
        } 
      });
    }
  };

  const selectedDayData = calendar.find(day => day.day === selectedDate);

  return (
    <div className="calendar-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Inicio › Reserva › </span>
          <strong>Calendario de Disponibilidad</strong>
        </div>

        <div className="calendar-header">
          <h1>Selecciona una fecha y hora para tu lavado</h1>
          <p>Elige el día y horario que mejor se adapte a tu agenda. Los espacios en blanco indican disponibilidad.</p>
        </div>

        <div className="calendar-content">
          <div className="calendar-section">
            <h3 className="calendar-month">Octubre 2025</h3>
            <div className="calendar-grid">
              <div className="calendar-header-row">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                  <div key={day} className="calendar-day-header">{day}</div>
                ))}
              </div>

              {Array.from({ length: 3 }, (_, i) => (
                <div key={`empty-${i}`} className="calendar-day empty"></div>
              ))}

              {calendar.map(({ day, availability, status }) => (
                <div
                  key={day}
                  onClick={() => handleDateSelect(day, status)}
                  className={`calendar-day ${status} ${selectedDate === day ? 'selected' : ''}`}
                >
                  <div className="day-number">{day}</div>
                  {status === 'available' && (
                    <div className="availability">{availability} espacios</div>
                  )}
                  {status === 'unavailable' && (
                    <div className="unavailable-text">No disponible</div>
                  )}
                </div>
              ))}
            </div>

            <div className="calendar-legend">
              <div className="legend-item">
                <div className="legend-color selected"></div>
                <span>Seleccionado</span>
              </div>
              <div className="legend-item">
                <div className="legend-color available"></div>
                <span>Disponible</span>
              </div>
              <div className="legend-item">
                <div className="legend-color unavailable"></div>
                <span>No disponible</span>
              </div>
            </div>
          </div>

          <div className="time-section">
            <div className="time-slots">
              <h3>Horarios disponibles</h3>
              <p className="selected-date">
                {selectedDate ? `${selectedDate} de Octubre, 2025` : 'Selecciona una fecha'}
              </p>
              {selectedDayData && (
                <p className="availability-info">
                  {selectedDayData.availability} espacios disponibles
                </p>
              )}
              <div className="time-grid">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    disabled={!selectedDate}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''} ${!selectedDate ? 'disabled' : ''}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="selection-summary">
              <h4>Tu selección</h4>
              <div className="summary-item">
                <strong>Fecha:</strong> {selectedDate ? `${selectedDate} de Octubre, 2025` : '-'}
              </div>
              <div className="summary-item">
                <strong>Hora:</strong> {selectedTime || '-'}
              </div>
              {selectedDate && selectedTime && (
                <p className="discount-note">
                  Reservando con anticipación obtienes un 10% de descuento en nuestros servicios premium.
                </p>
              )}
            </div>

            <div className="action-buttons">
              <button
                onClick={handleConfirm}
                disabled={!selectedDate || !selectedTime}
                className="btn-confirm"
              >
                Confirmar selección
              </button>
            </div>

            <div className="emergency-section">
              <h4>¿Necesitas un lavado urgente?</h4>
              <p>Visita nuestras ubicaciones sin cita previa y te atenderemos lo antes posible.</p>
              <a href="#" className="emergency-link">Ver descuentos por reserva anticipada</a>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <div className="info-card">
            <h4>⏱️ Duración del servicio</h4>
            <p>Cada reserva tiene una duración aproximada de 45-60 minutos dependiendo del tipo de servicio seleccionado.</p>
          </div>
          <div className="info-card">
            <h4>📋 Política de cancelación</h4>
            <p>Puedes cancelar o reprogramar tu cita hasta 2 horas antes sin costo adicional.</p>
          </div>
          <div className="info-card">
            <h4>🎯 Descuentos especiales</h4>
            <p>Reserva con 3 días de anticipación y obtén un 10% de descuento en cualquier servicio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
