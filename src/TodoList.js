import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(e, taskId) {
		this.props.onClickItemLabel(e, taskId);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
        	<ListItem key={item.id} item={item} onClick={this.handleClick}/>
        ))}
      </ul>
    );
  }
}

module.exports = TodoList;