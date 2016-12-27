import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      modalActive: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.taskId = this.state.item.id;
    this.props.onClick(e);
  }

  render() {
    return (
      <span>
        <span className="task-label" onClick={this.handleClick}>{this.state.item.title}</span>
      </span>
    );
  }
}

module.exports = Task;