import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

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
      <div>
        <Modal 
          show={this.props.isDialogActive}
          onHide={this.handleCloseDialog}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{headerText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
            Title: {this.state.warningText}
            <input type="text" id="title" value={this.state.title || ''} onChange={this.handleChange}/><br/>
            <Button onClick={this.submitModal}>OK</Button>
            <Button onClick={this.handleCloseDialog}>Cancel</Button>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseDialog}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = TodoDialog;