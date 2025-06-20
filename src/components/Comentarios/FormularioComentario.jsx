import React, { useState } from 'react';

const FormularioComentario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('Positivo');
  const [estrellas, setEstrellas] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && comentario) {
      onSubmit({ nombre, tipo, estrellas, texto: comentario, tiempo: 'Hace un momento' });
      setNombre('');
      setComentario('');
      setEstrellas(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-comentario">
      <h4>Deja tu Comentario</h4>
      <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option>Positivo</option>
        <option>Sugerencia</option>
        <option>Servicio</option>
        <option>Instalaciones</option>
      </select>
      <div className="estrellas">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" onClick={() => setEstrellas(n)}>
            {n <= estrellas ? '★' : '☆'}
          </button>
        ))}
      </div>
      <textarea placeholder="Escribe aquí..." value={comentario} onChange={(e) => setComentario(e.target.value)} />
      <button type="submit">Publicar Comentario</button>
    </form>
  );
};

export default FormularioComentario;
