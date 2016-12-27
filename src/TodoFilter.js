import React, { Component } from 'react';

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
  }

  render() {
    const {filterType} = this.state;
    return (
      <div>
        Filters:
        <input
          type="radio"
          name="all"
          value="all"
          checked={filterType==="all"}
          onChange={this.handleChange}/>{'All'}
        <input
          type="radio"
          name="completed"
          value="completed"
          checked={filterType==="completed"}
          onChange={this.handleChange}/>{'Completed'}
        <input
          type="radio"
          name="not_completed"
          value="not_completed"
          checked={filterType==="not_completed"}
          onChange={this.handleChange}/>{'Not Completed'}
      </div>
    );
  }
}

module.exports = TodoFilter;