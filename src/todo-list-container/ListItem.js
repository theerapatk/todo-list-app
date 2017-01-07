import React, { Component } from 'react';
import { Checkbox, Button, Form, FormGroup } from 'react-bootstrap';
import Task from './Task';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	checked: this.props.item.completed,
      id: this.props.item.id
    }
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
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

  render() {
    const {item} = this.props

    return (
      <li>
        <Form inline>
          <Checkbox
            className="ListItem-checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxClick}>
            <Task item={item} onClick={this.handleTaskClick} />
          </Checkbox>
          <Button onClick={this.handleDeleteButtonClick}>Delete</Button>
        </Form>
      </li>
    );
  }
}

module.exports = ListItem;