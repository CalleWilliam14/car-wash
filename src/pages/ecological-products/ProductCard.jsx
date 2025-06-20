import { Button, Card } from 'react-bootstrap';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({ id, image, title, description, tags }) {
  const navigate = useNavigate();

  return (
    <Card className='cardContent'>
      <Card.Img
        variant='top'
        src={image}
        alt={title}
      />

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <div className='tags'>
        <ul>
          {
            tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))
          }
        </ul>
      </div>

      {/* <Link to={`/productos-ecologicos/${id}`}>
        <Button variant='dark'>Ver Detalles</Button>
      </Link> */}

       <Button
        variant='dark'
        onClick={() => {
          navigate(`/productos-ecologicos/${id}`);
          window.scrollTo(0, 0);
        }}
      >
        Ver Detalles
      </Button>
    </Card>
  );
}

export default ProductCard;
