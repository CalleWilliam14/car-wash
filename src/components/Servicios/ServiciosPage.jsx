import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiciosPage.css";

import descarga from "../../assets/imagenes/descarga.jpeg";
import LCeramico from "../../assets/imagenes/LCeramico.jpg";
import LEncerado from "../../assets/imagenes/LEncerado.jpg";
import LExterior from "../../assets/imagenes/LExterior.jpg";
import LInterior from "../../assets/imagenes/LInterior.jpg";
import LPintura from "../../assets/imagenes/LPintura.jpg";
import LInteriorP from "../../assets/imagenes/LInteriorP.jpg";
import LMotor from "../../assets/imagenes/LMotor.jpg";
import LExpress from "../../assets/imagenes/LExpress.jpeg";
import LFull from "../../assets/imagenes/LFull.jpg";
import LDesinfeccion from "../../assets/imagenes/LDesinfeccion.jpg";

import {
  FaStar,
  FaClock,
  FaCheckCircle,
  FaInfoCircle,
  FaShoppingCart,
} from "react-icons/fa";

export const servicios = [
  {
    id: 1,
    nombre: "Lavado Básico Exterior",
    descripcion:
      "El Lavado Básico Exterior es una opción rápida y eficiente pensada para quienes desean mantener su vehículo limpio y presentable sin invertir demasiado tiempo...",
    precio: 35,
    categoria: "Lavados Básicos",
    rating: 4,
    etiquetas: ["Más Popular"],
    imagen: descarga,
    imagenes: [descarga, LExpress, LFull],
    incluye: [
      "Lavado con agua a presión para remover suciedad superficial",
      "Aplicación de jabón espumoso biodegradable",
      "Enjuague detallado",
      "Secado manual con paños de microfibra",
    ],
    beneficios: [
      "Servicio accesible y rápido",
      "Preserva el color y brillo de la pintura",
      "Reduce el desgaste de la pintura",
      "Mejora la presentación del vehículo",
    ],
    recomendaciones: [
      "Realizar este servicio dos veces por semana",
      "Evitar estacionar bajo árboles",
      "Complementar con un encerado mensual",
      "Ideal antes de inspección visual",
    ],
    duracion: "15 a 20 minutos",
  },
  {
    id: 2,
    nombre: "Lavado Premium con Encerado",
    descripcion:
      "Este servicio combina un lavado exterior minucioso con la aplicación de una cera protectora de alta calidad...",
    precio: 130,
    categoria: "Lavados Premium",
    rating: 5,
    etiquetas: [],
    imagen: LEncerado,
    imagenes: [LEncerado, LCeramico, LPintura],
    incluye: [
      "Lavado exterior detallado",
      "Aplicación de cera protectora con polímeros",
      "Limpieza superficial de llantas y guardabarros",
      "Pulido ligero",
      "Secado con microfibra",
    ],
    beneficios: [
      "Brillo intenso y duradero",
      "Protección contra elementos agresivos",
      "Reducción de adherencia de polvo y agua",
      "Mejora visual general",
    ],
    recomendaciones: [
      "No lavar el vehículo por 24 horas",
      "Evitar exposición inmediata a la lluvia",
      "Realizar cada 3-4 semanas",
      "Complementar con limpieza interior",
    ],
    duracion: "60 a 75 minutos",
  },
  {
    id: 3,
    nombre: "Limpieza Profunda de Interiores",
    descripcion:
      "Este servicio está diseñado para renovar por completo el ambiente interior del vehículo...",
    precio: 150,
    categoria: "Interiores",
    rating: 4,
    etiquetas: [],
    imagen: LInterior,
    imagenes: [LInterior, LInteriorP, LDesinfeccion],
    incluye: [
      "Aspirado general",
      "Desmanchado manual",
      "Limpieza de techos y paneles",
      "Cepillado de áreas sucias",
      "Neutralización de olores",
    ],
    beneficios: [
      "Ambiente más saludable",
      "Eliminación de manchas",
      "Mayor confort",
      "Ideal para personas alérgicas",
    ],
    recomendaciones: [
      "Evitar usar el vehículo durante 1 hora",
      "Usar tapetes de goma",
      "Evitar consumir alimentos dentro",
      "Complementar con ozono",
    ],
    duracion: "75 a 90 minutos",
  },
  {
    id: 4,
    nombre: "Tratamiento Cerámico",
    descripcion:
      "Este servicio premium aplica un recubrimiento cerámico sobre la pintura para sellar y proteger...",
    precio: 200,
    categoria: "Tratamientos Especiales",
    rating: 5,
    etiquetas: ["Nuevo"],
    imagen: LCeramico,
    imagenes: [LCeramico, LEncerado, LPintura],
    incluye: [
      "Lavado previo profundo",
      "Descontaminación de la pintura",
      "Aplicación de recubrimiento cerámico",
      "Curado y sellado",
      "Pulido final",
    ],
    beneficios: [
      "Protección contra rayos UV y contaminantes",
      "Brillo espejo prolongado",
      "Facilita la limpieza",
      "Durabilidad de hasta 12 meses",
    ],
    recomendaciones: [
      "No lavar en los primeros 5 días",
      "Evitar sol directo por 48h",
      "Repetir anualmente",
      "Pulido previo si hay imperfecciones",
    ],
    duracion: "2 a 3 horas",
  },
  {
    id: 5,
    nombre: "Pulido y Corrección de Pintura",
    descripcion:
      "Este servicio profesional elimina rayones, marcas de agua y defectos superficiales en la pintura...",
    precio: 300,
    categoria: "Tratamientos Especiales",
    rating: 4,
    etiquetas: [],
    imagen: LPintura,
    imagenes: [LPintura, LCeramico, LMotor],
    incluye: [
      "Evaluación del estado de pintura",
      "Lavado y descontaminación",
      "Pulido en varias etapas",
      "Uso de máquinas profesionales",
      "Sellador o cera final",
    ],
    beneficios: [
      "Restaura el color original",
      "Elimina rayones ligeros",
      "Mejora la estética",
      "Ideal antes de vender",
    ],
    recomendaciones: [
      "Evitar lavado automático",
      "Mantener protegido con cera o cerámico",
      "Revisar cada 6 meses",
      "Ideal antes de venta",
    ],
    duracion: "2.5 a 3 horas",
  },
  {
    id: 6,
    nombre: "Limpieza de Motor",
    descripcion:
      "Servicio para eliminar grasa y residuos en el compartimiento del motor, usando técnicas seguras...",
    precio: 100,
    categoria: "Tratamientos Especiales",
    rating: 4,
    etiquetas: [],
    imagen: LMotor,
    imagenes: [LMotor, LPintura, LDesinfeccion],
    incluye: [
      "Cobertura de componentes eléctricos",
      "Aplicación de desengrasantes",
      "Cepillado de grasa",
      "Enjuague con presión controlada",
      "Secado con aire o paños",
    ],
    beneficios: [
      "Facilita inspección visual",
      "Mejora imagen del motor",
      "Evita acumulación de grasa",
      "Detecta problemas mecánicos",
    ],
    recomendaciones: [
      "No encender inmediatamente",
      "Verificar humedad antes de conducir",
      "Realizar cada 6 meses",
      "Evitar hacerlo en días de lluvia",
    ],
    duracion: "30 a 40 minutos",
  },
  {
    id: 7,
    nombre: "Lavado Express",
    descripcion:
      "Una solución rápida para limpiar el exterior del vehículo en menos de 20 minutos...",
    precio: 25,
    categoria: "Lavados Básicos",
    rating: 3,
    etiquetas: ["Económico"],
    imagen: LExpress,
    imagenes: [LExpress, descarga, LFull],
    incluye: [
      "Aplicación de jabón neutro",
      "Enjuague con agua a presión",
      "Secado rápido",
      "Revisión de cristales y espejos",
    ],
    beneficios: [
      "Servicio rápido y económico",
      "Evita acumulación excesiva",
      "Ideal antes de viajes cortos",
      "Reduce tiempo de espera",
    ],
    recomendaciones: [
      "No sustituye lavados completos",
      "Recomendado para autos poco usados",
      "Evitar en días de lluvia",
      "Usar como mantenimiento básico",
    ],
    duracion: "15 a 20 minutos",
  },
  {
    id: 8,
    nombre: "Desinfección con Ozono",
    descripcion:
      "Tratamiento con ozono para eliminar bacterias, virus, olores y alérgenos del interior del vehículo...",
    precio: 80,
    categoria: "Interiores",
    rating: 5,
    etiquetas: ["Recomendado"],
    imagen: LDesinfeccion,
    imagenes: [LDesinfeccion, LInterior, LInteriorP],
    incluye: [
      "Aspirado previo",
      "Generación de ozono durante 30 minutos",
      "Sellado del habitáculo",
      "Ventilación posterior",
    ],
    beneficios: [
      "Elimina virus y bacterias",
      "Neutraliza olores",
      "Mejora la calidad del aire",
      "Sin productos químicos",
    ],
    recomendaciones: [
      "Esperar 1 hora después",
      "Realizar cada 1-2 meses",
      "Complementar con limpieza interior",
      "Ventilar bien después del servicio",
    ],
    duracion: "40 a 50 minutos",
  },
  {
    id: 9,
    nombre: "Lavado Full Car",
    descripcion:
      "Servicio integral que combina limpieza exterior detallada con interior básica. Ideal para una buena presentación...",
    precio: 180,
    categoria: "Lavados Premium",
    rating: 5,
    etiquetas: [],
    imagen: LFull,
    imagenes: [LFull, descarga, LInterior],
    incluye: [
      "Lavado exterior completo",
      "Secado con microfibra",
      "Limpieza de llantas y cristales",
      "Aspirado interior",
      "Limpieza superficial de tableros",
    ],
    beneficios: [
      "Ahorro de tiempo al combinar dos servicios",
      "Mejora la presentación general",
      "Ideal para uso diario",
      "Equilibrio entre detalle y rapidez",
    ],
    recomendaciones: [
      "Realizar cada 15 días",
      "Complementar con cera",
      "Evitar comer dentro del auto",
      "Usar tapetes y ambientadores",
    ],
    duracion: "75 a 90 minutos",
  },
  {
    id: 10,
    nombre: "Interior Premium",
    descripcion:
      "Limpieza profunda y detallada de todos los elementos interiores: asientos, techos, consolas, tapizados...",
    precio: 160,
    categoria: "Interiores",
    rating: 5,
    etiquetas: [],
    imagen: LInteriorP,
    imagenes: [LInteriorP, LInterior, LDesinfeccion],
    incluye: [
      "Aspirado profundo",
      "Limpieza con vapor",
      "Desinfección de superficies",
      "Limpieza de techo y ventilaciones",
      "Aplicación de protector para telas o cuero",
    ],
    beneficios: [
      "Ambiente renovado",
      "Cuidado de materiales delicados",
      "Elimina olores y manchas",
      "Sensación de auto nuevo",
    ],
    recomendaciones: [
      "Evitar comer dentro del auto",
      "Complementar con ozono si hay mascotas",
      "Repetir cada 2 a 3 meses",
      "Usar fundas protectoras",
    ],
    duracion: "90 minutos",
  },
];
const categorias = [
  "Todos",
  "Lavados Básicos",
  "Lavados Premium",
  "Interiores",
  "Tratamientos Especiales",
];

const ServiciosPage = () => {
  const navigate = useNavigate();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  const serviciosFiltrados =
    categoriaSeleccionada === "Todos"
      ? servicios
      : servicios.filter((s) => s.categoria === categoriaSeleccionada);

  return (
    <div className="container" style={{ width: "100%" }}>
      <h2 className="titulo">Nuestros Servicios de Lavado</h2>
      <p className="descripcion">
        Selecciona cualquier servicio para ver más detalles o añadirlo al
        carrito.
      </p>

      <div className="filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`btn-filtro ${
              cat === categoriaSeleccionada ? "activo" : ""
            }`}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="servicios-lista" >
        {serviciosFiltrados.map((servicio) => (
          <div className="card-servicio">
            <div className="servicio-imagen-wrapper">
              <span className="badge">Top</span>
              <img
                src={servicio.imagen}
                alt={servicio.nombre}
                className="servicio-imagen"
              />
              <span className="precio-destacado">{servicio.precio} Bs.</span>
            </div>

            <div className="servicio-contenido">
              <div className="servicio-info">
                <h3 className="servicio-nombre">
                  {servicio.nombre}
                  {servicio.etiquetas.map((et, i) => (
                    <span key={i} className="etiqueta">
                      {et}
                    </span>
                  ))}
                </h3>
                
                <p className="servicio-descripcion">
                  <FaCheckCircle className="icono" /> {servicio.descripcion}
                </p>
                <p className="servicio-rating">
                  {Array.from({ length: servicio.rating }, (_, i) => (
                    <FaStar key={i} color="#FFD700" />
                  ))}
                  <span className="reseñas">
                    ({servicio.rating * 30} reseñas)...
                    <FaClock className="icono" />    {servicio.duracion}
                  </span>
                </p>
              </div>

              <div className="servicio-acciones">
                <button
                  onClick={() =>
                    navigate(`/realizamos/${servicio.id}`, {
                      state: { servicio },
                    })
                  }
                  className="btn-detalles"
                >
                  <FaInfoCircle className="icono-btn" /> Ver Detalles
                </button>
                <button className="btn-carrito"
                onClick={() =>
                    navigate(`/reserva/`)
                  }>
                
                  <FaShoppingCart className="icono-btn" /> Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosPage;
