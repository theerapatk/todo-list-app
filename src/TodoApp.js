import React, { Component } from 'react';
import TodoHeader from './header-and-filter/TodoHeader';
import TodoFilter from './header-and-filter/TodoFilter';
import TodoList from './todo-list-container/TodoList';
import TodoDialog from './dialog/TodoDialog';
import { Label } from 'react-bootstrap';

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
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
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

  handleDeleteButtonClick(id) {
    var newItems = this.state.items.slice();
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === id) {
        newItems.splice(i, 1); 
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
      <div className="TodoApp-container container modal-container">
        <TodoHeader headerText={'Remiders'} onClickAddBotton={this.handleOpenTodoDialog} />
        <TodoFilter
          filterType={this.state.filterType}
          onChange={this.handleChangeFilterType} />
        <TodoDialog
          isDialogActive={this.state.isDialogActive}
          isEditing={this.state.isEditing}
          selectedItem={this.state.selectedItem}
          onCloseDialog={this.handleCloseTodoDialog} />

        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-3">{'Total task(s): ' + (this.state.items.length)}</label>
              <div className="col-sm-9">
                  <Label>NOTE</Label> {'    '}
                  <label className="control-label">{'Click on task label to view or edit it'}</label>
              </div>
          </div>
        </form>

        <TodoList
          filterType={this.state.filterType}
          items={this.state.items}
          onCheckboxClick={this.handleCheckboxClick}
          onTaskClick={this.handleOpenTodoDialog}
          onDeleteButtonClick={this.handleDeleteButtonClick} />
      </div>
    );
  }
}

module.exports = TodoApp;