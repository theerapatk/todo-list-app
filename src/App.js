import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp';
// import AppModel from './AppModel';

class App extends Component {
  render() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    return (
      <TodoApp todos={todos}/>
    );
  }
}

export default App;
