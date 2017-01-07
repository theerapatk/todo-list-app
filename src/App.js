import React, { Component } from 'react';
import './css/App.css';
import TodoApp from './TodoApp';

class App extends Component {
  render() {
    var todoAppData = JSON.parse(localStorage.getItem('todoAppData')) || {appState:{filterType: 'all'}, todoList:[]};
    if (todoAppData.appState == null) {
      todoAppData.appState = {
        filterType: 'all'
      };
    }
    if (todoAppData.todoList == null) {
      todoAppData.todoList = [];
    }
    
    // var todoAppData = {
    //   appState: {
    //     filterType: 'all'
    //   },
    //   todoList: [{
    //     title: 'test',
    //     completed: false,
    //     id: 1
    //   }, {
    //     title: 'test2',
    //     completed: true,
    //     id: 2
    //   }]
    // }

    return (
      <TodoApp data={todoAppData}/>
    );
  }
}

export default App;
