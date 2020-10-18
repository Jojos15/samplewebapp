import React from 'react';
import './App.css';
import logo from './logo.svg';
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="./">
            <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="Home" loading="lazy" />
            Pedometer App
        </a>
        </nav>
        <div className="row h-75 align-items-center justify-content-center parent-div">
          <LandingScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
