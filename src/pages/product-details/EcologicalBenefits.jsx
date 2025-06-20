import { Row, Col } from 'react-bootstrap';

function EcologicalBenefits({ product }) {
  return (
    <Row
      className='gap-2 p-3 mb-3'
      style={{
        background: '#f0fdf4',
        borderRadius: '10px',
      }}
    >
      <Row>
        <h4>Beneficios ecol&oacute;gicos</h4>
      </Row>

      <Row className='d-flex justify-content-center'>
        {
          product.ecologicalBenefits.map((e, i) => (
            <Col key={i} md={3} className='m-3'>
              <div
                className='d-flex flex-column align-items-center'
                style={{ textAlign: 'center' }}
              >
                <i
                  className={`bi bi-${e.icon}`}
                  style={{ fontSize: '5vh' }}
                ></i>
                <h5>{e.title}</h5>
                <p>{e.description}</p>
              </div>
            </Col>
          ))
        }
      </Row>
    </Row>
  );
}

export default EcologicalBenefits;
