import React, { Component } from 'react';
import { Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class DialogInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.fieldValue
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange(e.target.id, e.target.value);
  }

  render() {
    var isError = false;
    if (this.props.id === 'title') {
      if (this.state.value == null || this.state.value.trim() === '') {
        isError = true;
      }
    }

    return (
      <Form componentClass="fieldset" horizontal>
        <FormGroup validationState={isError ? 'error' : null}>
          <Col componentClass={ControlLabel} xs={3}>
            {this.props.label}
          </Col>
          <Col xs={9}>
            {this.props.isEditing && this.props.isInViewMode ? (
                <FormControl.Static>
                  {this.state.value}
                </FormControl.Static>
              ) : (
                <FormControl
                  type="text"
                  id={this.props.id}
                  value={this.state.value}
                  placeholder={isError ? 'Required' : null}
                  onChange={this.handleChange} />
              )
            }
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

module.exports = DialogInput;