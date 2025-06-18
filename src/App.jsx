import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Aquí irán las demás secciones: galería, servicios, etc. */}
      <Footer />
    </>
  )
}

export default App
