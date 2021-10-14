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
    dispatch(reserveRocket(id));
  };

  const cancelRocketHandler = () => {
    dispatch(cancelRocket(id));
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
            {reserved && (
            <span className={style.badge}>Reserved</span>
            )}
            {description}
          </Card.Text>

          {reserved && (
          <Button
            onClick={cancelRocketHandler}
            variant="outline-secondary"
          >
            Cancel Reservation
          </Button>
          )}

          {!reserved && (
          <Button
            onClick={reserveRocketHandler}
            variant="primary"
          >
            Reserve Rocket
          </Button>
          )}

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
