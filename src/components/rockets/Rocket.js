import { PropTypes } from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import style from './rocket.module.css';

const Rocket = ({ name, imageUrl, description }) => (
  <li className={style.cardContainer}>
    <Card className={style.cardStyle}>
      <Card.Img
        variant="left"
        src={imageUrl}
        className={style.rocketImage}
      />
      <Card.Body>
        <Card.Title className={style.rocketTitle}>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button>Reserve Rocket</Button>
      </Card.Body>
    </Card>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
