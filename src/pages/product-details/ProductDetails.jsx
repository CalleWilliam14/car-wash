import { useNavigate, useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { Button, ButtonToolbar, Card, Col, Container, Form, InputGroup, Row, Tab, Tabs } from 'react-bootstrap';
import './ProductDetails.css';
import { useState } from 'react';
import Ingredients from './Ingredients';
import EcologicalBenefits from './EcologicalBenefits';
import Reviews from './ReviewsPreview';

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products[id];
  const productReviewsLength = product.reviews.length;
  const productStock = product.stock;
  const productReviews = product.reviews;

  let scoreAvg = 0;

  const [currentQuantity, setCurrentQuantity] = useState(productStock[0].quantity);
  const [activeTab, setActiveTab] = useState('ingredients');
  
  product.reviews.forEach(r => scoreAvg = r.score + scoreAvg);

  scoreAvg = scoreAvg / productReviewsLength;

  return (
    <Container fluid className='content'>
      <Row className='justify-content-around align-items-center'>
        <Col md={4}>
          <img
            className='img-fluid'
            src={new URL(`../../assets/images/ecological-products/${product.image}`, import.meta.url).href}
            alt={product.title}
          />
        </Col>

        <Col md={4}>
          <div>
            <h5 style={{ color: '#166534' }}>Producto Ecol&oacute;gico Certificado</h5>
            <h3>{product.title}</h3>
            <div className='d-inline-flex gap-3'>
              <div>
                {
                  [...Array(5)].map((_, i) => {
                    if (i + 1 <= scoreAvg)
                      return (<i key={i} className='bi bi-star-fill' style={{ color: '#facc15' }}></i>)
                    
                    return (<i key={i} className='bi bi-star' style={{ color: '#facc15' }}></i>)
                  })
                }
              </div>
              <p>{scoreAvg}/5 ({productReviewsLength} rese&ntilde;as)</p>
            </div>
            <h5>{product.price}</h5>
            <p>{product.description}</p>
          </div>

          <ButtonToolbar className='d-flex flex-column gap-3'>
            <div className='d-inline-flex gap-3'>
              <div>
                <Form.Label>Cantidad</Form.Label>
                <InputGroup>
                  <Button
                    variant='outline-secondary'
                    onClick={() => {
                      let value = parseInt(document.getElementById('quantityInput').value) - 1;

                      if (value >= 1) document.getElementById('quantityInput').value = value;
                    }}
                  >
                    -
                  </Button>
                  <Form.Control
                    id='quantityInput'
                    size='sm'
                    type='number'
                    defaultValue={1}
                    min={1}
                    max={currentQuantity}
                  />
                  <Button
                    variant='outline-secondary'
                    onClick={() => {
                      let value = parseInt(document.getElementById('quantityInput').value) + 1;

                      if (value <= currentQuantity) document.getElementById('quantityInput').value = value;
                    }}
                  >
                    +
                  </Button>
                </InputGroup>
              </div>

              <div>
                <Form.Label>Cantidad</Form.Label>
                <InputGroup>
                  <Form.Select
                    onChange={e => {
                      setCurrentQuantity(e.target.value);
                      document.getElementById('quantityInput').value = '1';
                    }}
                  >
                    {
                      productStock.map((r, i) => (<option key={i} value={r.quantity}>{r.capacity}</option>))
                    }
                  </Form.Select>
                </InputGroup>
              </div>
            </div>

            <Button
              variant='dark'
            >
              A&ntilde;adir al carrito
            </Button>
          </ButtonToolbar>

          <div className='d-inline-flex gap-3 m-2'>
            <div><i className='bi bi-truck'></i> Envío gratuito +10 Bs</div>
            <div><i className='bi bi-dropbox'></i> Devoluci&oacute;n en 30 d&iacute;as</div>
          </div>

          <div className='d-flex flex-column'>
            {/*<a className='link-opacity-100'>Comparar con otros productos</a>*/}
            <a
              className='link-opacity-100'
              onClick={() => {
                navigate('/productos-ecologicos');
                window.scrollTo(0, 0);
              }}
            >
              Volver a Productos Ecol&oacute;gicos
            </a>
          </div>
        </Col>
      </Row>

      <Row>
        <Tabs
          id='options'
          activeKey={activeTab}
          onSelect={(key) => setActiveTab(key)}
          style={{ marginBottom: '1rem', marginTop: '1rem' }}
        >
          <Tab eventKey='ingredients' title='Ingredientes'>
            <Ingredients product={product} />
            
            <EcologicalBenefits product={product} />
            
            <Reviews productReviews={productReviews} setActiveTab={setActiveTab} />
          </Tab>

          <Tab eventKey='ecologicalBenefits' title={'Beneficios ecol\u00f3gicos'}>
            <EcologicalBenefits product={product} />

            <Reviews productReviews={productReviews} setActiveTab={setActiveTab} />
          </Tab>
          
          <Tab eventKey='uses' title='Modos de uso'>
            <Row>
              <div>
                <h4>Modos de uso</h4>
              </div>

              <div>
                <ul>
                  {
                    product.uses.map((u, i) => (
                      <li key={i}>{u}</li>
                    ))
                  }
                </ul>
              </div>

            <Reviews productReviews={productReviews} setActiveTab={setActiveTab} />
            </Row>
          </Tab>

          <Tab eventKey='reviews' title={'Rese\u00f1as'}>
            <Reviews productReviews={productReviews} showAll />
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}

export default ProductDetails;
