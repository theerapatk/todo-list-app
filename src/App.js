import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';
import Modal from 'react-awesome-modal';
// import AppModel from './AppModel';

class App extends Component {
  render() {
    var todos = JSON.parse(localStorage.getItem('todos')) || [];
    return (
      <TodoApp todos={todos}/>
    );
  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.todos);
    this.submitModal = this.submitModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalActive: false,
      items: [],
    };
  }

  submitModal(e) {
    e.preventDefault();
    this.setState({modalActive: false})
    var newItem = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      completed: false,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
    }));
  }

  openModal () {
    this.setState({modalActive: true});
  }

  closeModal (e) {
    e.preventDefault();
    this.setState({modalActive: false});
  }

  render() {
    return (
      <div>
        <div>
          <span className="header-element"><h3>Remiders</h3></span>
          <span className="header-element"><input type="button" value="Add" onClick={this.openModal}/></span>
        </div>
        <Modal 
          visible={this.state.modalActive}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={this.closeModal}>
          <div>
            <h3>Add New Task</h3>
            <form>
              Title:
              <input type="text" id="title" onChange={this.handleChange('title')}/><br/>
              Description:
              <input type="text" id="description" onChange={this.handleChange('description')}/><br/>
              Date:
              <input type="text" id="date" onChange={this.handleChange('date')}/><br/>
              <input type="submit" id="date" value="OK" onClick={this.submitModal}/>
              <input type="button" id="date" value="Cancel" onClick={this.closeModal}/><br/>
            </form>
          </div>
        </Modal>
        <div>
          {'Add #' + (this.state.items.length + 1)}
        </div>
        <TodoList items={this.state.items}/>
      </div>
    );
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <ListItem key={item.id} item={item}/>
        ))}
      </ul>
    );
  }
}

export default App;
