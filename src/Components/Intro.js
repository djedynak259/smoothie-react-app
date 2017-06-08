import React, { Component } from 'react';

// Clock

class Intro extends Component {
  render() {
    return (
        <p className="App-intro">
          Hi {this.props.name},to get started, edit <code>src/App.js</code> and save to reload.
        </p>
    );
  }
}

export default Intro;