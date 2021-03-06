import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textt: 'enter'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({textt: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.textt);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.textt} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;