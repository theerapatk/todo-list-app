import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <span>
        <span className="task-label" onClick={this.handleClick}>{this.props.item.title}</span>
      </span>
    );
  }
}

module.exports = Task;