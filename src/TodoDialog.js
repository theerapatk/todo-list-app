import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class TodoDialog extends Component {
  constructor(props) {
    super(props);
    this.submitModal = this.submitModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      isDialogActive: this.props.isDialogActive
    };
  }

  closeModal (e) {
    e.preventDefault();
    this.setState({isDialogActive: false});
  }

  submitModal(e) {
    e.preventDefault();
    this.setState({isDialogActive: false})
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

  handleChange(key) {
      return function (e) {
        var state = {};
        state[key] = e.target.value;
        this.setState(state);
      }.bind(this);
    }

  render() {
    return (
      <Modal 
        visible={this.state.isDialogActive}
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
    );
  }
}

module.exports = TodoDialog;