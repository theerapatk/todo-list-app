import React, { Component } from 'react';

class DialogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.fieldValue,
      warningText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var warningText = '';
    var disabled = false;
    if (e.target.id === 'title') {
      if (e.target.value == null || e.target.value === '') {
        warningText = 'Required';
        disabled = true;
      }
    }
    this.setState({value: e.target.value, warningText: warningText});
    this.props.onChange(e.target.id, e.target.value, disabled);
  }

  render() {
    return (
      <span>
        {this.props.label + ': '} {this.state.warningText}
        <input
          type="text"
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange} /><br/>
      </span>
    );
  }
}

module.exports = DialogInput;