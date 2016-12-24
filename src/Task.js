import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class Task extends Component {
  constructor(props) {
    super(props);
    this.submitModal = this.submitModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      item: this.props.item,
      modalActive: false
    };
  }

  submitModal(e) {
    e.preventDefault();
    this.setState({
      item: {
        title: this.state.title,
        description: this.state.description,
        date: this.state.date,
        completed: false,
      },
      modalActive: false
    });
  }

  openModal () {
    this.setState({modalActive: true});
  }

  closeModal (e) {
    e.preventDefault();
    this.setState({modalActive: false});
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  render() {
    return (
      <span>
        <span className="task-label" onClick={this.openModal}>{this.state.item.title}</span>
        <Modal 
          visible={this.state.modalActive}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={this.closeModal}>
          <div>
            <h3>Add New Task</h3>
            <form>
              Title: {this.state.item.title}
              <input type="text" id="title" onChange={this.handleChange('title')}/><br/>
              Description: {this.state.item.description}
              <input type="text" id="description" onChange={this.handleChange('description')}/><br/>
              Date: {this.state.item.date}
              <input type="text" id="date" onChange={this.handleChange('date')}/><br/>
              <input type="submit" id="date" value="OK" onClick={this.submitModal}/>
              <input type="button" id="date" value="Cancel" onClick={this.closeModal}/><br/>
            </form>
          </div>
        </Modal>
      </span>
    );
  }
}

module.exports = Task;