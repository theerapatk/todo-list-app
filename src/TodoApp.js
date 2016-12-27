import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.todos,
      isDialogActive: false,
      isEditing: false,
      defaultValue: '',
      taskId: null
    };
    this.handleOpenTodoDialog = this.handleOpenTodoDialog.bind(this);
    this.handleCloseTodoDialog = this.handleCloseTodoDialog.bind(this);
  }

  handleOpenTodoDialog(e) {
    if (e.target.classList.value === 'task-label') {
      this.setState({isEditing: true, defaultValue: e.target.textContent, taskId: e.taskId});
    } else {
      this.setState({isEditing: false, defaultValue: '', taskId: null});
    }
    this.setState({isDialogActive: true});
  }

  handleCloseTodoDialog(newItem) {
    this.setState({isDialogActive: false});
    if (newItem != null) {
      if (this.state.isEditing === true) {
        var copyItems = this.state.items.slice();
        for (let i = 0; i < copyItems; i++) {
          if (copyItems[i].taskId === this.state.taskId) {
            copyItems[i] = newItem;
          }
        }
        this.setState({items: copyItems});
      } else {
        this.setState((prevState) => ({
          items: prevState.items.concat(newItem),
        }));
      }
    }
  }

  render() {
    return (
      <div>
        <TodoHeader onClickAddBotton={this.handleOpenTodoDialog}/>
        <TodoDialog
          isDialogActive={this.state.isDialogActive}
          isEditing={this.state.isEditing}
          defaultValue={this.state.defaultValue}
          onCloseDialog={this.handleCloseTodoDialog}/>
        <div>
          {'Add #' + (this.state.items.length)}
        </div>
        <TodoList items={this.state.items} onClickItemLabel={this.handleOpenTodoDialog}/>
      </div>
    );
  }
}

module.exports = TodoApp;