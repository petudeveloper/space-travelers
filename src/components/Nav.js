import { NavLink } from 'react-router-dom';

const nav = () => (
  <nav className="navbar">
    <span>Space Travelers Hub</span>
    <ul className="list-nav">
      <li>
        <NavLink exact to="/" className="link-nav" activeClassName="active-nav">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/Missions" className="link-nav" activeClassName="active-nav">Missions</NavLink>
      </li>
      <li>
        <NavLink to="/Profile" className="link-nav" activeClassName="active-nav">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default nav;
