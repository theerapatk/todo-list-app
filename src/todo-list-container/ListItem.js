import React, { Component } from 'react';
import { Checkbox, Button, Form } from 'react-bootstrap';
import Task from './Task';
import ConfirmDialog from '../dialog/ConfirmDialog';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	checked: this.props.item.completed,
      id: this.props.item.id,
      isDialogActive: false
    }
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleSubmitDialog = this.handleSubmitDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleCheckboxClick() {
    var checked = !this.state.checked;
    this.setState({checked: checked});
    this.props.onCheckboxClick(checked, this.state.id);
  }

  handleTaskClick(e) {
    e.preventDefault();
    this.props.onTaskClick(e, this.state.id);
  }

  handleDeleteButtonClick() {
    this.props.onDeleteButtonClick(this.state.id);
  }

  handleOpenDialog() {
    this.setState({isDialogActive: true});
  }

  handleSubmitDialog() {
    this.setState({isDialogActive: false});
    this.handleDeleteButtonClick();
  }

  handleCloseDialog() {
    this.setState({isDialogActive: false});
  }

  render() {
    const {item} = this.props

    return (
      <li className="ListItem-row">
        <Form inline>
          <Checkbox
            className="ListItem-checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxClick}>
            <Task item={item} onClick={this.handleTaskClick} />
          </Checkbox>
          <Button bsSize="small" onClick={this.handleOpenDialog}>Delete</Button>
          <ConfirmDialog
            isDialogActive={this.state.isDialogActive}
            title={'Delete Task'}
            content={'Are you sure you want to delete this task?'}
            onSubmitDialog={this.handleSubmitDialog}
            onCloseDialog={this.handleCloseDialog} />
        </Form>
      </li>
    );
  }
}

module.exports = ListItem;