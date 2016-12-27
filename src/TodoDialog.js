import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class TodoDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.defaultValue,
      warningText: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitModal = this.submitModal.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({title: nextProps.defaultValue});
  }

  handleChange(e) {
    var key = e.target.id;
    var value = e.target.value;
    this[key] = value;
    this.setState({title: e.target.value});
  }

  submitModal(e) {
    e.preventDefault();
    if (this.title == null || this.title === '') {
      this.setState({warningText: 'Required'});
      return false;
    } else {
      this.setState({warningText: ''});
    }
    var newItem = {
      title: this.title,
      completed: false,
      id: this.props.taskId || Date.now()
    };
    this.props.onCloseDialog(newItem);
  }

  handleCloseDialog() {
    this.props.onCloseDialog();
  }

  render() {
    var headerText = 'Add New Task';
    if (this.props.isEditing === true) {
      headerText = 'Edit Task';
    }

    return (
      <Modal 
        visible={this.props.isDialogActive}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={this.handleCloseDialog}>
        <div>
          <h3>{headerText}</h3>
          <form>
            Title: {this.state.warningText}
            <input type="text" id="title" value={this.state.title || ''} onChange={this.handleChange}/><br/>
            <input type="submit" id="date" value="OK" onClick={this.submitModal}/>
            <input type="button" id="date" value="Cancel" onClick={this.handleCloseDialog}/><br/>
          </form>
        </div>
      </Modal>
    );
  }
}

module.exports = TodoDialog;
// Description:
// <input type="text" id="description" onChange={this.handleChange('description')}/><br/>
// Date:
// <input type="text" id="date" onChange={this.handleChange('date')}/><br/>