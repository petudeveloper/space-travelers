import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ListOfRockets from './components/rockets/ListOfRockets';
import Profile from './pages/Profile';

function App() {
  return (
    <Router className="App">
      <Header />
      <Route exact path="/" component={ListOfRockets} />
      <Route exact path="/Profile" component={Profile} />
    </Router>
  );
}

export default App;
