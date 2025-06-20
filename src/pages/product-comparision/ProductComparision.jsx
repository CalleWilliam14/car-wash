import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import allProducts from '../../data/products.json';
import { useNavigate } from 'react-router-dom';
import './ProductComparision.css';

function ProductComparision() {
  const navigate = useNavigate();
  const productsLength = allProducts.length;
  const products = allProducts.slice(productsLength - 4, productsLength);

  return (
    <Container fluid className='bg-white content p-4'>
      <Row>
        <a
          className='link-primary'
          onClick={() => {
            navigate('/productos-ecologicos');
            window.scrollTo(0, 0);
          }}
          style={{
            textDecoration: 'none',
            color: '#2c3e50', // Color normal
            cursor: 'pointer',
          }}
        >
          Volver a Productos Ecol&oacute;gicos
        </a>
        <h2>Comparaci&oacute;n de Productos Ecol&oacute;gicos</h2>
        <p>Compare nuestros productos ecológicos para encontrar el que mejor se adapte a sus necesidades</p>
      </Row>

      <Row className='table-responsive'>
        <Table bordered className='customTable' style={{ tableLayout: 'fixed' }}>
          <tbody>
            <tr className='align-middle'>
              <th>Características</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div className='d-flex flex-column gap-2'>
                      <img
                        className='img-fluid'
                        src={new URL(`../../assets/images/ecological-products/${p.image}`, import.meta.url).href}
                      />
                      <div style={{ textAlign: 'center' }}>
                        <h6>{p.title}</h6>
                        <p style={{color:'#166534'}}>{p.price}</p>
                      </div>
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Volumen</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div style={{ textAlign: 'center' }}>
                      <p>{p.stock[0].capacity}</p>
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Ingredientes principales</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div className='d-flex flex-column'>
                      {
                        p.ingredients.content.slice(0, 3).map((c, i) => (
                          <span key={i}>
                            {c}
                          </span>
                        ))
                      }
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Beneficios</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div className='d-flex flex-column'>
                      {
                        p.ecologicalBenefits.slice(0, 3).map((c, i) => (
                          <span key={i}>
                            {c.title}
                          </span>
                        ))
                      }
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Impacto ambiental</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div className='d-flex justify-content-center gap-3'>
                      {
                        [...Array(5)].map((_, i) => {
                          if (i + 1 <= p.waterSaving)
                            return (<i key={i} className='bi bi-leaf-fill' style={{ color: '#22c55e' }}></i>)
                          
                          return (<i key={i} className='bi bi-leaf-fill' style={{ color: '#d1d5db' }}></i>)
                        })
                      }
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Ahorro de agua</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div className='d-flex justify-content-center gap-3'>
                      {
                        [...Array(5)].map((_, i) => {
                          if (i + 1 <= p.waterSaving)
                            return (<i key={i} className='bi bi-eyedropper' style={{ color: '#3b82f6' }}></i>)
                          
                          return (<i key={i} className='bi bi-eyedropper' style={{ color: '#d1d5db' }}></i>)
                        })
                      }
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Ideal para</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div style={{ textAlign: 'center' }}>
                      <p>{p.idealFor}</p>
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Certificaciones</th>
              {
                products.map((p, i) => (
                  <td key={i}>
                    <div className='d-flex justify-content-center gap-3'>
                      { p.certifications.map((c, i) => (
                        <i key={i} className={`bi bi-${c.icon}`} style={{ color: '#22c55e' }}></i>
                      ))
                      }
                    </div>
                  </td>
                ))
              }
            </tr>
            <tr className='align-middle'>
              <th>Valoración de usuarios</th>
              {
                products.map((p, i) => {

                  let scoreAvg = 0;
                  let productReviewsLength = p.reviews.length;

                  p.reviews.forEach(r => scoreAvg = r.score + scoreAvg);

                  scoreAvg = scoreAvg / productReviewsLength;

                  return (<td key={i}>
                    <div className='d-flex justify-content-center gap-3'>
                      {
                        [...Array(5)].map((_, i) => {
                          if (i + 1 <= scoreAvg)
                            return (<i key={i} className='bi bi-star-fill' style={{ color: '#facc15' }}></i>)

                          return (<i key={i} className='bi bi-star' style={{ color: '#facc15' }}></i>)
                        })
                      }
                    </div>
                  </td>)
                })
              }
            </tr>
            <tr className='align-middle'>
              <th>Acción</th>
              {
                products.map((_, i) => (
                  <td key={i}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <Button
                        variant='dark'
                        onClick={() => {
                          navigate(`/productos-ecologicos/${i + productsLength - 4}`)
                          window.scrollTo(0, 0);
                        }}
                      >
                        Ver detalles
                      </Button>
                    </div>
                  </td>
                ))
              }
            </tr>
          </tbody>
        </Table>
      </Row>

      <Row className='mt-10'>
        <Row>
          <h5>¿Cómo elegir el producto adecuado?</h5>
        </Row>

        <Row>
          <Col md={6}>
            <h6>Factores a considerar:</h6>

            <ul>
              <li>El <b>tipo de vehículo</b>  que posee (tamaño, color, material de la pintura)</li>
              <li>La <b>frecuencia de lavado</b> que realiza</li>
              <li>Sus <b>prioridades ambientales</b> (ahorro de agua, biodegradabilidad)</li>
              <li>El <b>nivel de protección</b> que desea para su vehículo</li>
            </ul>
          </Col>

          <Col md={6}>
            <h6>Recomendaciones:</h6>

            <ul>
              <li>Para <b>vehículos de uso diario</b>: PureClean es económico y eficiente</li>
              <li>Para <b>máxima protección</b>: NaturalWash ofrece limpieza y cera en un solo paso</li>
              <li>Para <b>vehículos de alta gama</b>: BioWash proporciona el cuidado premium que necesita</li>
              <li>Para <b>equilibrio calidad-precio</b>: EcoShine ofrece excelentes resultados a un precio razonable</li>
            </ul>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default ProductComparision;
