import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Match} from 'react-router';
import Link from 'react-router';

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

var ContactUs = () => (
  <div>Contact Us</div>
)

// var Navigation = () => {
//   return 
//   <div>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/contact">AboutUs</Link></li>
//       <li><Link to="/about">ContactUs</Link></li>
//       </ul>
//       </div>
// }

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
            <Route path='/contact' component = {ContactUs} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;

