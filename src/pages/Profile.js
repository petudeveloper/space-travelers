import style from './pages.module.css';

const Profile = () => (
  <div className={style.container}>
    <section className={style.section}>
      <h4>My Rockets</h4>
      <ul className={style.list}>
        <li className={style.listElement}>test</li>
        <li className={style.listElement}>test</li>
      </ul>
    </section>
    <section className={style.section}>
      <h4>My Missions</h4>
      <ul className={style.list}>
        <li className={style.listElement}>test</li>
        <li className={style.listElement}>test</li>
      </ul>
    </section>
  </div>
);

export default Profile;
