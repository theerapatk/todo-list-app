import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ConfirmDialog extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleSubmitClick() {
    this.props.onSubmitDialog();
  }

  handleCloseDialog() {
    this.props.onCloseDialog();
  }

  render() {
    return (
      <div>
        <Modal 
          show={this.props.isDialogActive}
          onHide={this.handleCloseDialog}
          container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.content}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseDialog}>No</Button>
            <Button bsStyle="primary" onClick={this.handleSubmitClick}>Yes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = ConfirmDialog;