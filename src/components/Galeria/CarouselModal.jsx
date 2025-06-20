import React, { useState } from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
    title: 'Pulido Profesional - Audi R8',
    desc: 'Este Audi R8 recibió nuestro tratamiento de pulido profesional de tres etapas, eliminando micro-rayones y devolviendo un acabado espejo a la pintura. El proceso incluye compuesto de corte, pulido fino y sellado cerámico para una protección duradera.',
    date: '15 de octubre, 2023',
    views: 243,
    comments: 18,
    categories: ['Pulido Profesional', 'Autos Deportivos', 'Tratamientos Cerámicos', 'Acabados Premium', 'Antes y Después'],
  },
  {
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    title: 'Limpieza Interior - SUV Familiar',
    desc: 'Renovación completa del interior con limpieza profunda de tapicería, tratamiento de cuero y desinfección.',
    date: '10 de octubre, 2023',
    views: 180,
    comments: 12,
    categories: ['Limpieza Interior', 'SUV', 'Familiares'],
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Encerado Premium - BMW Serie 3',
    desc: 'Aplicación de cera premium para un brillo intenso y protección contra los elementos.',
    date: '5 de octubre, 2023',
    views: 120,
    comments: 5,
    categories: ['Encerado', 'BMW', 'Acabados Premium'],
  },
  {
    src: 'https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=800&q=80',
    title: 'Lavado Exterior - Ford Mustang',
    desc: 'Lavado exterior completo con espuma activa y secado a mano.',
    date: '1 de octubre, 2023',
    views: 98,
    comments: 2,
    categories: ['Lavado Exterior', 'Ford', 'Autos Deportivos'],
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    title: 'Tratamiento Cerámico - Tesla Model S',
    desc: 'Protección cerámica avanzada para un acabado duradero y fácil de limpiar.',
    date: '28 de septiembre, 2023',
    views: 210,
    comments: 9,
    categories: ['Tratamientos Cerámicos', 'Tesla', 'Acabados Premium'],
  },
];

export default function CarouselModal({ open, onClose }) {
  const [current, setCurrent] = useState(2); // Centrado en la imagen 3 como ejemplo
  if (!open) return null;

  const img = images[current];

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Header y Breadcrumbs */}
        <div style={styles.header}>
          <span style={styles.breadcrumbs}>
            Inicio {'>'} <b>Vista de Carrusel</b>
          </span>
          <button style={styles.closeBtn} onClick={onClose}>×</button>
        </div>
        {/* Título y descripción */}
        <h2 style={styles.title}>Galería de Servicios Premium</h2>
        <p style={styles.subtitle}>
          Explore nuestra colección de trabajos destacados. Deslice horizontalmente para ver cada imagen en detalle.
        </p>
        {/* Navegación y contador */}
        <div style={styles.navRow}>
          <button
            style={styles.navBtn}
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
          >Anterior</button>
          <span style={styles.counter}>{current + 1} de {images.length} imágenes</span>
          <button
            style={styles.navBtn}
            onClick={() => setCurrent((c) => Math.min(images.length - 1, c + 1))}
            disabled={current === images.length - 1}
          >Siguiente</button>
        </div>
        {/* Imagen principal */}
        <div style={styles.mainImgBox}>
          <img src={img.src} alt={img.title} style={styles.mainImg} />
        </div>
        {/* Info de la imagen */}
        <div style={styles.infoBox}>
          <div style={{fontWeight: 'bold', fontSize: '1.08rem', marginBottom: 4}}>{img.title}</div>
          <div style={{fontSize: '0.97rem', color: '#444', marginBottom: 8}}>{img.desc}</div>
          <div style={styles.infoMeta}>
            <span>📅 {img.date}</span>
            <span>{img.views}</span>
            <span>{img.comments}</span>
            <span style={{color: '#0077cc', cursor: 'pointer'}}>Compartir</span>
          </div>
        </div>
        {/* Miniaturas */}
        <div style={styles.thumbsRow}>
          {images.map((im, idx) => (
            <div
              key={idx}
              style={{
                ...styles.thumbBox,
                border: idx === current ? '2px solid #00A8FF' : '1.5px solid #ccc',
                boxShadow: idx === current ? '0 0 0 2px #E6F0FF' : 'none',
              }}
              onClick={() => setCurrent(idx)}
            >
              <img src={im.src} alt={im.title} style={styles.thumbImg} />
            </div>
          ))}
        </div>
        {/* Categorías relacionadas */}
        <div style={styles.catsBox}>
          <div style={{fontWeight: 500, marginBottom: 6}}>Categorías Relacionadas</div>
          <div style={styles.catsRow}>
            {img.categories.map((cat, i) => (
              <span key={i} style={styles.cat}>{cat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    background: 'rgba(0,0,0,0.18)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 0, margin: 0,
  },
  modal: {
    background: '#fff', borderRadius: 10, boxShadow: '0 4px 32px rgba(0,0,0,0.13)',
    width: '90vw', maxWidth: 900, minHeight: 600, padding: '32px 32px 18px 32px', position: 'relative',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  header: {
    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8,
  },
  breadcrumbs: {
    color: '#222', fontSize: '1rem',
  },
  closeBtn: {
    background: 'none', border: 'none', fontSize: 28, cursor: 'pointer', color: '#888',
    fontWeight: 'bold', lineHeight: 1, padding: 0, marginLeft: 12,
  },
  title: {
    fontSize: '1.45rem', fontWeight: 700, margin: '8px 0 0 0', color: '#222',
  },
  subtitle: {
    color: '#444', fontSize: '1.05rem', margin: '0 0 18px 0',
  },
  navRow: {
    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px 0 18px 0',
  },
  navBtn: {
    background: '#222', color: '#fff', border: 'none', borderRadius: 5, padding: '7px 18px', fontWeight: 500, fontSize: '1rem', cursor: 'pointer',
    transition: 'background 0.2s',
    outline: 'none',
    opacity: 1,
  },
  counter: {
    color: '#222', fontSize: '1.05rem', fontWeight: 500,
  },
  mainImgBox: {
    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 0 18px 0',
  },
  mainImg: {
    width: 420, height: 260, objectFit: 'cover', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  },
  infoBox: {
    background: '#f6f6f6', borderRadius: 7, padding: '16px 18px', margin: '0 0 18px 0', width: 480, maxWidth: '90vw', textAlign: 'left',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  },
  infoMeta: {
    display: 'flex', alignItems: 'center', gap: 18, fontSize: '0.97rem', color: '#666', marginTop: 6,
  },
  thumbsRow: {
    display: 'flex', gap: 12, margin: '0 0 18px 0', justifyContent: 'center',
  },
  thumbBox: {
    width: 60, height: 60, borderRadius: 7, overflow: 'hidden', cursor: 'pointer', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'border 0.2s, box-shadow 0.2s',
  },
  thumbImg: {
    width: 56, height: 56, objectFit: 'cover', borderRadius: 6,
  },
  catsBox: {
    width: '100%', margin: '18px 0 0 0',
  },
  catsRow: {
    display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center',
  },
  cat: {
    background: '#E6F0FF', color: '#00A8FF', borderRadius: 5, padding: '4px 12px', fontSize: '0.97rem', fontWeight: 500,
  },
}; 