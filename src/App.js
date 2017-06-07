import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import Toggle from './Toggle.js';
import Mailbox from './Mailbox.js';

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
        <Clock />
        <Toggle />
        <Greeting isLoggedIn={false}/>
        <LoginControl />
        <Mailbox unreadMessages={messages}/>
      </div>
    );
  }
}


// Greeting

class UserGreeting extends React.Component {
  render () {
    return <h1>Welcome back!</h1>;
  }
}

class GuestGreeting extends React.Component {
  render () {
    return <h1>Please sign up.</h1>;
  }
}  

class Greeting extends React.Component {
  render()  {
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}


// Login Control uses two different button classes and an 
// if statement in the render

class LoginButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}  

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default App;