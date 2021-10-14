import style from './pages.module.css';

const Profile = () => (
  <div className={style.profilecontainer}>
    <section className={style.profilesection}>
      <h3>My Rockets</h3>
      <ul className={style.profilelist}>
        <li className={style.profilelistElement}>test</li>
        <li className={style.profilelistElement}>test</li>
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

export default Profile;
