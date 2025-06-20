import React, { useState } from 'react';
import FiltroComentarios from './FiltroComentarios';
import ComentarioCard from './ComentarioCard';
import FormularioComentario from './FormularioComentario';

const ComentariosPage = () => {
  const [comentarios, setComentarios] = useState([
    {
    id: 1,
    nombre: 'Isabella Martínez',
    tiempo: 'Hace 2 días',
    texto: 'Excelente servicio, mi coche quedó impecable. La atención fue rápida y el personal muy amable. Sin duda volveré.',
    estrellas: 5,
    tipo: 'Positivo',
  },
  {
    id: 2,
    nombre: 'Carlos Pérez',
    tiempo: 'Hace 1 día',
    texto: 'Podrían mejorar la atención al cliente. Esperé más de lo esperado y no me explicaron bien los servicios incluidos.',
    estrellas: 3,
    tipo: 'Sugerencias',
  },
  {
    id: 3,
    nombre: 'Ana Torres',
    tiempo: 'Hoy',
    texto: 'Muy buenos productos para el cuidado del auto. Compré un shampoo ecológico que dejó el acabado brillante.',
    estrellas: 4,
    tipo: 'Productos',
  },
  {
    id: 4,
    nombre: 'Luis Fernández',
    tiempo: 'Hace 4 días',
    texto: 'El lavado interior fue detallado, dejaron las alfombras como nuevas. Muy satisfecho con el resultado.',
    estrellas: 5,
    tipo: 'Positivo',
  },
  {
    id: 5,
    nombre: 'María López',
    tiempo: 'Hace 3 días',
    texto: 'El personal fue cordial, pero olvidaron limpiar los espejos laterales. Agradezco la intención, pero deben mejorar ese detalle.',
    estrellas: 3,
    tipo: 'Sugerencias',
  },
  {
    id: 6,
    nombre: 'Jorge Rivas',
    tiempo: 'Ayer',
    texto: 'Los productos que usaron tienen un aroma agradable y no dañaron la pintura. Muy recomendable para autos nuevos.',
    estrellas: 4,
    tipo: 'Productos',
  },
  {
    id: 7,
    nombre: 'Camila Suárez',
    tiempo: 'Hace 5 días',
    texto: 'Increíble experiencia. Reservé desde la web, llegué al local y todo estaba listo. Me ofrecieron café mientras esperaba.',
    estrellas: 5,
    tipo: 'Positivo',
  },
  {
    id: 8,
    nombre: 'Ricardo Gómez',
    tiempo: 'Hace 2 horas',
    texto: 'Noté que algunos rincones del vehículo no fueron bien aspirados. Aun así, el lavado exterior fue excelente.',
    estrellas: 3,
    tipo: 'Sugerencias',
  }
  ]);

  const [filtro, setFiltro] = useState('Todos');

  const handleFiltroChange = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  const comentariosFiltrados = comentarios.filter((c) =>
    filtro === 'Todos' ? true : c.tipo === filtro
  );

  const agregarComentario = (comentario) => {
    setComentarios([
      ...comentarios,
      { ...comentario, id: comentarios.length + 1 },
    ]);
  };

  return (
    <div className="container">
      <h2>Comentarios de clientes</h2>
      <p>Conoce la experiencia de nuestros usuarios y comparte la tuya</p>

      <FiltroComentarios filtroActual={filtro} onFiltroChange={handleFiltroChange} />

      <div className="comentarios-container">
        {comentariosFiltrados.map((c) => (
          <ComentarioCard key={c.id} comentario={c} />
        ))}
      </div>

      <FormularioComentario onSubmit={agregarComentario} />
    </div>
  );
};

export default ComentariosPage;
