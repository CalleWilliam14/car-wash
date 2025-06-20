import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaStar,
  FaExclamationCircle,
  FaClock,
} from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import { servicios } from "./ServiciosPage";
import "./ServicioDetalle.css";

const ServicioDetalle = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const servicio =
    location.state?.servicio || servicios.find((s) => s.id === parseInt(id));

  if (!servicio) return <p>Servicio no encontrado</p>;

  const relacionados = servicios
    .filter((s) => s.id !== servicio.id && s.categoria === servicio.categoria)
    .slice(0, 3);

  return (
    <div className="detalle-container" style={{ margin: "30px" }}>
      <h1>Detalles del Servicio que ofrecemos</h1>
      <div className="detalle-principal">
        <div className="detalle-contenedor">
          {/* Carrusel de imágenes */}
          <div className="detalle-imagen-wrapper">
            <Carousel fade indicators={true} controls={true} interval={4000}>
              {(servicio.imagenes || [servicio.imagen]).map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 detalle-imagen"
                    src={img}
                    alt={`Imagen ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/* Información del servicio */}
          <div className="detalle-info-wrapper">
            <h2 className="detalle-titulo">{servicio.nombre}</h2>

            <p className="detalle-rating">
              {Array.from({ length: servicio.rating }, (_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
              <span style={{ marginLeft: "0.5rem" }}>
                ({servicio.rating * 30} reseñas)
              </span>
            </p>

            <p className="detalle-precio">Bs. {servicio.precio}</p>

            <div className="detalle-form-botones">
              <div className="detalle-duracion">
                <FaClock />
                <label>Duración: {servicio.duracion}</label>
              </div>

              <div className="detalle-columna">
                <label>Seleccionar fecha</label>
                <input type="date" />
              </div>

              <div className="detalle-columna">
                <label>Seleccionar hora</label>
                <input type="time" />
              </div>

              <button className="btn-reservar"
              onClick={() =>
                    navigate(`/reserva/`)
                  }>Reservar ahora</button>
            </div>
          </div>
        </div>

        {/* Descripción y detalles */}
        <div className="detalle-descripcion">
          <h3>Descripción del servicio</h3>
          <p style={{ paddingRight: "100px", paddingLeft: "30px" }}>
            {servicio.descripcion}
          </p>

          <div className="detalle-extra">
            <div className="detalle-extra-col">
              <h3>Incluye:</h3>
              <ul>
                {servicio.incluye.map((item, i) => (
                  <li key={i}>
                    <FaCheckCircle
                      style={{ color: "green", marginRight: "8px" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detalle-extra-col">
              <h3>Beneficios:</h3>
              <ul>
                {servicio.beneficios.map((item, i) => (
                  <li key={i}>
                    <FaStar style={{ color: "#fbc02d", marginRight: "6px" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3>Recomendaciones:</h3>
          <ul>
            {servicio.recomendaciones.map((item, i) => (
              <li key={i}>
                <FaExclamationCircle
                  style={{ color: "#ff5722", marginRight: "8px" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios relacionados */}
        <div className="detalle-relacionados">
          <h3 style={{ marginBottom: "1rem" }}>Servicios Relacionados</h3>
          <div className="relacionados-lista">
            {relacionados.map((rel) => (
              <div key={rel.id} className="relacionado-item">
                <img
                  src={rel.imagen}
                  alt={rel.nombre}
                  className="relacionado-img"
                />
                <div>
                  <strong>{rel.nombre}</strong>
                  <p className="detalle-rating">
                    {Array.from({ length: rel.rating }, (_, i) => (
                      <FaStar key={i} color="#FFD700" size={14} />
                    ))}
                    <span style={{ marginLeft: "0.4rem", fontSize: "0.8rem" }}>
                      ({rel.rating * 30} reseñas)
                    </span>
                  </p>
                  <p className="relacionado-descripcion">
                    {rel.descripcion.length > 60
                      ? rel.descripcion.slice(0, 57) + "..."
                      : rel.descripcion}
                  </p>
                  <p className="relacionado-precio">Bs. {rel.precio}</p>
                  <button
                    className="btn-link"
                    onClick={() =>
                      navigate(`/servicio/${rel.id}`, {
                        state: { servicio: rel },
                      })
                    }
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioDetalle;
