import React, { Component } from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class DialogDatePicker extends Component {
  constructor(props) {
    super(props);
    let date = this.props.fieldValue ? new Date(this.props.fieldValue).toISOString() : '';
    this.state = {
      value: date
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
    this.props.onChange('date', value);
  }

  render() {
    return (
      <Form componentClass="fieldset" horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} xs={3}>
            {this.props.label}
          </Col>
          <Col xs={9}>
            {this.props.isEditing && this.props.isInViewMode ? (
                <FormControl.Static>
                  {this.state.value}
                </FormControl.Static>
              ) : (
                <DatePicker
                  value={this.state.value}
                  onChange={this.handleChange} />
              )
            }
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

module.exports = DialogDatePicker;