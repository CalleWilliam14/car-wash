import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingData } = location.state || {};
  
  const [paymentMethod, setPaymentMethod] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const handleCardChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    });
  };

  const handleConfirm = () => {
    if (paymentMethod && acceptedTerms) {
      navigate('/confirmation', { state: { bookingData, paymentMethod } });
    }
  };

  const handleBack = () => {
    navigate('/booking', { state: bookingData });
  };

  return (
    <div className="payment-page">
      <div className="container">
        <div className="payment-header">
          <h1>Opciones de Pago</h1>
          <p>Seleccione su método de pago preferido para completar su reserva</p>
        </div>

        <div className="payment-content">
          {/* Payment Methods */}
          <div className="payment-methods">
            <h3>Métodos de Pago</h3>
            
            {/* Credit Card */}
            <div 
              className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="payment-option-header">
                <input
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <strong>Tarjeta de Crédito/Débito</strong>
                <div className="card-icons">
                  <span>💳</span>
                  <span>💳</span>
                  <span>💳</span>
                </div>
              </div>
              
              {paymentMethod === 'card' && (
                <div className="card-form">
                  <div className="card-input-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="1234 5678 9012 3456"
                      value={cardData.number}
                      onChange={handleCardChange}
                      className="card-number"
                    />
                    <span className="card-icon">🔒</span>
                  </div>
                  <div className="card-details">
                    <input
                      type="text"
                      name="name"
                      placeholder="Juan Pérez"
                      value={cardData.name}
                      onChange={handleCardChange}
                      className="card-name"
                    />
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/AA"
                      value={cardData.expiry}
                      onChange={handleCardChange}
                      className="card-expiry"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={handleCardChange}
                      className="card-cvv"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* PayPal */}
            <div 
              className={`payment-option ${paymentMethod === 'paypal' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <div className="payment-option-header">
                <input
                  type="radio"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <strong>PayPal</strong>
                <span className="paypal-logo">PayPal</span>
              </div>
              <p className="payment-description">
                Serás redirigido al sitio de PayPal para completar el pago de forma segura.
              </p>
            </div>

            {/* Bank Transfer */}
            <div 
              className={`payment-option ${paymentMethod === 'transfer' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('transfer')}
            >
              <div className="payment-option-header">
                <input
                  type="radio"
                  checked={paymentMethod === 'transfer'}
                  onChange={() => setPaymentMethod('transfer')}
                />
                <strong>Transferencia Bancaria</strong>
                <span>🏦</span>
              </div>
              <p className="payment-description">
                Recibirás los detalles bancarios por correo electrónico para realizar la transferencia.
              </p>
            </div>

            {/* Mobile Payment */}
            <div 
              className={`payment-option ${paymentMethod === 'mobile' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('mobile')}
            >
              <div className="payment-option-header">
                <input
                  type="radio"
                  checked={paymentMethod === 'mobile'}
                  onChange={() => setPaymentMethod('mobile')}
                />
                <strong>Pago Móvil</strong>
                <span>📱</span>
              </div>
              <p className="payment-description">
                Paga con tu dispositivo móvil de forma rápida y segura.
              </p>
            </div>

            {/* Security Info */}
            <div className="security-info">
              <h4>🔒 Información de Seguridad</h4>
              <div className="security-grid">
                <div className="security-item">
                  <strong>🔒 Pago Seguro</strong>
                  <p>Todas las transacciones están protegidas con encriptación SSL de 256 bits.</p>
                </div>
                <div className="security-item">
                  <strong>🛡️ Certificado PCI DSS</strong>
                  <p>Cumplimos con los estándares de seguridad de la industria de servicios de pago.</p>
                </div>
                <div className="security-item">
                  <strong>👤 Datos Protegidos</strong>
                  <p>No almacenamos información sensible de tarjetas de crédito en nuestros servidores.</p>
                </div>
                <div className="security-item">
                  <strong>📞 Soporte 24/7</strong>
                  <p>Nuestro equipo está disponible para ayudarte con cualquier problema de pago.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <div className="summary-card">
              <h3>Resumen de Reserva</h3>
              
              <div className="summary-details">
                <div className="summary-section">
                  <strong>Servicio:</strong>
                  <div className="service-info">Lavado Básico</div>
                </div>
                
                <div className="summary-section">
                  <strong>Fecha:</strong>
                  <div className="date-info">10 de Octubre, 2025</div>
                </div>
                
                <div className="summary-section">
                  <strong>Hora:</strong>
                  <div className="time-info">10:00 AM</div>
                </div>
                
                <div className="summary-section">
                  <strong>Vehículo:</strong>
                  <div className="vehicle-info">Sedan - Toyota Corolla</div>
                </div>
              </div>
              
              <div className="price-breakdown">
                <div className="price-item">
                  <span>Subtotal:</span>
                  <span>Bs 35.00</span>
                </div>
                <div className="price-item">
                  <span>Extras:</span>
                  <span>Bs 10.00</span>
                </div>
                <div className="price-item discount">
                  <span>Descuento: Ver promociones</span>
                  <span>Bs 5.00</span>
                </div>
                <div className="price-item">
                  <span>IVA (21%):</span>
                  <span>Bs 8.40</span>
                </div>
                <div className="price-divider"></div>
                <div className="price-item total">
                  <span>Total:</span>
                  <span>Bs 48.40</span>
                </div>
              </div>
            </div>

            <div className="terms-section">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                />
                <span>Acepto los términos y condiciones</span>
              </label>
            </div>

            <div className="action-buttons">
              <button
                onClick={handleConfirm}
                disabled={!paymentMethod || !acceptedTerms}
                className="btn-confirm-payment"
              >
                Confirmar y Pagar
              </button>
              
              <button onClick={handleBack} className="btn-back-payment">
                Volver al Formulario de Reserva
              </button>
            </div>

            <p className="secure-payment">🔒 Pago 100% seguro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;