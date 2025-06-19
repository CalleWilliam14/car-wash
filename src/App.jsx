import './App.css'
import Navbar from './components/layout/Navbar'
import Hero from './components/Galeria/Hero'
import GalleryExplore from './components/Galeria/GalleryExplore'
import ServiceCategories from './components/Galeria/ServiceCategories'
import BeforeAfter from './components/Galeria/BeforeAfter'
import TeamSection from './components/Galeria/TeamSection'
import CallToAction from './components/Galeria/CallToAction'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GalleryExplore />
      <ServiceCategories />
      <BeforeAfter />
      <CallToAction />
      {/* Aquí irá la sección de llamada a la acción */}
      <Footer />
    </>
  )
}

export default App
