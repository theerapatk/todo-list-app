import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <ListItem key={item.id} item={item} onClickItemLabel={this.props.onClickItemLabel}/>
        ))}
      </ul>
    );
  }
}

module.exports = TodoList;