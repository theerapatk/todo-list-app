import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.todos,
      isDialogActive: false
    };
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }

  handleAddButtonClick() {
  }

  render() {
    return (
      <div>
        <TodoHeader onClickAddBotton={this.handleAddButtonClick}/>
        <TodoDialog isDialogActive={this.state.isDialogActive}/>
        <div>
          {'Add #' + (this.state.items.length + 1)}
        </div>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

module.exports = TodoApp;