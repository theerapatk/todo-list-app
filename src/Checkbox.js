import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
       <input type="checkbox" checked={this.state.data}/>
    );
  }
}

module.exports = Checkbox;