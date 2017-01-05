import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import TodoFilter from './TodoFilter';
import TodoList from './TodoList';
import TodoDialog from './TodoDialog';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.data.todoList,
      filterType: this.props.data.appState.filterType,
      isDialogActive: false,
      isEditing: false,
      defaultValue: '',
      taskId: null
    };
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleOpenTodoDialog = this.handleOpenTodoDialog.bind(this);
    this.handleCloseTodoDialog = this.handleCloseTodoDialog.bind(this);
    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
  }

  handleCheckboxClick(checked, id) {
    var newItems = this.state.items.slice();
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === id) {
        newItems[i].completed = checked;
        break;
      }
    }
    this.setState({items: newItems});
  }

  handleOpenTodoDialog(e, taskId) {
    if (e.target.classList.value === 'task-label') {
      this.setState({isEditing: true, defaultValue: e.target.textContent, taskId: taskId});
    } else {
      this.setState({isEditing: false, defaultValue: '', taskId: null});
    }
    this.setState({isDialogActive: true});
  }

  handleCloseTodoDialog(newItem) {
    this.setState({isDialogActive: false});
    if (newItem != null) {
      if (this.state.isEditing === true) {
        var newItems = this.state.items.slice();
        for (let i = 0; i < newItems.length; i++) {
          if (newItems[i].id === this.state.taskId) {
            newItems[i] = newItem;
            break;
          }
        }
        this.setState({items: newItems});
      } else {
        this.setState((prevState) => ({
          items: prevState.items.concat(newItem),
        }));
      }
    }
  }

  handleChangeFilterType(filterType) {
    this.setState({filterType: filterType});
  }  

  render() {
    return (
      <div className="modal-container" style={{height: 500}}>
        <TodoHeader onClickAddBotton={this.handleOpenTodoDialog}/>
        <TodoFilter filterType={this.state.filterType} onChange={this.handleChangeFilterType}/>
        <TodoDialog
          isDialogActive={this.state.isDialogActive}
          isEditing={this.state.isEditing}
          taskId={this.state.taskId}
          defaultValue={this.state.defaultValue}
          onCloseDialog={this.handleCloseTodoDialog}/>
        <div>
          {'Add #' + (this.state.items.length)}
        </div>
        <TodoList
          filterType={this.state.filterType}
          items={this.state.items}
          onCheckboxClick={this.handleCheckboxClick}
          onTaskClick={this.handleOpenTodoDialog}/>
      </div>
    );
  }
}

module.exports = TodoApp;