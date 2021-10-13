import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rockets from './components/rockets/Rockets';
import Profile from './pages/Profile';

function App() {
  return (
    <Router className="App">
      <Header />
      <Route exact path="/" component={Rockets} />
      <Route exact path="/Profile" component={Profile} />
    </Router>
  );
}

export default App;
