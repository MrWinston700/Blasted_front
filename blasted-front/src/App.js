import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import sample from './background_vid2.mp4'
import Navbar from './components/Navbar';
import CommitmentToSafety from './components/commitmentToSafety';
import EmissionTarget from './components/emissionTarget'; 
import Fleet from './components/fleet';
import Footer from './components/footer';

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
        <CommitmentToSafety/>
        <EmissionTarget/>
        <Fleet/>
      </div>

      <div id="app_foot">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
