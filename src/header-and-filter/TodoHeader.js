import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TodoHeader extends Component {
  render() {
    return (
      <div className='page-header'>
        <div className='btn-toolbar pull-right'>
            <div className='btn-group'>
                <Button bsStyle="primary" onClick={this.props.onClickAddBotton}>Add</Button>
            </div>
        </div>
        <h2>{this.props.headerText}</h2>
      </div>
    );
  }
}

module.exports = TodoHeader;