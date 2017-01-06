import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DialogInput from './DialogInput';

class TodoDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableOKButton: true
    };
    this.handleDialogInputChange = this.handleDialogInputChange.bind(this);
    this.submitModal = this.submitModal.bind(this);
    this.handleDialogEnter = this.handleDialogEnter.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleDialogInputChange(key, value, disabled) {
    this[key] = value;
    this.setState({disableOKButton: disabled});
  }

  submitModal(e) {
    e.preventDefault();
    var title = this.title;
    var completed = false;
    var id = Date.now();
    if (this.props.selectedItem) {
      if (this.props.selectedItem.completed) {
        completed = true;
      }
      if (this.props.selectedItem.id) {
        id = this.props.selectedItem.id;
      }
    }
    var newItem = {
      title: title,
      completed: completed,
      id: id
    };
    this.props.onCloseDialog(newItem);
  }

  handleDialogEnter() {
    if (this.props.selectedItem && this.props.selectedItem.title.trim() !== '') {
      this.title = this.props.selectedItem.title;
      this.setState({disableOKButton: false});
    } else {
      this.title = '';
      this.setState({disableOKButton: true});
    }
  }

  handleCloseDialog() {
    this.props.onCloseDialog();
  }

  render() {
    return (
      <div>
        <Modal 
          show={this.props.isDialogActive}
          onEnter={this.handleDialogEnter}
          onHide={this.handleCloseDialog}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {(this.props.isEditing) ? 'Edit Task' : 'Add New Task'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <DialogInput
                label={'Title'}
                id={'title'}
                fieldValue={(this.props.selectedItem) ? this.props.selectedItem.title.trim() : ''} 
                onChange={this.handleDialogInputChange} />
              <Button
                disabled={this.state.disableOKButton}
                onClick={this.submitModal}>OK</Button>
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