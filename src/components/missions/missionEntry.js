import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import JoinButton from './joinButton';

const variants = {
  start: {
    rotateX: 0,
  },
  finish: {
    rotateX: 360,
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
  end: {
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
    },
  },
};

const StatusBadge = ({ status }) => (
  <>
    {status === false ? (
      <motion.p
        variants={variants}
        initial="finish"
        animate="end"
        className="badge mx-2 text-uppercase bg-secondary my-0"
      >
        Not a member
      </motion.p>
    ) : (
      <motion.p
        variants={variants}
        initial="start"
        animate="finish"
        className="badge mx-2 bg-primary my-0"
      >
        Active member
      </motion.p>
    )}
  </>
);

StatusBadge.propTypes = {
  status: PropTypes.bool.isRequired,
};

const MissionEntry = ({
  id, name, description, status,
}) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{description}</td>
    <td className="align-middle">
      <StatusBadge status={status} />
    </td>
    <td className="align-middle"><JoinButton status={status} id={id} /></td>
  </tr>
);

MissionEntry.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Not a member', 'Active member']).isRequired,
};

export default MissionEntry;
