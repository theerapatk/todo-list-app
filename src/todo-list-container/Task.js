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
    let taskCompleted = this.props.item.completed ? 'Task-completed' : '';
    let cssClasses = `${taskCompleted} Task-label`;

    return (
      <span className={cssClasses} onClick={this.handleClick}>
        {this.props.item.title}
      </span>
    );
  }
}

module.exports = Task;