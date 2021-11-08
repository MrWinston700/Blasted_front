import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import sample from './background_vid.mp4'
import Navbar from './components/Navbar'; 


function App() {
  return ( 
    <div className="App">
      <div id="app_head">
        <Router>
          <Navbar/>
        </Router>
        <video autoPlay muted loop id="myVideo">
          <source src={sample} type="video/mp4" />
        </video>
      </div>

      <div id="app_body">

      </div>

      <div id="app_foot">

      </div>
    </div>
  );
}

export default App;
