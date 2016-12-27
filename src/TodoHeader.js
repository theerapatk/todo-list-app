import React, { Component } from 'react';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], text: ''};
    // this.onSubmit = this.onSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.props.onClickAddBotton();
	}

  render() {
    return (
    	<div>
        <span className="header-element"><h3>Remiders</h3></span>
				<span className="header-element"><input type="button" value="Add" onClick={this.handleClick}/></span>
      </div>
    );
  }
}

module.exports = TodoHeader;