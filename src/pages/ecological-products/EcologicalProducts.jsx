import { Button, Col, Container, Row } from 'react-bootstrap';
import products from '../../data/products.json';
import ProductCard from './ProductCard';
import './EcologicalProducts.css';
import { useNavigate } from 'react-router-dom';

function EcologicalProducts() {
  const navigate = useNavigate();

  return (
    <Container fluid className='content bg-white'>
      <Row className='topContent justify-content-md-center'>
        <Col md={8}>
          <h2>Productos Ecol&oacute;gicos</h2>

          <p>
            Nuestra selecci&oacute;n de productos respetuosos con el medio ambiente que utilizamos en nuestro servicio de lavado de autos, dise&ntilde;ados para cuidar tanto su veh&iacute;culo como el planeta.
          </p>

          <Button
            variant='dark'
            onClick={() => navigate('/comparar-productos')}
          >
            Comparar Impacto Ecol&oacute;gico
          </Button>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col className='listProducts'>
          {
            products.slice(0, 6).map((product, index) => (
              <ProductCard
                key={index}
                id={index}
                image={new URL(`../../assets/images/ecological-products/${product.image}`, import.meta.url).href}
                title={product.title}
                description={product.description}
                tags={product.tags}
              />
            ))
          }
        </Col>
      </Row>

      <Row className='bottomContent mt-10'>
        <Col md={6}>
          <h3>Nuestro Compromiso Ecológico</h3>

          <p>
            Todos nuestros productos est&aacute;n formulados siguiendo estrictos est&aacute;ndares ecol&oacute;gicos. Utilizamos ingredientes biodegradables, envases reciclables y procesos de fabricaci&oacute;n sostenibles.
          </p>

          <ul>
            <li>Reducción del 70% en el consumo de agua comparado con lavados tradicionales</li>
            <li>Envases 100% reciclables o fabricados con materiales reciclados</li>
            <li>Cero contaminación de aguas residuales</li>
            <li>Certificaciones ecológicas internacionales</li>
          </ul>
        </Col>

        <Col md={6}></Col>
      </Row>
    </Container>
  );
}

export default EcologicalProducts;
