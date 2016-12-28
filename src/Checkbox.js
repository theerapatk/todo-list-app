import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
       <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
    );
  }
}

module.exports = Checkbox;