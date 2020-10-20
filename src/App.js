import React from 'react';
import './App.css';
import logo from './logo.svg';
import Landing from './components/landing';
import Pedometer from './components/pedometer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" id="appElement">
        <div className="container-fluid" id="container">
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="./">
              <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="Home" loading="lazy" />
            Pedometer App
            </a>
          </nav>
          <div className="col-12">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/:name" component={Pedometer} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
