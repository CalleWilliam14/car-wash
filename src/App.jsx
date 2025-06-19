import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GalleryExplore from './components/GalleryExplore'
import ServiceCategories from './components/ServiceCategories'
import BeforeAfter from './components/BeforeAfter'
import TeamSection from './components/TeamSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

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
