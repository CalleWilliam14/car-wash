import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/Galeria/Hero'
import GalleryExplore from './components/Galeria/GalleryExplore'
import ServiceCategories from './components/Galeria/ServiceCategories'
import BeforeAfter from './components/Galeria/BeforeAfter'
import TeamSection from './components/Galeria/TeamSection'
import CallToAction from './components/Galeria/CallToAction'
import Footer from './components/layout/Footer'
import { Routes, Route } from 'react-router-dom';
import CarouselPage from './components/Galeria/Carousel/CarouselPage';
import MosaicPage from './components/Galeria/Mosaico/MosaicPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <GalleryExplore />
            <ServiceCategories />
            <BeforeAfter />
            <CallToAction />
          </>
        } />
        <Route path="/carrusel" element={<CarouselPage />} />
        <Route path="/mosaico" element={<MosaicPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
