import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
        <span className="header-element"><h3>Remiders</h3></span>
				<span className="header-element"><Button onClick={this.props.onClickAddBotton}>Add</Button></span>
      </div>
    );
  }
}

module.exports = TodoHeader;