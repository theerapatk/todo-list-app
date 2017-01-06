import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';

class TodoFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterType: this.props.filterType
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({filterType: e.target.value});
    this.props.onChange(e.target.value);
  }

  render() {
    const {filterType} = this.state;
    
    return (
      <div>
        Filters:
        <Radio
          inline
          value="all"
          checked={filterType==="all"}
          onChange={this.handleChange}>{'All'}
        </Radio>
        <Radio
          inline
          value="completed"
          checked={filterType==="completed"}
          onChange={this.handleChange}>{'Completed'}
        </Radio>
        <Radio
          inline
          value="not_completed"
          checked={filterType==="not_completed"}
          onChange={this.handleChange}>{'Not Completed'}
        </Radio>
      </div>
    );
  }
}

module.exports = TodoFilter;