import { Button, Col, Row } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

function Reviews({ productReviews, quantity=3, showAll=false, setActiveTab }) {
  const reviews = showAll ? productReviews : productReviews.slice(0, quantity);

  return (
    <Row className='gap-2'>
      <Row>
        <h4>Lo que dicen nuestros clientes</h4>
      </Row>

      <Row className='d-flex justify-content-center'>
        {
          reviews.map((review, i) => (
            <Col key={i} md={4} className='d-flex'>
              <ReviewCard review={review} /> 
            </Col>
          ))
        }
      </Row>

      { showAll ?
        (<></>) :
        (<Row className='d-flex justify-content-center'>
          <Col md={3}>
            <Button
              variant='outline-dark'
              onClick={() => setActiveTab('reviews')}
            >
              Ver todas las rese&ntilde;as
            </Button>
          </Col>
        </Row>)
      }
    </Row> 
  );
}

export default Reviews;
