import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Task from './Task';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, taskId) {
    this.props.onClick(e, taskId);
  }

  render() {
    const {item} = this.props

    return (
      <li>
        <Checkbox checked={this.props.item.completed}/>
        <Task item={item} onClick={this.handleClick}/>
      </li>
    );
  }
}

module.exports = ListItem;