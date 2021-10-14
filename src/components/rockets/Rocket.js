import { PropTypes } from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import style from './rocket.module.css';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rocket = ({
  name, imageUrl, description, id, reserved,
}) => {
  const dispatch = useDispatch();

  const reserveRocketHandler = () => {
    if (reserved) dispatch(cancelRocket(id));
    else dispatch(reserveRocket(id));
  };

  return (
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
          <Button
            onClick={reserveRocketHandler}
            variant={reserved ? 'secondary' : 'primary'}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
