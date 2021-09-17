import logo from './logo.svg';
import './App.css';
import sample from './background_vid.mp4'


function App() {
  return ( 
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
