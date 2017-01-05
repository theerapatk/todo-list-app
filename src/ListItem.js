import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';
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

  render() {
    const {item} = this.props

    return (
      <li>
        <Checkbox checked={this.state.checked} onChange={this.handleCheckboxClick}>
        	<Task item={item} onClick={this.handleTaskClick}/>
        </Checkbox>
      </li>
    );
  }
}

module.exports = ListItem;