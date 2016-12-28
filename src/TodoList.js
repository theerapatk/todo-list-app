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
    const {filterType} = this.props;

    return (
      <ul>
        {this.props.items.map(item => {
          var row = [];
          if (filterType === 'completed' && item.completed === true) {
            row.push(<ListItem key={item.id} item={item} onClick={this.handleClick}/>);
          } else if (filterType === 'not_completed' && item.completed === false) {
            row.push(<ListItem key={item.id} item={item} onClick={this.handleClick}/>);
          } else if (filterType === 'all') {
            row.push(<ListItem key={item.id} item={item} onClick={this.handleClick}/>);
          }
          return row;
        })}
      </ul>
    );
  }
}

module.exports = TodoList;