import React, { useState } from "react";
import "./comentarios.css";
import { FaStar, FaRegStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ComentarioCard = ({ comentario }) => {
  const [respondiendo, setRespondiendo] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  const handleResponderClick = () => {
    setRespondiendo(!respondiendo);
  };

  const handleRespuestaSubmit = (e) => {
    e.preventDefault();
    console.log(`Respuesta enviada: ${respuesta}`);
    setRespuesta("");
    setRespondiendo(false);
  };

  return (
    <div className={`card-comentario ${respondiendo ? "expandida" : ""}`}>
      <div className="info">
        <strong>{comentario.nombre}</strong>
        <span style={{color:'#cccccc'}}>{comentario.tiempo}</span>
      </div>

      <div className="estrellas" style={{ display: "flex", gap: "0.1rem" }}>
        {Array.from({ length: 5 }, (_, i) =>
          i < comentario.estrellas ? (
            <FaStar key={i} color="#FFD700" />
          ) : (
            <FaRegStar key={i} color="#ccc" />
          )
        )}
      </div>

      <p>{comentario.texto}</p>
      <div className="acciones">
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <FaThumbsUp style={{ cursor: 'pointer' }}size={20} />
          <FaThumbsDown style={{ cursor: 'pointer' }}size={20} />
        </div>
        <button onClick={handleResponderClick} className="btn-responder">
          {respondiendo ? "Cancelar" : "Responder"}
        </button>
      </div>

      {respondiendo && (
        <form className="form-respuesta" onSubmit={handleRespuestaSubmit}>
          <textarea
            placeholder="Escribe tu respuesta aquí..."
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
            rows={3}
          />
          <button type="submit">Enviar respuesta</button>
        </form>
      )}
    </div>
  );
};

export default ComentarioCard;
