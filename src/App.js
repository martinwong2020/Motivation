
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import About from './components/About'
import Gumball from './components/Gumball';
import Donation from './components/Donation';
import Blueprint from "./components/Blueprint";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <ul className="Nav">
            <li>
              <Link className="NavIcon" to="/">About</Link>
            </li>
            <li>
              <Link className="NavIcon" to="/gumball">Gumball</Link>
            </li>
            <li>
              <Link className="NavIcon" to="/donation">Inspire</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<About/>}></Route>
          <Route exact path="/gumball" element={<Gumball/>}></Route>
          <Route exact path="/donation" element={<Donation/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
