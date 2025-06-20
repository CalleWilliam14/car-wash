import React, { useState, useEffect, useRef } from 'react';
import '../ChatBot/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [currentStep, setCurrentStep] = useState('welcome');
  const [reservationData, setReservationData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Servicios disponibles
  const services = [
    { id: 'basico', name: 'Lavado Básico', price: '50 Bs', description: 'Lavado exterior y interior básico' },
    { id: 'premium', name: 'Lavado Premium', price: '110 Bs', description: 'Lavado completo con encerado' },
    { id: 'domicilio', name: 'Servicio a Domicilio', price: 'Desde 80 Bs', description: 'Lavado en tu ubicación' }
  ];

  // Horarios disponibles
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  // Scroll automático
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Inicializar chatbot
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage('¡Bienvenido a AutoLavado! 🚗\n\nSoy AutoBot, tu asistente virtual. Estoy aquí para ayudarte con información sobre nuestros servicios, reservas y cualquier consulta que tengas.');
        setTimeout(() => {
          addBotMessage('¿En qué puedo ayudarte hoy? Puedes consultar sobre:', 'options', [
            { text: 'Servicios disponibles', value: 'services' },
            { text: 'Hacer una reserva', value: 'booking' },
            { text: 'Precios', value: 'prices' },
            { text: 'Ubicación', value: 'location' }
          ]);
        }, 1000);
      }, 500);
    }
  }, [isOpen, messages.length]);

  // Función para añadir mensajes del bot
  const addBotMessage = (text, type = 'text', options = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text,
        sender: 'bot',
        type,
        options,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 1000);
  };

  // Función para añadir mensajes del usuario
  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  // Manejar respuestas del usuario
  const handleUserResponse = (response, type = 'text') => {
    if (type === 'option') {
      addUserMessage(response.text);
      handleBotLogic(response.value);
    } else {
      addUserMessage(response);
      handleBotLogic(response);
    }
    setUserInput('');
  };

  // Lógica principal del bot
  const handleBotLogic = (input) => {
    const lowerInput = input.toLowerCase();

    switch (currentStep) {
      case 'welcome':
        if (input === 'services') {
          showServices();
        } else if (input === 'booking') {
          startBooking();
        } else if (input === 'prices') {
          showPrices();
        } else if (input === 'location') {
          showLocation();
        } else {
          handleGeneralQueries(lowerInput);
        }
        break;

      case 'booking_service':
        handleServiceSelection(input);
        break;

      case 'booking_date':
        handleDateSelection(input);
        break;

      case 'booking_time':
        handleTimeSelection(input);
        break;

      case 'booking_name':
        handleNameInput(input);
        break;

      case 'booking_phone':
        handlePhoneInput(input);
        break;

      case 'booking_email':
        handleEmailInput(input);
        break;

      default:
        handleGeneralQueries(lowerInput);
    }
  };

  // Mostrar servicios
  const showServices = () => {
    addBotMessage('¡Perfecto! Estos son nuestros servicios principales:', 'services');
    setTimeout(() => {
      addBotMessage('¿Te gustaría hacer una reserva de alguno de estos servicios?', 'options', [
        { text: 'Sí, hacer reserva', value: 'booking' },
        { text: 'Ver más información', value: 'more_info' },
        { text: 'Consultar precios', value: 'prices' }
      ]);
    }, 2000);
  };

  // Mostrar precios
  const showPrices = () => {
    addBotMessage('Estos son nuestros precios actuales:\n\n💧 Lavado Básico: 50 Bs\n✨ Lavado Premium: 110 Bs\n🏠 Servicio a Domicilio: Desde 80 Bs\n\n¡Reservando con anticipación obtienes un 10% de descuento!');
    setTimeout(() => {
      addBotMessage('¿Te gustaría hacer una reserva?', 'options', [
        { text: 'Sí, reservar ahora', value: 'booking' },
        { text: 'Ver servicios completos', value: 'services' },
        { text: 'Consultar ubicación', value: 'location' }
      ]);
    }, 1500);
  };

  // Mostrar ubicación
  const showLocation = () => {
    addBotMessage('📍 Nos encontramos en:\n\nAv. Principal 123, La Paz\nHorario: Lunes a Sábado 5:00 - 20:00\n\nTambién ofrecemos servicio a domicilio en toda la ciudad.');
    setTimeout(() => {
      addBotMessage('¿Te gustaría agendar una cita?', 'options', [
        { text: 'Reservar en sucursal', value: 'booking' },
        { text: 'Servicio a domicilio', value: 'domicilio_booking' },
        { text: 'Ver servicios', value: 'services' }
      ]);
    }, 1500);
  };

  // Iniciar proceso de reserva
  const startBooking = () => {
    setCurrentStep('booking_service');
    addBotMessage('¡Excelente! Vamos a hacer tu reserva paso a paso.\n\nPrimero, ¿qué servicio te gustaría reservar?', 'options', 
      services.map(service => ({
        text: `${service.name} - ${service.price}`,
        value: service.id
      }))
    );
  };

  // Manejar selección de servicio
  const handleServiceSelection = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setReservationData(prev => ({ ...prev, service: service.name }));
      setCurrentStep('booking_date');
      addBotMessage(`Perfecto! Has seleccionado: ${service.name} - ${service.price}\n\n${service.description}\n\nAhora, ¿qué día te gustaría agendar tu cita? (formato: DD/MM/AAAA)`);
    }
  };

  // Manejar selección de fecha
  const handleDateSelection = (date) => {
    if (isValidDate(date)) {
      setReservationData(prev => ({ ...prev, date }));
      setCurrentStep('booking_time');
      addBotMessage(`Fecha seleccionada: ${date}\n\n¿A qué hora prefieres tu cita?`, 'options',
        timeSlots.map(time => ({ text: time, value: time }))
      );
    } else {
      addBotMessage('Por favor, ingresa una fecha válida en formato DD/MM/AAAA (ejemplo: 15/11/2025)');
    }
  };

  // Manejar selección de hora
  const handleTimeSelection = (time) => {
    setReservationData(prev => ({ ...prev, time }));
    setCurrentStep('booking_name');
    addBotMessage(`Hora confirmada: ${time}\n\nAhora necesito algunos datos para completar tu reserva.\n\n¿Cuál es tu nombre completo?`);
  };

  // Manejar nombre
  const handleNameInput = (name) => {
    if (name.length >= 2) {
      setReservationData(prev => ({ ...prev, name }));
      setCurrentStep('booking_phone');
      addBotMessage(`Gracias ${name}!\n\n¿Cuál es tu número de teléfono?`);
    } else {
      addBotMessage('Por favor, ingresa tu nombre completo.');
    }
  };

  // Manejar teléfono
  const handlePhoneInput = (phone) => {
    if (isValidPhone(phone)) {
      setReservationData(prev => ({ ...prev, phone }));
      setCurrentStep('booking_email');
      addBotMessage('¿Cuál es tu correo electrónico?');
    } else {
      addBotMessage('Por favor, ingresa un número de teléfono válido.');
    }
  };

  // Manejar email y finalizar reserva
  const handleEmailInput = (email) => {
    if (isValidEmail(email)) {
      setReservationData(prev => ({ ...prev, email }));
      finishBooking();
    } else {
      addBotMessage('Por favor, ingresa un correo electrónico válido.');
    }
  };

  // Finalizar reserva
  const finishBooking = () => {
    setCurrentStep('welcome');
    const bookingId = 'CWE-' + Date.now().toString().slice(-6);
    
    addBotMessage(`🎉 ¡Reserva confirmada!\n\n📋 Resumen de tu reserva:\n\n🚗 Servicio: ${reservationData.service}\n📅 Fecha: ${reservationData.date}\n⏰ Hora: ${reservationData.time}\n👤 Cliente: ${reservationData.name}\n📱 Teléfono: ${reservationData.phone}\n📧 Email: ${reservationData.email}\n🎫 ID Reserva: ${bookingId}\n\n✅ Recibirás un email de confirmación en breve.`);
    
    setTimeout(() => {
      addBotMessage('¿Hay algo más en lo que pueda ayudarte?', 'options', [
        { text: 'Nueva reserva', value: 'booking' },
        { text: 'Ver servicios', value: 'services' },
        { text: 'Información de contacto', value: 'location' }
      ]);
    }, 3000);

    // Limpiar datos de reserva
    setReservationData({
      service: '', date: '', time: '', name: '', phone: '', email: ''
    });
  };

  // Consultas generales
  const handleGeneralQueries = (input) => {
    if (input.includes('hola') || input.includes('ayuda')) {
      addBotMessage('¡Hola! ¿En qué puedo ayudarte hoy?', 'options', [
        { text: 'Ver servicios', value: 'services' },
        { text: 'Hacer reserva', value: 'booking' },
        { text: 'Consultar precios', value: 'prices' }
      ]);
    } else if (input.includes('horario') || input.includes('hora')) {
      addBotMessage('Nuestro horario de atención es:\n📅 Lunes a Sábado: 5:00 AM - 8:00 PM\n📅 Domingos: Cerrado\n\n¿Te gustaría hacer una reserva?');
    } else if (input.includes('precio') || input.includes('costo')) {
      showPrices();
    } else {
      addBotMessage('No estoy seguro de entender tu consulta. ¿Podrías ser más específico?', 'options', [
        { text: 'Ver servicios', value: 'services' },
        { text: 'Hacer reserva', value: 'booking' },
        { text: 'Consultar precios', value: 'prices' },
        { text: 'Ubicación', value: 'location' }
      ]);
    }
  };

  // Validaciones
  const isValidDate = (date) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
  };

  const isValidPhone = (phone) => {
    const regex = /^\+?[\d\s-]{8,}$/;
    return regex.test(phone);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Manejar envío de mensaje
  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    if (userInput.trim()) {
      handleUserResponse(userInput.trim());
    }
  };

  return (
    <div className="chatbot-container">
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chatbot-float-button"
        >
          💬
        </button>
      )}

      {/* Ventana del chat */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">💬</div>
              <div className="chatbot-details">
                <div className="chatbot-name">AutoBot</div>
                <div className="chatbot-status">En línea</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close"
            >
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className="message-wrapper">
                {message.sender === 'bot' ? (
                  <div className="bot-message-container">
                    <div className="bot-avatar">💬</div>
                    <div className="bot-message-content">
                      <div className="bot-message">
                        {message.text}
                      </div>
                      <div className="message-timestamp">
                        {message.timestamp}
                      </div>

                      {/* Servicios especiales */}
                      {message.type === 'services' && (
                        <div className="services-list">
                          {services.map(service => (
                            <div key={service.id} className="service-item">
                              <div className="service-title">
                                {service.name} - {service.price}
                              </div>
                              <div className="service-description">{service.description}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Opciones */}
                      {message.options && (
                        <div className="message-options">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleUserResponse(option, 'option')}
                              className="option-button"
                            >
                              {option.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="user-message-container">
                    <div className="user-message">
                      {message.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Indicador de escritura */}
            {isTyping && (
              <div className="bot-message-container">
                <div className="bot-avatar">💬</div>
                <div className="typing-indicator">
                  AutoBot está escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-container">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
              placeholder="Escribe un mensaje..."
              className="chatbot-input"
            />
            <button
              onClick={handleSendMessage}
              className="chatbot-send-button"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;