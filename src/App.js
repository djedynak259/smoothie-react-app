import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Toggle from './Toggle.js';
import Mailbox from './Mailbox.js';
import Page from './Page.js';
import LoginControl from './LoginControl.js';
import Greeting from './Greeting.js';

const hi = <p>Test element here - insert text</p>;
const messages = ['React', 'Re: React', 'Re:Re: React'];

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
          {messages}
        <Clock />
        <Toggle />
        <Greeting isLoggedIn={false}/>
        <LoginControl />
        <Mailbox unreadMessages={messages}/>
        <Page />
      </div>
    );
  }
}

export default App;