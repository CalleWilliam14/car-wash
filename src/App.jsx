import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EcologicalProducts from './pages/ecological-products/EcologicalProducts'
import ProductDetails from './pages/product-details/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/productos-ecologicos' element={<EcologicalProducts />} />
        <Route path='/productos-ecologicos/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
