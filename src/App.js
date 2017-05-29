import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

var Home = () => (
  <div>To get started, edit <code>src/App.js</code> and save to reloadddd.</div>
)

var AboutUs = () => (
  <div>About Us</div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React, testt</h2>
          </div>
          <p className="App-intro">
            <Route path='/' exact component = {Home} />
            <Route path='/aboutus' component = {AboutUs} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;