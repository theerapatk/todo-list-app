import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
	constructor(props) {
    super(props);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
  }

  handleCheckboxClick(checked, id) {
    this.props.onCheckboxClick(checked, id);
  }

  handleTaskClick(e, id) {
    this.props.onTaskClick(e, id);
  }

  render() {
    const {filterType} = this.props;

    return (
      <ul>
        {this.props.items.map(item => {
          var row = [];
          if (filterType === 'completed' && item.completed === true) {
            row.push(<ListItem key={item.id} item={item} onCheckboxClick={this.handleCheckboxClick} onTaskClick={this.handleTaskClick}/>);
          } else if (filterType === 'active' && item.completed === false) {
            row.push(<ListItem key={item.id} item={item} onCheckboxClick={this.handleCheckboxClick} onTaskClick={this.handleTaskClick}/>);
          } else if (filterType === 'all') {
            row.push(<ListItem key={item.id} item={item} onCheckboxClick={this.handleCheckboxClick} onTaskClick={this.handleTaskClick}/>);
          }
          return row;
        })}
      </ul>
    );
  }
}

module.exports = TodoList;