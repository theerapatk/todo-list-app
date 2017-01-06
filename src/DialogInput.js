import React, { Component } from 'react';
import { Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class DialogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.fieldValue,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var disabled = false;
    if (e.target.id === 'title') {
      if (e.target.value == null || e.target.value.trim() === '') {
        disabled = true;
      }
    }
    this.setState({value: e.target.value});
    this.props.onChange(e.target.id, e.target.value, disabled);
  }

  render() {
    var validationState = null;
    if (this.state.value == null || this.state.value.trim() === '') {
      validationState = 'error';
    }

    return (
      <Form componentClass="fieldset" horizontal>
        <FormGroup validationState={validationState}>
          <Col componentClass={ControlLabel} xs={3}>
            {this.props.label}
          </Col>
          <Col xs={9}>
            <FormControl
              type="text"
              id={this.props.id}
              value={this.state.value}
              onChange={this.handleChange} />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

module.exports = DialogInput;