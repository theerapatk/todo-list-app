import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
       <input type="checkbox" checked={this.state.checked} onClick={this.toggleCheckbox}/>
    );
  }
}

module.exports = Checkbox;