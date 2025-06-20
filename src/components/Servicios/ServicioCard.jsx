import React from 'react';

const ServicioCard = ({ servicio, onVerDetalle }) => {
  return (
    <div className="card-servicio">
      <div className="contenido">
        <h4>{servicio.nombre} <span className="etiqueta">{servicio.etiquetas?.[0]}</span></h4>
        <p>{servicio.descripcion}</p>
        <div className="rating">⭐ {servicio.rating}</div>
      </div>
      <div className="precio">
        <strong>{servicio.precio} Bs.</strong>
        <button onClick={onVerDetalle}>Ver Detalles</button>
        <button>Añadir al Carrito</button>
      </div>
    </div>
  );
};

export default ServicioCard;
