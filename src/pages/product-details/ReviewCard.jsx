import { Card } from "react-bootstrap";

function ReviewCard({ review }) {
  return (
    <Card className='mb-2' style={{ background: '#f5f5f5' }}>
      <Card.Body>
        <div>
          {
            [...Array(5)].map((_, i) => {
              if (i + 1 <= review.score)
                return (<i key={i} className='bi bi-star-fill' style={{ color: '#facc15' }}></i>)

              return (<i key={i} className='bi bi-star' style={{ color: '#facc15' }}></i>)
            })
          }
        </div>
        <Card.Text>{review.comment}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <div>
          <h6>{review.user}</h6>
          <p>{review.detail}</p>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default ReviewCard;
