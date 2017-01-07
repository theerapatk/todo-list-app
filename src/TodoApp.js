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
      selectedItem: null
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

  handleOpenTodoDialog(e, id) {
    var selectedItem = null;
    if (e.currentTarget.classList.contains('Task-label')) {
      var newItems = this.state.items.slice();
      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].id === id) {
          newItems[i].title = e.currentTarget.textContent;
          selectedItem = Object.assign({}, newItems[i]);
          break;
        }
      }
      this.setState({items: newItems, isEditing: true});
    } else {
      this.setState({isEditing: false});
    }
    this.setState({isDialogActive: true, selectedItem: selectedItem});
  }

  handleCloseTodoDialog(newItem) {
    this.setState({isDialogActive: false});
    if (newItem != null) {
      if (this.state.isEditing === true) {
        var currentItems = this.state.items.slice();
        for (let i = 0; i < currentItems.length; i++) {
          if (currentItems[i].id === newItem.id) {
            currentItems[i] = newItem;
            break;
          }
        }
        this.setState({items: currentItems});
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

  saveToLocalStorage() {
    var todoAppData = {
      appState: {
        filterType: this.state.filterType
      },        
      todoList: this.state.items
    };
    localStorage.setItem('todoAppData', JSON.stringify(todoAppData));
  }

  render() {
    this.saveToLocalStorage();
    return (
      <div className="modal-container" style={{height: '100%'}}>
        <TodoHeader onClickAddBotton={this.handleOpenTodoDialog} />
        <TodoFilter
          filterType={this.state.filterType}
          onChange={this.handleChangeFilterType} />
        <TodoDialog
          isDialogActive={this.state.isDialogActive}
          isEditing={this.state.isEditing}
          selectedItem={this.state.selectedItem}
          onCloseDialog={this.handleCloseTodoDialog} />
        <div>
          {'Total task(s): ' + (this.state.items.length)}
        </div>
        <TodoList
          filterType={this.state.filterType}
          items={this.state.items}
          onCheckboxClick={this.handleCheckboxClick}
          onTaskClick={this.handleOpenTodoDialog} />
      </div>
    );
  }
}

module.exports = TodoApp;