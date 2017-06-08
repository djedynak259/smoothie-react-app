import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Components/Clock.js';
import Toggle from './Components/Toggle.js';
import Mailbox from './Components/Mailbox.js';
import Page from './Components/Page.js';
import LoginControl from './Components/LoginControl.js';
import Greeting from './Components/Greeting.js';
import NumberList from './Components/NumberList.js';
import Blog from './Components/Blog.js';
import NameForm from './Components/NameForm.js';
import FlavorForm from './Components/FlavorForm.js';
import Reservation from './Components/Reservation.js';
import Calculator from './Components/Calculator.js';
import SignUpDialog from './Components/SignUpDialog.js';


// Constants

const hi = <p>Test element here - insert text</p>;
const messages = ['React', 'Re: React', 'Re:Re: React'];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
const numbers = [1, 2, 3, 4, 5];


class Intro extends Component {
  render() {
    return (
        <p className="App-intro">
          Hi {this.props.name},to get started, edit <code>src/App.js</code> and save to reload.
        </p>
    );
  }
}


// App

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
        <NumberList numbers={numbers}/>
        <Blog posts={posts} />
        <NameForm />
        <FlavorForm />
        <Reservation />
        <Calculator />
        <SignUpDialog />
      </div>
    );
  }
}

export default App;