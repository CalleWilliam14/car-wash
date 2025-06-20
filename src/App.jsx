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
import CategoryPage from './components/Galeria/Categoria/CategoryPage';
import BeforeAfterPage from './components/Galeria/AntesDespues/BeforeAfterPage';
import TeamPage from './components/Galeria/NuestroEquipo/TeamPage';
import ProcessPage from './components/Galeria/Proceso/ProcessPage';
import MapaInteractivoPage from './components/Ubicacion/MapaInteractivo/MapaInteractivoPage';
import DetallesDeLocalizacionPage from './components/Ubicacion/DetallesDeLocalizacion/DetallesDeLocalizacionPage';
import HorariosDeAtencionPage from './components/Ubicacion/HorariosDeAtencion/HorariosDeAtencionPage';
import EcologicalProducts from './pages/ecological-products/EcologicalProducts'
import ProductDetails from './pages/product-details/ProductDetails'
import ProductComparision from './pages/product-comparision/ProductComparision';

import ChatBot from './components/ChatBot/ChatBot';
import Calendar from './pages/Calendar'
import Booking from './pages/Booking'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import ComentariosPage from './components/Comentarios/ComentariosPage'
import EstadoLavado from './components/EstadoLavado/EstadoLavado'
import ServiciosPage from './components/Servicios/ServiciosPage'
import DetalleEstado from './components/EstadoLavado/DetalleEstado'
import ServicioDetalle from './components/Servicios/ServicioDetalle'

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
        <Route path="/categoria" element={<CategoryPage />} />
        <Route path="/antesdespues" element={<BeforeAfterPage />} />
        <Route path="/equipo" element={<TeamPage />} />
        <Route path="/proceso" element={<ProcessPage />} />
        <Route path="/ubicacion" element={<MapaInteractivoPage />} />
        <Route path="/detalles" element={<DetallesDeLocalizacionPage />} />
        <Route path="/horarios" element={<HorariosDeAtencionPage />} />
        <Route path='/productos-ecologicos' element={<EcologicalProducts />} />
        <Route path='/productos-ecologicos/:id' element={<ProductDetails />} />
        <Route path='/comparar-productos' element={<ProductComparision />} />
        <Route path="/reserva" element={<Calendar />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path='/comentarios' element={<ComentariosPage/>}/>
        <Route path='/estado' element={<EstadoLavado/>}/>
        <Route path='/estado/:id' element={<DetalleEstado/>}/>
        <Route path='/realizamos' element={<ServiciosPage/>}/>
        <Route path='/realizamos/:id' element={<ServicioDetalle/>}/>
        
      </Routes>
      <Footer />
      <ChatBot />
    </>
  )
}

export default App
