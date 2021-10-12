import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Rockets from './components/Rockets';
import Profile from './pages/Profile';

function App() {
  return (
    <Router className="App">
      <Nav />
      <h1>Space Travelers</h1>
      <Route exact path="/" component={Rockets} />
      <Route exact path="/Profile" component={Profile} />
    </Router>
  );
}

export default App;
