import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DialogInput from './DialogInput';
// import DatePicker from 'react-bootstrap-date-picker';

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
    this.fieldValues[key] = value;
    this.setState({disableOKButton: disabled});
  }

  submitModal(e) {
    e.preventDefault();
    var title = this.fieldValues.title;
    var description = this.fieldValues.description;
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
      description: description,
      completed: completed,
      id: id
    };
    this.props.onCloseDialog(newItem);
  }

  handleDialogEnter() {
    this.fieldValues = {
      title: '',
      description: ''
    };

    if (this.props.isEditing === true && this.props.selectedItem) {
      this.fieldValues.title = this.props.selectedItem.title;
      this.fieldValues.description = this.props.selectedItem.description;
      this.setState({disableOKButton: false});
    } else {
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
          dialogClassName="TodoDialog-modal"
          show={this.props.isDialogActive}
          onEnter={this.handleDialogEnter}
          onHide={this.handleCloseDialog}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {(this.props.isEditing) ? `Edit Task (ID: ${this.props.selectedItem.id})` : 'Add New Task'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <DialogInput
                label={'Title'}
                id={'title'}
                fieldValue={(this.props.selectedItem && this.props.selectedItem.title) ? this.props.selectedItem.title.trim() : ''} 
                onChange={this.handleDialogInputChange} />
              <DialogInput
                label={'Description'}
                id={'description'}
                fieldValue={(this.props.selectedItem && this.props.selectedItem.description) ? this.props.selectedItem.description.trim() : ''} 
                onChange={this.handleDialogInputChange} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseDialog}>Close</Button>
            <Button
              bsStyle="primary"
              disabled={this.state.disableOKButton}
              onClick={this.submitModal}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = TodoDialog;