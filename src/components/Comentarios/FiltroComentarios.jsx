import React from 'react';
import './comentarios.css'
const FiltroComentarios = ({ filtroActual, onFiltroChange }) => {
  const filtros = ['Todos', 'Positivo', 'Sugerencias', 'Productos', 'Servicio', 'Instalaciones'];

  return (
    <div className="filtros">
      {filtros.map((filtro) => (
        <button
          key={filtro}
          className={`btn-filtro ${filtroActual === filtro ? 'activo' : ''}`}
          onClick={() => onFiltroChange(filtro)}
        >
          {filtro}
        </button>
      ))}
    </div>
  );
};

export default FiltroComentarios;
