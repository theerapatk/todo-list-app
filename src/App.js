import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp';
// import AppModel from './AppModel';

class App extends Component {
  render() {
    // var todos = JSON.parse(localStorage.getItem('appData')) || {appState:{filterType: 'all'}, todoList:[]};
    var mockData = {
      appState: {
        filterType: 'all'
      },
      todoList: [{
        title: 'test',
        completed: false,
        id: 1
      }, {
        title: 'test2',
        completed: true,
        id: 2
      }]
    }

    return (
      <TodoApp data={mockData}/>
    );
  }
}

export default App;
