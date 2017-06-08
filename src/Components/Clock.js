import React, { Component } from 'react';

// Clock

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date().toLocaleTimeString()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date}.</h2>
      </div>
    );
  }
}

export default Clock;