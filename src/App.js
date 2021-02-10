import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
     <Navigation />
     
        <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
