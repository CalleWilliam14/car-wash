import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaBell, FaHeadset, FaCheckCircle, FaWater, FaClock } from 'react-icons/fa';
import fondo from '../../assets/imagenes/fondo.jpeg';

export const servicios = [
  { imagen: fondo }
];

const EstadoLavado = () => {
  const [codigo, setCodigo] = useState('');
  const navigate = useNavigate();

  const handleBuscar = () => {
    if (codigo.trim()) {
      navigate(`/estado/${codigo}`);
    }
  };

  const pedidosRecientes = [
    { codigo: 'AB_1_3', cliente: 'Luis Rojas', estado: 'Lavado Interior' },
    { codigo: 'X_Z_89', cliente: 'Andrea Pérez', estado: '' },
    { codigo: 'D_F4_6', cliente: '', estado: 'Finalizado' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f2f2' }}>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Estado del Lavado</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: '#666' }}>
          Conoce en tiempo real cómo avanza el lavado de tu vehículo.
        </p>
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <Beneficio icon={<FaMapMarkerAlt size={30} color="#007bff" />} titulo="Seguimiento en Tiempo Real" />
        <Beneficio icon={<FaBell size={30} color="#007bff" />} titulo="Notificaciones de Proceso" />
        <Beneficio icon={<FaHeadset size={30} color="#007bff" />} titulo="Soporte Personalizado" />
      </section>

      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', backgroundColor: '#fff', borderRadius: '10px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ flex: 1, minWidth: '300px', padding: '1rem' }}>
          <h3 style={{ color: '#333' }}>Buscar tu Pedido</h3>
          <p style={{ color: '#666' }}>Ingresa el código de pedido que se te proporcionó al reservar.</p>
          <input
            type="text"
            placeholder="Ej: ABC123"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            style={{ padding: '0.6rem', width: '100%', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button
            onClick={handleBuscar}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              fontWeight: 'bold'
            }}
          >
            Buscar Pedido
          </button>

          {/* Pedidos recientes en formato tabla de datos */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: '#333' }}>Pedidos recientes</h4>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f8f8' }}>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Código</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Cliente</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc' }}>Estado</th>
                </tr>
              </thead>
              <tbody>
                {pedidosRecientes.map((p, i) => (
                  <tr key={i}>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.codigo}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.cliente || <em>No disponible</em>}</td>
                    <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{p.estado || <em>Sin registrar</em>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img src={fondo} alt="Buscar pedido" style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </section>

      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ color: '#333' }}>Estados más frecuentes</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <EstadoCard
            icon={<FaCheckCircle size={35} color="#28a745" />} titulo="Finalizado"
            descripcion="El servicio ha concluido con éxito. Tu vehículo está listo para ser recogido."
          />
          <EstadoCard
            icon={<FaWater size={35} color="#17a2b8" />} titulo="Lavado en Proceso"
            descripcion="Tu vehículo está actualmente siendo lavado con productos ecológicos."
          />
          <EstadoCard
            icon={<FaClock size={35} color="#ffc107" />} titulo="En Espera"
            descripcion="Tu pedido ha sido recibido y está en cola para iniciar el servicio."
          />
        </div>
      </section>
    </div>
  );
};

const Beneficio = ({ icon, titulo }) => (
  <div style={{ textAlign: 'center', maxWidth: '200px' }}>
    <div>{icon}</div>
    <h4 style={{ marginTop: '1rem', color: '#333' }}>{titulo}</h4>
  </div>
);

const EstadoCard = ({ icon, titulo, descripcion }) => (
  <div style={{
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1.5rem',
    width: '280px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  }}>
    <div style={{ marginBottom: '1rem' }}>{icon}</div>
    <h4 style={{ color: '#333' }}>{titulo}</h4>
    <p style={{ color: '#666' }}>{descripcion}</p>
  </div>
);

export default EstadoLavado;
