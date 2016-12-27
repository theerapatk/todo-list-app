import React, { Component } from 'react';
import './App.css';
import TodoApp from './TodoApp';
// import AppModel from './AppModel';

class App extends Component {
  render() {
    // var todos = JSON.parse(localStorage.getItem('todos')) || [];
    var test = [{
    		title: 'test',
    		completed: false,
    		id: 1
    	}, {
    		title: 'test2',
    		completed: true,
    		id: 2
    	}
    ];

    return (
      <TodoApp todos={test}/>
    );
  }
}

export default App;
