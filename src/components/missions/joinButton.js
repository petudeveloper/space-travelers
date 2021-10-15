import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import style from './missions.css';

const JoinButton = ({ status, id }) => {
  const dispatch = useDispatch();
  return (
    <div>

      {!status && (
      <Button
        className={`text-nowrap mx-3 ${style.buttonStyle}`}
        variant="outline-secondary"
        onClick={() => { dispatch(joinMission(id)); }}
      >
        Join Mission
      </Button>
      )}
      {status && (
      <Button
        className={`text-nowrap mx-3 ${style.buttonStyle}`}
        variant="outline-danger"
        onClick={() => { dispatch(leaveMission(id)); }}
      >
        Leave Mission
      </Button>
      )}
    </div>
  );
};

JoinButton.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default JoinButton;
