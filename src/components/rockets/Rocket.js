import { PropTypes } from 'prop-types';

const Rocket = ({ name, imageUrl }) => (
  <li>
    <img src={imageUrl} alt="Logo" />
    <h3>{name}</h3>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Rocket;
