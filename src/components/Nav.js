import { NavLink, Link } from 'react-router-dom';

const nav = () => (
  <nav>
    <span>Space Travelers Hub</span>
    <ul>
      <li>
        <Link className="link-nav" to="/">Rockets</Link>
      </li>
      <li>
        <NavLink to="/Missions" className="link-nav">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/Profile" className="link-nav">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default nav;
