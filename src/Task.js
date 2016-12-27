import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      modalActive: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClickItemLabel();
  }

  render() {
    return (
      <span>
        <span className="task-label" onClick={this.onClick}>{this.state.item.title}</span>
      </span>
    );
  }
}

module.exports = Task;