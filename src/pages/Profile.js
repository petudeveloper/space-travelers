import { useSelector } from 'react-redux';
import style from './pages.module.css';

const Profile = () => {
  const rockets = useSelector((store) => store.rockets);

  return (
    <div className={style.profilecontainer}>
      <section className={style.profilesection}>
        <h3>My Rockets</h3>
        <ul className={style.profilelist}>
          {
              rockets.filter(({ reserved }) => reserved).map(({ name, id }) => (
                <li key={id} className={style.profilelistElement}>
                  <p>{name}</p>
                </li>
              ))
          }
        </ul>
      </section>
      <section className={style.profilesection}>
        <h3>My Missions</h3>
        <ul className={style.profilelist}>
          <li className={style.profilelistElement}>test</li>
          <li className={style.profilelistElement}>test</li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;
