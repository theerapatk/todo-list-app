import React, { Component } from 'react';
import Checkbox from './Checkbox';
import Task from './Task';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      completed: this.props.item.completed,
      id: this.props.item.id
    };
  }

  render() {
    return (
    	<li>
       	<Checkbox checked={this.state.completed}/><Task item={this.state.item}/>
      </li>
    );
  }
}

module.exports = ListItem;