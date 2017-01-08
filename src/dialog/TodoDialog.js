import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DialogInput from './DialogInput';
import DialogDatePicker from './DialogDatePicker';

class TodoDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInViewMode: true,
      disableOKButton: true
    };
    this.handleDialogInputChange = this.handleDialogInputChange.bind(this);
    this.submitModal = this.submitModal.bind(this);
    this.handleDialogEnter = this.handleDialogEnter.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleDialogInputChange(key, value) {
    this.fieldValues[key] = value;
    if (this.fieldValues.title == null || this.fieldValues.title === '') {
      this.setState({disableOKButton: true});
    } else {
      this.setState({disableOKButton: false});
    }
  }

  submitModal(e) {
    e.preventDefault();
    var title = this.fieldValues.title;
    var description = this.fieldValues.description;
    var date = this.fieldValues.date;
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
      date: date,
      completed: completed,
      id: id
    };
    this.props.onCloseDialog(newItem);
  }

  handleDialogEnter() {
    this.fieldValues = {
      title: '',
      description: '',
      date: ''
    };

    if (this.props.isEditing === true && this.props.selectedItem) {
      this.fieldValues.title = this.props.selectedItem.title;
      this.fieldValues.description = this.props.selectedItem.description;
      this.fieldValues.date = this.props.selectedItem.date;
      this.setState({disableOKButton: false});
    } else {
      this.setState({disableOKButton: true});
    }
    this.setState({isInViewMode: true});
  }

  handleEditClick() {
    this.setState({isInViewMode: !this.state.isInViewMode});
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
                isEditing={this.props.isEditing}
                isInViewMode={this.state.isInViewMode}
                onChange={this.handleDialogInputChange} />
              <DialogInput
                label={'Description'}
                id={'description'}
                fieldValue={(this.props.selectedItem && this.props.selectedItem.description) ? this.props.selectedItem.description.trim() : ''} 
                isEditing={this.props.isEditing}
                isInViewMode={this.state.isInViewMode}
                onChange={this.handleDialogInputChange} />
              <DialogDatePicker
                label={'Date'}
                fieldValue={(this.props.selectedItem && this.props.selectedItem.date) ? this.props.selectedItem.date : ''} 
                isEditing={this.props.isEditing}
                isInViewMode={this.state.isInViewMode}
                onChange={this.handleDialogInputChange} />
            </form>
          </Modal.Body>
          <Modal.Footer>
            {(this.props.isEditing) ? <Button onClick={this.handleEditClick} style={{float: 'left'}}>Edit</Button> : null}
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