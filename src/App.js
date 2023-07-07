
import './App.css';
import Countercomponent from './component/Countercomponent';
import Headercompoent from './component/Headercompoent';
import Listcomponent from './component/Listcomponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headercompoent />
      <Router>
        <div>
          <nav>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
          </nav>
          <br>
          </br>
          <Routes>
            <Route path="/counter" element={<Countercomponent />}></Route>
            <Route path="/list" element={<Listcomponent />}></Route>
          </Routes>
        </div>
      </Router>




    </div>
  );
}

export default App;
