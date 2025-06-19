import { Col, Row } from 'react-bootstrap';

function Ingredients({ product }) {
  return (
    <Row className='gap-2 mb-3'>
      <Row>
        <h4>Ingredientes</h4>
      </Row>

      <Row>
        <Col md={6} className='mb-2'>
          <p>{product.ingredients.detail}</p>
          <ul>
            {
              product.ingredients.content.map((c, i) => (
                <li key={i}>{c}</li>
              ))
            }
          </ul>
        </Col>

        <Col
          md={6}
          className='d-flex flex-column justify-content-center mb-2'
          style={{
            background: '#f5f5f5',
            borderRadius: '10px',
          }}
        >
          <div>
            <p><b>Lo que NO contiene:</b></p>
            <ul>
              {
                product.ingredients.excluded.map((c, i) => (
                  <li key={i}>{c}</li>
                ))
              }
            </ul>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

export default Ingredients;
