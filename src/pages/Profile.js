import { shallowEqual, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';
import style from './pages.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter(({ reserved }) => reserved);
  // eslint-disable-next-line max-len
  const missions = useSelector((state) => state.missions, shallowEqual).filter(({ status }) => status === true);

  return (
    <div className={style.profilecontainer}>
      <section className={style.profilesection}>
        <h3>My Rockets</h3>
        {rockets && (
        <ul className={style.profilelist}>
          {
                      rockets.map(({ name, id }) => (
                        <li key={id} className={style.profilelistElement}>
                          <p>{name}</p>
                        </li>
                      ))
                  }
        </ul>
        )}
        {rockets.length === 0
          && (
          <Alert variant="secondary">
            <Alert.Heading>No Rockets Reserved</Alert.Heading>
            <p>
              Go to the Rockets page and reserve one.
              {' '}
              <NavLink exact to="/">Click Here </NavLink>
              {' '}
              if you want to go the Rockets page.
            </p>
          </Alert>
          )}
      </section>
      <section className={style.profilesection}>
        <h3>My Missions</h3>
        {missions && (
        <ul className={style.profilelistMission}>
          {
                      missions.map(({ id, name }) => (
                        <li key={id} className={style.profilelistElement}>
                          <p>{name}</p>
                        </li>
                      ))
                  }
        </ul>
        )}
        {missions.length === 0
          && (
          <Alert variant="secondary">
            <Alert.Heading>No Missions Reserved</Alert.Heading>
            <p>
              Go to the Missions page and reserve one.
              {' '}
              <NavLink exact to="/Missions">Click Here </NavLink>
              {' '}
              if you want to go the Missions page.
            </p>
          </Alert>
          )}
      </section>
    </div>
  );
};

export default Profile;
