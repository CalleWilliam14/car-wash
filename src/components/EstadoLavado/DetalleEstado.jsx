import React from "react";
import { useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaClock,
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaCar,
  FaIdBadge,
  FaPalette,
  FaTools,
} from "react-icons/fa";
import "./DetalleEstado.css";
import video from '../../assets/imagenes/video.mp4';

export const servicios = [
  { video: video }
];

const procesos = [
  "Prelavado: Se eliminan residuos grandes como polvo o barro con agua a presión.",
  "Lavado Exterior: Aplicación de jabón especial y limpieza manual o automatizada.",
  "Lavado Interior: Aspirado profundo y limpieza de superficies internas.",
  "Secado: Secado con paños de microfibra o aire comprimido para evitar marcas.",
  "Finalizado: Revisión final, aplicación de aromatizante y entrega al cliente.",
];

const DetalleEstado = () => {
  const { codigo } = useParams();

  const datos = {
    tipoLavado: "Lavado Premium",
    tiempoRestante: "15 minutos",
    nroPedido: codigo,
    procesoActual: "Lavado Interior",
    tecnico: {
      nombre: "María Gutiérrez",
      experiencia: "5 años de experiencia",
      correo: "maria.g@autolavado.com",
      telefono: "+591 71234567",
      especialidad: "Lavado detallado y pulido",
    },
    vehiculo: {
      marca: "Toyota",
      modelo: "Corolla",
      placa: "ABC-1234",
      color: "Negro",
      tipo: "Sedán",
    },
  };

  const indexProcesoActual = procesos.findIndex((p) =>
    p.includes(datos.procesoActual)
  );

  return (
    <div className="estado-container" style={{backgroundColor:'white'}}>
      <h2 className="estado-titulo">Estado del Pedido: {codigo}</h2>

      <div className="estado-layout">
        <div className="estado-card">
          <h3>{datos.tipoLavado}</h3>
          <p>
            <strong>Tiempo restante:</strong> {datos.tiempoRestante}
          </p>
          <p>
            <strong>Nro. de pedido:</strong> {datos.nroPedido}
          </p>

          <div className="estado-progreso">
            <p>
              <strong>Progreso del lavado:</strong>
            </p>
            <div className="estado-progreso-barra">
              <div
                className="estado-progreso-avance"
                style={{
                  width: `${
                    ((indexProcesoActual + 1) / procesos.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          <ul className="estado-proceso-lista">
            {procesos.map((proceso, i) => {
              const completado = i < indexProcesoActual;
              const actual = i === indexProcesoActual;
              return (
                <li
                  key={proceso}
                  style={{ color: completado || actual ? "#28a745" : "#aaa" }}
                >
                  <div style={{ marginTop: "4px" }}>
                    {completado ? (
                      <FaCheckCircle color="#28a745" />
                    ) : actual ? (
                      <FaClock color="#ffc107" />
                    ) : (
                      <FaCheckCircle color="#ccc" />
                    )}
                  </div>
                  <span>{proceso}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="estado-video">
          <h3 style={{ marginBottom: "1rem" }}>Visualización del lavado</h3>
          <video controls>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>
      </div>

      <div className="estado-subcards">
        {/* Técnico asignado */}
        <div className="estado-subcard">
          <h4>
            <FaUserTie /> Técnico Asignado
          </h4>
          <p>
            <strong>Nombre:</strong> {datos.tecnico.nombre}
          </p>
          <p>
            <FaTools /> {datos.tecnico.especialidad}
          </p>
          <p>
            <FaEnvelope /> {datos.tecnico.correo}
          </p>
          <p>
            <FaPhone /> {datos.tecnico.telefono}
          </p>
          <p>🔧 {datos.tecnico.experiencia}</p>
        </div>

        {/* Detalles del vehículo */}
        <div className="estado-subcard">
          <h4>
            <FaCar /> Detalles del Vehículo
          </h4>
          <p>
            <FaIdBadge />
            <strong>Marca:</strong> {datos.vehiculo.marca}
          </p>
          <p>
            <FaIdBadge />
            <strong>Modelo:</strong> {datos.vehiculo.modelo}
          </p>
          <p>
            <FaPalette />
            <strong>Color:</strong> {datos.vehiculo.color}
          </p>
          <p>
            <FaIdBadge />
            <strong>Placa:</strong> {datos.vehiculo.placa}
          </p>
          <p>
            <FaCar />
            <strong>Tipo:</strong> {datos.vehiculo.tipo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetalleEstado;
