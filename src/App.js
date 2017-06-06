import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'

const hi = <p>Test element here - insert text</p>;

class Intro extends Component {
  render() {
    return (
        <p className="App-intro">
          Hi {this.props.name},to get started, edit <code>src/App.js</code> and save to reload.
        </p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Intro name='Dan'/>
          {hi}
        <Clock />
      </div>
    );
  }
}

export default App;